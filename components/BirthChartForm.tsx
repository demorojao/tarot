
import React, { useState } from 'react';
import { BirthChartData, AstrologyResult, PlanetInfo, DeepPointInfo } from '../types';
import { interpretBirthChart } from '../services/geminiService';
import { supabase } from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';
interface Props {
  onError: (msg: string) => void;
  onChartComplete: (result: AstrologyResult) => void;
}

export const BirthChartForm: React.FC<Props> = ({ onError, onChartComplete }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<BirthChartData>({
    name: '',
    date: '',
    time: '',
    place: ''
  });
  const [result, setResult] = useState<AstrologyResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      onError("Por favor, preencha a data e o horário corretamente.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const chartResult = await interpretBirthChart(formData);
      setResult(chartResult);
      onChartComplete(chartResult); // Envia para o App.tsx

      if (user) {
        await supabase.from('birth_charts').insert({
          user_id: user.id,
          name: formData.name,
          date: formData.date,
          time: formData.time,
          place: formData.place,
          chart_data: chartResult
        });
      }
    } catch (err: any) {
      console.error("[BirthChartForm] Erro:", err);
      onError(err.message || "As estrelas estão nubladas. Tente novamente em alguns instantes.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const PlanetCard = ({
    title,
    icon,
    data,
    colorClass
  }: {
    title: string,
    icon: string,
    data: PlanetInfo,
    colorClass: string
  }) => (
    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label={title}>{icon}</span>
          <div>
            <h4 className={`font-serif font-bold text-sm uppercase tracking-wider ${colorClass}`}>{title}</h4>
            <span className="text-xs text-slate-400 block">em {data.house}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-serif text-lg text-white font-bold">{data.sign}</span>
        </div>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-700/50 pt-2 mt-1">
        {data.description}
      </p>
    </div>
  );

  const DeepPointCard = ({
    title,
    icon,
    data,
    bgClass
  }: {
    title: string,
    icon: string,
    data: DeepPointInfo,
    bgClass: string
  }) => (
    <div className={`p-4 rounded-xl border border-white/10 ${bgClass} relative overflow-hidden group`}>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-serif font-bold text-white flex items-center gap-2">
            <span className="text-xl">{icon}</span> {title}
          </h4>
          <span className="font-serif text-amber-200">{data.sign}</span>
        </div>
        <p className="text-xs text-slate-200/90 leading-relaxed">
          {data.meaning}
        </p>
      </div>
      <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/3 xl:w-1/4 glass-panel p-6 md:p-8 h-fit sticky top-24 border-amber-900/30">
        <h2 className="text-2xl font-serif text-amber-400 mb-6 border-b border-amber-900/50 pb-2">Dados de Nascimento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-serif text-amber-200 mb-1">Nome Completo</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              title="Nome Completo"
              className="w-full bg-slate-900/60 border border-white/10 rounded p-3 text-white focus:border-amber-500/50 focus:bg-slate-900/80 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-serif text-amber-200 mb-1">Data de Nascimento</label>
            <input
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              title="Data de Nascimento"
              className="w-full bg-slate-900/60 border border-white/10 rounded p-3 text-white focus:border-amber-500/50 focus:bg-slate-900/80 outline-none block transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-serif text-amber-200 mb-1">Horário (exato)</label>
            <input
              name="time"
              type="time"
              required
              value={formData.time}
              onChange={handleChange}
              title="Horário de Nascimento"
              className="w-full bg-slate-900/60 border border-white/10 rounded p-3 text-white focus:border-amber-500/50 focus:bg-slate-900/80 outline-none block transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-serif text-amber-200 mb-1">Cidade e Estado</label>
            <input
              name="place"
              type="text"
              required
              value={formData.place}
              onChange={handleChange}
              placeholder="Ex: São Paulo, SP"
              className="w-full bg-slate-900/60 border border-white/10 rounded p-3 text-white focus:border-amber-500/50 focus:bg-slate-900/80 outline-none transition-colors" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-lg font-bold font-serif shadow-lg mt-6 text-sm transition-all transform hover:scale-[1.02] active:scale-95 ${loading ? 'bg-slate-600 cursor-wait shadow-none text-slate-300' : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/50'}`}
          >
            {loading ? 'Consultando as Estrelas...' : 'Revelar Mapa Completo'}
          </button>
        </form>
      </div>

      {/* Result Section */}
      <div className="w-full lg:w-3/4 min-h-[500px]">
        {!result && !loading && (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700 rounded-2xl p-8 bg-slate-900/30">
            <span className="text-6xl mb-4 opacity-50">🌌</span>
            <p className="text-center max-w-sm font-serif text-lg">
              Preencha os dados ao lado para desbloquear a geometria sagrada do seu nascimento.
            </p>
          </div>
        )}

        {loading && (
          <div className="h-full flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-500"></div>
            <p className="text-indigo-300 font-serif animate-pulse">Calculando posições planetárias...</p>
          </div>
        )}

        {result && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-gradient-to-r from-indigo-950/80 to-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/30 shadow-2xl">
              <h3 className="text-3xl font-serif text-indigo-100 text-center mb-2">Mapa Astral de {formData.name}</h3>
              <p className="text-center text-indigo-300 text-sm italic mb-0">{result.elementalBalance}</p>
            </div>

            <h4 className="text-amber-400 font-serif text-xl border-l-4 border-amber-500 pl-3">Tríade e Propósito</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PlanetCard title="Sol" icon="☀️" data={result.planets.sun} colorClass="text-amber-400" />
              <PlanetCard title="Lua" icon="🌙" data={result.planets.moon} colorClass="text-slate-300" />
              <PlanetCard title="Ascendente" icon="⬆️" data={result.planets.rising} colorClass="text-indigo-400" />
            </div>

            {/* Nova Seção: Pontos Profundos */}
            <h4 className="text-rose-400 font-serif text-xl border-l-4 border-rose-500 pl-3 mt-8">Segredos da Alma</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DeepPointCard
                title="Nódulo Norte"
                icon="🧭"
                data={result.deepPoints.northNode}
                bgClass="bg-gradient-to-br from-indigo-900 to-indigo-950"
              />
              <DeepPointCard
                title="Lilith"
                icon="🌑"
                data={result.deepPoints.lilith}
                bgClass="bg-gradient-to-br from-slate-900 to-black"
              />
              <DeepPointCard
                title="Quíron"
                icon="🩹"
                data={result.deepPoints.chiron}
                bgClass="bg-gradient-to-br from-emerald-900 to-teal-950"
              />
            </div>

            <h4 className="text-emerald-400 font-serif text-xl border-l-4 border-emerald-500 pl-3 mt-8">Planetas Pessoais</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PlanetCard title="Mercúrio" icon="☿️" data={result.planets.mercury} colorClass="text-emerald-300" />
              <PlanetCard title="Vênus" icon="♀️" data={result.planets.venus} colorClass="text-pink-300" />
              <PlanetCard title="Marte" icon="♂️" data={result.planets.mars} colorClass="text-red-400" />
            </div>

            <h4 className="text-purple-400 font-serif text-xl border-l-4 border-purple-500 pl-3 mt-8">Planetas Sociais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlanetCard title="Júpiter" icon="♃" data={result.planets.jupiter} colorClass="text-purple-300" />
              <PlanetCard title="Saturno" icon="♄" data={result.planets.saturn} colorClass="text-stone-400" />
            </div>

            <div className="bg-black/40 p-8 rounded-xl border border-slate-700 mt-8">
              <h4 className="text-indigo-300 font-serif mb-4 text-xl flex items-center gap-2">
                <span>📜</span> Síntese da Alma
              </h4>
              <p className="text-slate-300 leading-relaxed text-justify whitespace-pre-line">
                {result.analysis}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};