import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { useAuth } from '../contexts/AuthContext';

export const HistoryView: React.FC = () => {
    const { user } = useAuth();
    const [readings, setReadings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetchHistory();
        } else {
            setLoading(false);
        }
    }, [user]);

    const fetchHistory = async () => {
        try {
            const { data, error } = await supabase
                .from('tarot_readings')
                .select('*')
                .eq('user_id', user?.id)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setReadings(data || []);
        } catch (error) {
            console.error('Error fetching history:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-amber-500 animate-pulse text-xl font-serif">Carregando memórias...</div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center p-8 glass-panel max-w-lg mx-auto mt-12">
                <h2 className="text-2xl font-serif text-amber-400 mb-4">Grimório Fechado</h2>
                <p className="text-slate-300">Faça login para acessar suas leituras passadas.</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 animate-fade-in-up">
            <h2 className="text-4xl font-serif text-white mb-8 text-center drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                Seu Grimório Pessoal
            </h2>

            {readings.length === 0 ? (
                <div className="text-center text-slate-400 font-serif">
                    Nenhuma leitura encontrada nas areias do tempo viajem.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {readings.map((reading) => (
                        <div key={reading.id} className="glass-panel p-6 hover:bg-slate-800/80 transition-all border-l-4 border-l-amber-600">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs text-slate-500 font-mono uppercase">
                                    {new Date(reading.created_at).toLocaleDateString()}
                                </span>
                                <span className="text-xl">🎴</span>
                            </div>
                            <h3 className="text-lg font-serif text-amber-200 mb-2 font-bold truncate">
                                {reading.question || "Leitura Geral"}
                            </h3>
                            <p className="text-sm text-slate-300 line-clamp-4 leading-relaxed">
                                {reading.interpretation}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
