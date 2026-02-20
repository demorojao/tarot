import React, { useState, useEffect } from 'react';
import { AppView, AstrologyResult } from './types';
import { TarotReader } from './components/TarotReader';
import { BirthChartForm } from './components/BirthChartForm';
import { Library } from './components/Library';
import { DailyHoroscope } from './components/DailyHoroscope';
import { ThreeBackground } from './components/ThreeBackground';
import { MagicButton } from './components/ui/MagicButton';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AuthModal } from './components/AuthModal';
import { HistoryView } from './components/HistoryView';
import './index.css';

const AppContent: React.FC = () => {
  const { user, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Estado compartilhado do Mapa Astral
  const [userAstrology, setUserAstrology] = useState<AstrologyResult | null>(null);

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(null), 6000);
  };

  const handleNavigate = (view: AppView) => {
    // Bloqueio do Tarot se não houver Mapa Astral
    if (view === AppView.TAROT && !userAstrology) {
      showError("O Oráculo está trancado. As cartas exigem a vibração do seu Mapa Astral para serem reveladas. Complete seu mapa primeiro!");
      setCurrentView(AppView.ASTROLOGY);
      setIsMenuOpen(false);
      return;
    }

    if (view === AppView.HISTORY && !user) {
      setIsAuthModalOpen(true);
      setIsMenuOpen(false);
      return;
    }

    setCurrentView(view);
    setIsMenuOpen(false);
  };

  const handleChartComplete = (result: AstrologyResult) => {
    setUserAstrology(result);
  };

  const NavButton = ({ view, label, icon }: { view: AppView, label: string, icon: string }) => {
    const isLocked = view === AppView.TAROT && !userAstrology;

    return (
      <button
        onClick={() => handleNavigate(view)}
        className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentView === view
          ? 'bg-amber-600/20 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
          : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
      >
        <span className="text-xl group-hover:scale-110 transition-transform duration-300">{isLocked ? '🔒' : icon}</span>
        <span className="font-serif font-bold text-xs xl:text-sm tracking-wide hidden lg:inline">{label}</span>
        {currentView === view && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]"></div>
        )}
      </button>
    );
  };

  const MobileNavLink = ({ view, label, icon }: { view: AppView, label: string, icon: string }) => {
    const isLocked = view === AppView.TAROT && !userAstrology;

    return (
      <button
        onClick={() => handleNavigate(view)}
        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all border ${currentView === view
          ? 'bg-amber-600/20 border-amber-500 text-amber-200'
          : 'bg-slate-800/50 border-transparent text-slate-300'
          }`}
      >
        <span className="text-2xl">{isLocked ? '🔒' : icon}</span>
        <span className="font-serif font-bold text-lg">{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen text-slate-200 overflow-x-hidden relative">
      <ThreeBackground />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Header / Top Bar Navigation */}
      <header className="fixed top-0 w-full z-50 p-4 bg-slate-900/40 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 md:px-4">

          <div className="flex items-center gap-4 lg:gap-8">
            <div
              className="text-xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 cursor-pointer drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform shrink-0"
              onClick={() => handleNavigate(AppView.HOME)}
            >
              MYSTICA
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5 backdrop-blur-md">
              <NavButton view={AppView.HOME} label="Início" icon="✨" />
              <NavButton view={AppView.TAROT} label="Tarot" icon="🎴" />
              <NavButton view={AppView.HOROSCOPE} label="Horóscopo" icon="🔮" />
              <NavButton view={AppView.ASTROLOGY} label="Mapa" icon="🪐" />
              <NavButton view={AppView.LIBRARY} label="Grimório" icon="📖" />
              <NavButton view={AppView.HISTORY} label="Histórico" icon="📜" />
            </nav>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="hidden lg:block text-xs text-slate-400 font-serif">
                  Olá, <span className="text-amber-200">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                </span>
                <MagicButton
                  variant="ghost"
                  onClick={signOut}
                  className="!px-4 !py-2 text-xs"
                >
                  Sair
                </MagicButton>
              </div>
            ) : (
              <MagicButton
                variant="primary"
                onClick={() => setIsAuthModalOpen(true)}
                icon="👤"
                className="hidden lg:flex !py-2 !px-4 text-xs xl:text-sm h-[40px] xl:h-[44px]"
              >
                Entrar / Criar Conta
              </MagicButton>
            )}

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-2xl text-amber-500 p-2 focus:outline-none transition-transform active:scale-90 bg-slate-800/50 rounded-lg backdrop-blur border border-amber-500/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </header >

      {/* Mobile Menu Overlay/Drawer */}
      < div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-slate-900 border-l border-amber-900/50 p-6 pt-24 shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col space-y-3">
            <MobileNavLink view={AppView.HOME} label="Início" icon="✨" />
            <MobileNavLink view={AppView.TAROT} label="Tarot" icon="🎴" />
            <MobileNavLink view={AppView.HOROSCOPE} label="Horóscopo" icon="🔮" />
            <MobileNavLink view={AppView.ASTROLOGY} label="Mapa Astral" icon="🪐" />
            <MobileNavLink view={AppView.LIBRARY} label="Grimório" icon="📖" />
            <MobileNavLink view={AppView.HISTORY} label="Histórico" icon="📜" />

            <div className="pt-6 mt-6 border-t border-slate-800">
              {!user ? (
                <button
                  onClick={() => { setIsAuthModalOpen(true); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl bg-amber-600/20 border border-amber-500 text-amber-200"
                >
                  <span className="font-serif font-bold">Entrar / Cadastrar</span>
                </button>
              ) : (
                <button
                  onClick={() => { signOut(); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
                >
                  <span className="font-serif">Sair da Conta</span>
                </button>
              )}
            </div>
          </div>
          <div className="mt-auto pt-12 text-center text-slate-500 text-xs font-serif">
            <p className="animate-pulse">Siga a luz das estrelas ✧</p>
          </div>
        </div>
      </div >

      {/* Main Content */}
      < main className="pt-32 pb-12 px-4 min-h-screen relative" >

        {/* Global Error Toast */}
        {
          errorMsg && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.5)] animate-fade-in-up z-50 flex items-center gap-3 border border-amber-500/50 max-w-md w-[90%] backdrop-blur-md">
              <span className="text-2xl animate-pulse">✨</span>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-amber-400">Mensagem Astral</span>
                <span className="text-sm text-slate-300">{errorMsg}</span>
              </div>
            </div>
          )
        }

        {/* Views */}
        {
          currentView === AppView.HOME && (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in-up">
              <div className="mb-4 text-amber-500 text-sm font-serif tracking-[0.3em] uppercase opacity-80 animate-pulse">
                Sabedoria Ancestral & Intuição Astral
              </div>

              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)] leading-tight">
                Descubra seu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">Destino</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
                O véu entre o mundo espiritual e o digital foi rompido. O que as estrelas revelam sobre você hoje?
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <MagicButton
                  variant="primary"
                  onClick={() => handleNavigate(AppView.ASTROLOGY)}
                  icon="🪐"
                >
                  {userAstrology ? 'Ver Mapa Astral' : 'Revelar Mapa Astral'}
                </MagicButton>

                <MagicButton
                  variant={userAstrology ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate(AppView.TAROT)}
                  icon={userAstrology ? '🎴' : '🔒'}
                  disabled={!userAstrology}
                  className={!userAstrology ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  Consultar Tarot
                </MagicButton>
              </div>

              {!userAstrology && (
                <div className="mt-16 glass-panel p-6 max-w-md animate-pulse border-amber-500/30">
                  <p className="text-sm text-slate-400 font-serif">
                    <span className="text-amber-500 font-bold uppercase tracking-widest block mb-2">✦ Aviso Sagrado ✦</span>
                    O Tarot exige que você revele seu Mapa Astral primeiro para uma leitura precisa.
                  </p>
                </div>
              )}

              {userAstrology && (
                <div className="mt-16 glass-panel p-6 max-w-md cursor-pointer hover:bg-slate-800/80 transition-colors border-indigo-500/40" onClick={() => handleNavigate(AppView.TAROT)}>
                  <p className="text-sm text-indigo-200 font-serif">
                    Sincronizado: <span className="text-amber-300 font-bold text-lg mx-2">{userAstrology.planets.sun.sign}</span>
                    <br />O portal do Tarot está aberto.
                  </p>
                </div>
              )}
            </div>
          )
        }

        {/* Conditional Rendering with Guard Clause Pattern */}
        {
          currentView === AppView.TAROT && userAstrology && (
            <TarotReader onError={showError} astrologyContext={userAstrology} />
          )
        }

        {currentView === AppView.ASTROLOGY && <BirthChartForm onError={showError} onChartComplete={handleChartComplete} />}
        {currentView === AppView.HOROSCOPE && <DailyHoroscope />}
        {currentView === AppView.LIBRARY && <Library />}
        {currentView === AppView.HISTORY && <HistoryView />}

        {
          currentView === AppView.ABOUT && (
            <div className="max-w-3xl mx-auto glass-panel p-8">
              <h2 className="text-3xl font-serif text-amber-400 mb-6">Sobre a Mystica</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  O <strong>Mystica</strong> utiliza conhecimentos profundos guardados nos arquivos do universo, combinando arquétipos milenares através do oráculo digital para guiar seus caminhos com clareza.
                </p>
              </div>
            </div>
          )
        }

      </main >

      {/* Footer */}
      < footer className="text-center py-6 text-slate-600 text-sm border-t border-white/5 bg-slate-900/40 backdrop-blur-sm" >
        <p>© 2026 Mystica App. Desenvolvido com React, Tailwind e Supabase.</p>
        <p className="text-xs mt-1">Conectado às estrelas.</p>
      </footer >
    </div >
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;