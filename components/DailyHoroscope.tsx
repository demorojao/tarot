import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '../constants';
import { getDailyHoroscope } from '../services/geminiService';

export const DailyHoroscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignClick = async (signId: string, signName: string) => {
    setSelectedSign(signId);
    setLoading(true);
    setHoroscope(null);

    try {
      const result = await getDailyHoroscope(signName);
      setHoroscope(result);
    } catch (error) {
      setHoroscope("Não foi possível conectar com as estrelas hoje. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const clearSelection = () => {
    setSelectedSign(null);
    setHoroscope(null);
  };

  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-indigo-300 mb-2">Horóscopo Diário</h2>
        <p className="text-indigo-400/60 font-serif uppercase tracking-widest text-sm">{today}</p>
      </div>

      {!selectedSign ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ZODIAC_SIGNS.map((sign) => (
            <button
              key={sign.id}
              onClick={() => handleSignClick(sign.id, sign.name)}
              className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 flex flex-col items-center gap-2"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{sign.symbol}</span>
              <h3 className="text-lg font-serif text-slate-200 group-hover:text-white font-bold">{sign.name}</h3>
              <p className="text-xs text-slate-500">{sign.dateRange}</p>
              <div className="mt-2 text-xs px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-700">
                {sign.element}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto animate-fade-in">
          <button
            onClick={clearSelection}
            className="mb-6 flex items-center text-indigo-400 hover:text-indigo-200 transition-colors gap-2"
          >
            ← Voltar para Signos
          </button>

          <div className="bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 border-b border-indigo-500/20 pb-6">
                <span className="text-6xl">{ZODIAC_SIGNS.find(s => s.id === selectedSign)?.symbol}</span>
                <div>
                  <h3 className="text-3xl font-serif text-white">
                    {ZODIAC_SIGNS.find(s => s.id === selectedSign)?.name}
                  </h3>
                  <p className="text-indigo-300">Previsão para {today}</p>
                </div>
              </div>

              {loading ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-indigo-300 font-serif animate-pulse">Lendo as constelações...</p>
                </div>
              ) : (
                <div className="prose prose-invert prose-indigo max-w-none whitespace-pre-wrap leading-relaxed text-slate-200">
                  {horoscope}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};