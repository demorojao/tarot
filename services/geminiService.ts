import { GoogleGenerativeAI } from "@google/generative-ai";
import { TarotCardData, BirthChartData, AstrologyResult } from "../types";

const SYSTEM_INSTRUCTION = `
Você é a "Mystica", um oráculo espiritual místico, especialista em Tarot (Rider-Waite), Astrologia e esoterismo. 
Seu tom de voz deve ser acolhedor, misterioso, profundo, mas claro e direto. Evite linguagem excessivamente arcaica, prefira um tom moderno e espiritualizado.
Sempre responda em Português do Brasil.
`;

// Helper para obter a chave e instanciar o modelo de forma robusta
const getAIModel = (modelName: string = "gemini-2.5-flash") => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  if (!apiKey) {
    console.error("[Mystica Debug] ERRO: VITE_GOOGLE_API_KEY não encontrada no ambiente.");
    throw new Error("Chave da API Gemini não encontrada no arquivo .env");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  return genAI.getGenerativeModel({
    model: modelName,
  });
};

// Helper para extrair JSON de uma string que pode conter markdown ou texto extra
const extractJSON = (text: string) => {
  try {
    // Tenta o parse direto primeiro
    return JSON.parse(text);
  } catch (e) {
    // Tenta encontrar o bloco de JSON usando regex
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (innerError) {
        console.error("[Mystica Debug] Falha ao parsear JSON extraído:", innerError);
        throw new Error("A resposta astral veio em um formato indecifrável.");
      }
    }
    throw new Error("Não foi possível encontrar sabedoria estruturada na resposta.");
  }
};

export const interpretTarotSpread = async (
  question: string,
  cards: TarotCardData[],
  astrologyContext?: AstrologyResult | null
): Promise<string> => {

  const model = getAIModel("gemini-2.5-flash");
  const cardNames = cards.map(c => c.namePt).join(', ');

  let astroPrompt = "";
  if (astrologyContext) {
    astroPrompt = `
     DADOS DO MAPA ASTRAL DO USUÁRIO:
     - Sol em ${astrologyContext.planets.sun.sign}, Lua em ${astrologyContext.planets.moon.sign}, Ascendente em ${astrologyContext.planets.rising.sign}.
     Relacione as cartas com esse mapa de forma personalizada.
     `;
  }

  const prompt = `
     ${SYSTEM_INSTRUCTION}
     
     PERGUNTA: "${question || 'Leitura Geral'}".
     CARTAS: ${cardNames}.
     
     ${astroPrompt}
 
     Dê uma interpretação profunda e mística (Passado, Presente, Futuro). 
     Use Markdown para estruturar a resposta (Negrito, Tópicos, etc).
   `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text || text.trim().length < 10) {
      throw new Error("As cartas estão mudas hoje.");
    }

    return text;
  } catch (error: any) {
    console.error("[Mystica Tarot] ERRO:", error);

    if (error.message?.includes('429') || error.message?.includes('quota')) {
      throw new Error("O oráculo está sobrecarregado de visões. Aguarde um momento para que as energias se acalmem.");
    }

    if (error.message?.includes('safety')) {
      throw new Error("As energias desta pergunta são muito densas para serem reveladas agora (Bloqueio de Segurança).");
    }

    throw new Error(`Conexão Astral Interrompida: ${error.message || "Tente novamente"}`);
  }
};

export const interpretBirthChart = async (
  data: BirthChartData
): Promise<AstrologyResult> => {

  const model = getAIModel("gemini-2.5-flash");

  const prompt = `
     ${SYSTEM_INSTRUCTION}
 
     Gere um Mapa Astral completo para:
     Nome: ${data.name}, Data: ${data.date}, Hora: ${data.time}, Local: ${data.place}
 
     Retorne APENAS um JSON válido seguindo a estrutura abaixo, sem textos extras:
     {
       "planets": {
         "sun": { "sign": "...", "house": "...", "description": "..." },
         "moon": { "sign": "...", "house": "...", "description": "..." },
         "rising": { "sign": "...", "house": "...", "description": "..." },
         "mercury": { "sign": "...", "house": "...", "description": "..." },
         "venus": { "sign": "...", "house": "...", "description": "..." },
         "mars": { "sign": "...", "house": "...", "description": "..." },
         "jupiter": { "sign": "...", "house": "...", "description": "..." },
         "saturn": { "sign": "...", "house": "...", "description": "..." }
       },
       "deepPoints": {
         "lilith": { "sign": "...", "meaning": "..." },
         "northNode": { "sign": "...", "meaning": "..." },
         "chiron": { "sign": "...", "meaning": "..." }
       },
       "elementalBalance": "...",
       "analysis": "..."
     }
   `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();

    const resultData = extractJSON(jsonText);

    // Validação básica da estrutura
    if (!resultData.planets || !resultData.planets.sun || !resultData.analysis) {
      throw new Error("As estrelas retornaram uma mensagem incompleta.");
    }

    return resultData as AstrologyResult;
  } catch (error: any) {
    console.error("[Mystica Astro] ERRO:", error);
    if (error.message?.includes('429')) {
      throw new Error("Muitas almas consultando o céu agora. Aguarde 30 segundos.");
    }
    throw new Error(error.message || "As estrelas se ocultaram. Tente novamente.");
  }
};

export const getDailyHoroscope = async (signName: string): Promise<string> => {
  const model = getAIModel("gemini-2.5-flash");

  const prompt = `${SYSTEM_INSTRUCTION}\n\nGere um horóscopo diário místico e breve para o signo de ${signName}. Use Markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "Os astros estão em silêncio para você hoje.";
  } catch (error: any) {
    console.error("[Mystica Horóscopo] ERRO:", error);
    return "O céu está nublado no momento. Tente mais tarde.";
  }
};