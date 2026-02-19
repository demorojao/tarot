import React, { useState } from 'react';
import { TAROT_DECK } from '../constants';
import { TarotCardData, AstrologyResult } from '../types';
import { interpretTarotSpread } from '../services/geminiService';
import { supabase } from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Props {
  onError: (msg: string) => void;
  astrologyContext: AstrologyResult; // Obrigatório
}

interface CardProps {
  card: TarotCardData;
  positionLabel: string;
  revealed: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ card, positionLabel, revealed, onClick }) => (
  <div
    className={`flex flex-col items-center gap-2`}
  >
    <div
      className={`card-flip w-32 h-52 sm:w-40 sm:h-64 cursor-pointer group ${revealed ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner relative w-full h-full duration-500">
        {/* Back of Card */}
        <div className="card-front absolute w-full h-full bg-indigo-950 border-2 border-amber-600 rounded-xl flex items-center justify-center shadow-lg backface-hidden z-10">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 absolute"></div>
          <span className="text-4xl text-amber-500">?</span>
        </div>

        {/* Front of Card */}
        <div className="card-back absolute w-full h-full bg-slate-800 border-2 border-amber-400 rounded-xl overflow-hidden shadow-amber-500/20 shadow-xl flex items-center justify-center">
          <img
            src={card.imageUrl}
            alt={card.namePt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const div = document.createElement('div');
              div.className = "absolute inset-0 flex items-center justify-center p-4 text-center text-amber-200 font-serif";
              div.innerText = card.namePt;
              e.currentTarget.parentElement?.appendChild(div);
            }}
          />
          <div className="absolute bottom-0 w-full bg-black/60 p-1 text-center">
            <p className="text-[10px] text-amber-100 uppercase tracking-wider truncate px-1">{card.namePt}</p>
          </div>
        </div>
      </div>
    </div>
    {revealed && (
      <span className="text-xs text-amber-300 font-serif uppercase tracking-widest bg-slate-900/50 px-2 py-1 rounded border border-amber-900/30">
        {positionLabel}
      </span>
    )}
  </div>
);

export const TarotReader: React.FC<Props> = ({ onError, astrologyContext }) => {
  const { user } = useAuth();
  const [question, setQuestion] = useState('');
  const [step, setStep] = useState<'input' | 'shuffling' | 'revealing' | 'result'>('input');
  const [drawnCards, setDrawnCards] = useState<TarotCardData[]>([]);
  const [interpretation, setInterpretation] = useState('');
  const [loading, setLoading] = useState(false);

  const drawCards = async () => {
    setStep('shuffling');

    // Simulate shuffle delay
    setTimeout(() => {
      const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setDrawnCards(selected);
      setStep('revealing');
      getInterpretation(selected);
    }, 2000);
  };

  const getInterpretation = async (cards: TarotCardData[]) => {
    setLoading(true);
    try {
      const result = await interpretTarotSpread(question, cards, astrologyContext);
      setInterpretation(result);

      if (user) {
        await supabase.from('tarot_readings').insert({
          user_id: user.id,
          question: question,
          cards: cards,
          interpretation: result,
        });
      }
    } catch (err: any) {
      onError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const positions = ['Passado', 'Presente', 'Futuro'];

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col items-center">
      {step === 'input' && (
        <div className="w-full max-w-md glass-panel p-8 animate-fade-in-up">
          <h2 className="text-3xl font-serif text-amber-400 mb-6 text-center drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Oráculo Tarot</h2>

          <div className="mb-6 p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-lg flex items-start gap-3 backdrop-blur-sm">
            <span className="text-2xl mt-1">🪐</span>
            <div>
              <h4 className="text-amber-300 font-serif font-bold text-sm">Conexão Astral Estabelecida</h4>
              <p className="text-xs text-indigo-200 mt-1 leading-relaxed">
                Calibrando leitura para: <span className="font-bold text-white">{astrologyContext.planets.sun.sign}</span> com Ascendente em <span className="font-bold text-white">{astrologyContext.planets.rising.sign}</span>.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-indigo-300 text-sm font-bold mb-2 font-serif">Sua Pergunta (Opcional)</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex: O que esperar do amor este mês?"
              className="w-full bg-slate-900/40 border border-white/10 rounded-lg p-4 text-amber-100 placeholder-slate-400 focus:outline-none focus:border-amber-500/50 focus:bg-slate-900/60 transition-all backdrop-blur-sm"
            />
          </div>

          <button
            onClick={drawCards}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50"
          >
            Consultar as Cartas
          </button>
        </div>
      )}

      {step === 'shuffling' && (
        <div className="flex flex-col items-center justify-center h-64 animate-pulse">
          <div className="text-4xl text-amber-500 mb-4 animate-spin">✦</div>
          <p className="text-xl font-serif text-amber-200">Embaralhando o destino...</p>
        </div>
      )}

      {(step === 'revealing' || step === 'result') && (
        <div className="w-full flex flex-col items-center">
          <h3 className="text-center font-serif text-2xl text-amber-200 mb-2">
            {step === 'revealing' ? 'Revelação' : 'Templo do Tempo'}
          </h3>
          <p className="text-slate-400 text-sm mb-8 text-center max-w-lg">
            {question ? `"${question}"` : 'Leitura Geral'}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {drawnCards.map((card, idx) => (
              <Card
                key={idx}
                card={card}
                positionLabel={positions[idx] || `Posição ${idx + 1}`}
                revealed={true}
              />
            ))}
          </div>

          {loading && (
            <div className="text-center p-4 bg-slate-800/50 rounded-lg animate-pulse max-w-2xl mx-auto">
              <p className="text-amber-200 font-serif">A Mystica está decifrando os símbolos...</p>
              <p className="text-xs text-indigo-400 mt-2">Sintonizando com a energia de {astrologyContext.planets.sun.sign}...</p>
            </div>
          )}

          {!loading && interpretation && (
            <div className="glass-panel p-6 md:p-8 max-w-4xl w-full mx-auto animate-fade-in-up">
              <h4 className="text-xl text-amber-400 font-serif mb-4 border-b border-amber-900 pb-2 flex items-center gap-2">
                <span>🔮</span> Interpretação Mística
              </h4>
              <div className="prose prose-invert prose-amber max-w-none text-slate-200 whitespace-pre-wrap leading-relaxed text-justify">
                {interpretation}
              </div>
              <button
                onClick={() => { setStep('input'); setQuestion(''); setInterpretation(''); }}
                className="mt-8 text-amber-500 hover:text-amber-300 underline text-sm block mx-auto"
              >
                Realizar Nova Leitura
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};