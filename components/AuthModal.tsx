import React, { useState } from 'react';
import { supabase } from '../services/supabase';
import { MagicButton } from './ui/MagicButton';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type AuthMode = 'login' | 'register' | 'forgot';

export const AuthModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState<AuthMode>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            if (mode === 'login') {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                onClose();
            } else if (mode === 'register') {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: name,
                        }
                    }
                });
                if (error) throw error;
                setSuccessMsg("Conta criada! Verifique seu email para confirmar.");
            } else if (mode === 'forgot') {
                const { error } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: window.location.origin,
                });
                if (error) throw error;
                setSuccessMsg("Email de recuperação enviado. Verifique sua caixa de entrada.");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                }
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    };

    const SocialButton = ({ icon, label, onClick }: { icon: string, label: string, onClick?: () => void }) => (
        <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 text-sm text-slate-300 transition-all hover:text-white group"
            onClick={onClick}
        >
            <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{icon}</span>
            <span>{label}</span>
        </button>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
            <div
                className="w-full max-w-md glass-panel overflow-hidden relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Header Tabs */}
                <div className="flex border-b border-white/5 relative z-10">
                    <button
                        onClick={() => { setMode('login'); setError(null); }}
                        className={`flex-1 py-4 text-sm font-serif font-bold transition-all ${mode === 'login' ? 'text-amber-400 bg-white/5 border-b-2 border-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        ENTRAR
                    </button>
                    <button
                        onClick={() => { setMode('register'); setError(null); }}
                        className={`flex-1 py-4 text-sm font-serif font-bold transition-all ${mode === 'register' ? 'text-amber-400 bg-white/5 border-b-2 border-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        CRIAR CONTA
                    </button>
                </div>

                <div className="p-8 relative z-10">
                    <h2 className="text-2xl font-serif text-white mb-2 text-center">
                        {mode === 'login' && 'Bem-vindo de Volta'}
                        {mode === 'register' && 'Inicie sua Jornada'}
                        {mode === 'forgot' && 'Recuperar Acesso'}
                    </h2>
                    <p className="text-center text-slate-400 text-sm mb-6">
                        {mode === 'login' && 'O cosmos aguarda sua presença.'}
                        {mode === 'register' && 'Crie seu perfil e salve suas leituras.'}
                        {mode === 'forgot' && 'Enviaremos um link mágico para você.'}
                    </p>

                    {error && (
                        <div className="bg-red-900/40 border border-red-500/30 text-red-200 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
                            <span>⚠️</span> {error}
                        </div>
                    )}

                    {successMsg && (
                        <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
                            <span>✨</span> {successMsg}
                        </div>
                    )}

                    <form onSubmit={handleAuth} className="space-y-4">
                        {mode === 'register' && (
                            <div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">👤</span>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Seu Nome Místico"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-amber-500/50 focus:bg-slate-900/80 outline-none transition-all backdrop-blur-sm"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">✉️</span>
                                <input
                                    type="email"
                                    required
                                    placeholder="Seu email místico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-amber-500/50 focus:bg-slate-900/80 outline-none transition-all backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        {mode !== 'forgot' && (
                            <div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔒</span>
                                    <input
                                        type="password"
                                        required
                                        minLength={6}
                                        placeholder="Sua senha secreta"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-amber-500/50 focus:bg-slate-900/80 outline-none transition-all backdrop-blur-sm"
                                    />
                                </div>
                                {mode === 'login' && (
                                    <div className="text-right mt-2">
                                        <button
                                            type="button"
                                            onClick={() => setMode('forgot')}
                                            className="text-xs text-slate-400 hover:text-amber-400 transition-colors"
                                        >
                                            Esqueci minha senha
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <MagicButton
                            type="submit"
                            variant="primary"
                            disabled={loading}
                            className="w-full justify-center mt-6"
                        >
                            {loading ? 'Processando...' : (
                                mode === 'login' ? 'Entrar no Portal' :
                                    mode === 'register' ? 'Criar Conta' : 'Enviar Link'
                            )}
                        </MagicButton>

                        {mode === 'login' && (
                            <div className="text-center mt-4">
                                <span className="text-slate-400 text-sm">Ainda não tem conta? </span>
                                <button
                                    type="button"
                                    onClick={() => setMode('register')}
                                    className="text-amber-400 hover:text-amber-300 text-sm font-bold underline decoration-amber-500/30 underline-offset-4"
                                >
                                    Crie agora
                                </button>
                            </div>
                        )}

                        {mode === 'register' && (
                            <div className="text-center mt-4">
                                <span className="text-slate-400 text-sm">Já é um místico? </span>
                                <button
                                    type="button"
                                    onClick={() => setMode('login')}
                                    className="text-amber-400 hover:text-amber-300 text-sm font-bold underline decoration-amber-500/30 underline-offset-4"
                                >
                                    Entre aqui
                                </button>
                            </div>
                        )}
                    </form>

                    {mode !== 'forgot' && (
                        <>
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-2 text-slate-500">Ou continue com</span></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <SocialButton icon="🔴" label="Google" onClick={handleGoogleLogin} />
                                <SocialButton icon="🍎" label="Apple" onClick={() => setError('Em breve...')} />
                            </div>
                        </>
                    )}

                    {mode === 'forgot' && (
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            className="w-full mt-4 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            Voltar para o Login
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
