import React, { useState } from 'react';
import { TAROT_DECK } from '../constants';
import { TarotCardData } from '../types';
type FilterCategory = 'ALL' | 'MAJOR' | 'WANDS' | 'CUPS' | 'SWORDS' | 'PENTACLES';

export const Library: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<TarotCardData | null>(null);
  const [filter, setFilter] = useState<FilterCategory>('ALL');

  const filteredCards = TAROT_DECK.filter(card => {
    if (filter === 'ALL') return true;
    if (filter === 'MAJOR') return card.arcana === 'Major';
    return card.suit === (filter.charAt(0) + filter.slice(1).toLowerCase());
  });

  const TabButton = ({ cat, label }: { cat: FilterCategory, label: string }) => (
    <button
      onClick={() => setFilter(cat)}
      className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-serif transition-all border ${filter === cat
        ? 'bg-amber-600 border-amber-500 text-white shadow-lg'
        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-amber-500/50'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-serif text-amber-400 text-center md:text-left">Grimório do Tarot</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
        <TabButton cat="ALL" label="Todos" />
        <TabButton cat="MAJOR" label="Arcanos Maiores" />
        <TabButton cat="WANDS" label="Paus" />
        <TabButton cat="CUPS" label="Copas" />
        <TabButton cat="SWORDS" label="Espadas" />
        <TabButton cat="PENTACLES" label="Ouros" />
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-fade-in">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="cursor-pointer bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500 transition-all hover:scale-105 group relative"
          >
            <div className="w-full aspect-[2/3] overflow-hidden bg-slate-900 relative">
              <img
                src={card.imageUrl}
                alt={card.namePt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  const span = document.createElement('span');
                  span.innerText = '🔮';
                  span.className = 'text-4xl animate-pulse';
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div className="p-2 text-center bg-slate-900 absolute bottom-0 w-full bg-opacity-90">
              <p className="text-amber-200 font-serif text-xs md:text-sm truncate">{card.namePt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedCard(null)}>
          <div className="bg-slate-900 border border-amber-600 rounded-xl max-w-2xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <div className="w-full md:w-5/12 h-64 md:h-auto bg-black flex items-center justify-center relative p-4">
              <img
                src={selectedCard.imageUrl}
                className="h-full w-auto object-contain shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                alt={selectedCard.namePt}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x500/1e293b/fbbf24?text=" + encodeURIComponent(selectedCard.namePt);
                }}
              />
            </div>
            <div className="p-6 md:w-7/12 flex flex-col overflow-y-auto custom-scrollbar">
              <h3 className="text-3xl font-serif text-amber-500 mb-1">{selectedCard.namePt}</h3>
              <span className="text-xs text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 block">
                {selectedCard.name} • {selectedCard.arcana === 'Major' ? 'Arcano Maior' : `Arcano Menor - ${selectedCard.suit}`}
              </span>

              <div className="mb-6">
                <h4 className="text-indigo-300 font-bold text-sm mb-2 uppercase tracking-wide">Palavras-chave</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCard.keywords.map(k => (
                    <span key={k} className="px-3 py-1 bg-indigo-900/30 text-indigo-200 text-xs rounded-full border border-indigo-700/50">{k}</span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-indigo-300 font-bold text-sm mb-2 uppercase tracking-wide">Significado</h4>
                <p className="text-slate-300 text-sm leading-relaxed text-justify border-l-2 border-amber-600/30 pl-4">
                  {selectedCard.description}
                </p>
              </div>

              {/* Enhanced Curiosity Section */}
              <div className="group relative mt-2 mb-4">
                {/* Glow Effect Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>

                <div className="relative bg-slate-900/90 rounded-lg p-5 border border-slate-700/50 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-indigo-950 rounded-full border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                      <span className="text-lg">👁️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-amber-400 font-serif font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                        Segredo do Arcano
                        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent"></div>
                      </h4>
                      <p className="text-slate-200 text-sm italic font-serif leading-relaxed">
                        "{selectedCard.curiosity}"
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute top-0 right-0 p-2 text-amber-500/20 text-xs">✦</div>
                  <div className="absolute bottom-0 left-0 p-2 text-amber-500/20 text-xs">✦</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCard(null)}
                className="mt-8 self-end px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm text-slate-300 transition-colors border border-slate-700"
              >
                Fechar Grimório
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};