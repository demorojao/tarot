export enum AppView {
  HOME = 'HOME',
  TAROT = 'TAROT',
  ASTROLOGY = 'ASTROLOGY',
  HOROSCOPE = 'HOROSCOPE',
  LIBRARY = 'library',
  HISTORY = 'history',
  ABOUT = 'about'
}

export interface TarotCardData {
  id: number;
  name: string;
  namePt: string; // Portuguese name
  arcana: 'Major' | 'Minor';
  suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
  keywords: string[];
  description: string;
  curiosity: string; // New field for fun facts/symbolism
  imageUrl: string;
}

export interface ReadingResult {
  text: string;
  cards: TarotCardData[];
}

export interface BirthChartData {
  name: string;
  date: string;
  time: string;
  place: string;
}

export interface PlanetInfo {
  sign: string;
  house: string;
  description: string;
}

export interface DeepPointInfo {
  sign: string;
  meaning: string;
}

export interface AstrologyResult {
  planets: {
    sun: PlanetInfo;
    moon: PlanetInfo;
    rising: PlanetInfo; // Ascendant
    mercury: PlanetInfo;
    venus: PlanetInfo;
    mars: PlanetInfo;
    jupiter: PlanetInfo;
    saturn: PlanetInfo;
  };
  deepPoints: {
    lilith: DeepPointInfo;
    northNode: DeepPointInfo;
    chiron: DeepPointInfo;
  };
  elementalBalance: string;
  analysis: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}