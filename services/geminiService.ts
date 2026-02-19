import { GoogleGenAI } from "@google/genai";
import { TarotCardData, BirthChartData, AstrologyResult } from "../types";

const SYSTEM_INSTRUCTION = `
Você é a "Mystica", uma inteligência artificial mística, especialista em Tarot (Rider-Waite), Astrologia e esoterismo. 
Seu tom de voz deve ser acolhedor, misterioso, profundo, mas claro e direto. Evite linguagem excessivamente arcaica, prefira um tom moderno e espiritualizado.
Sempre responda em Português do Brasil.
`;

export const interpretTarotSpread = async (
  question: string,
  cards: TarotCardData[],
  astrologyContext?: AstrologyResult | null
): Promise<string> => {
  // Inicialização dentro da função para garantir a chave mais recente
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("Chave da API Gemini não encontrada. Verifique o arquivo .env");
  }
  const ai = new GoogleGenAI({ apiKey });
  const modelName = 'gemini-3-flash-preview';

  const cardNames = cards.map(c => c.namePt).join(', ');

  let astroPrompt = "";
  if (astrologyContext) {
    astroPrompt = `
    DADOS DO MAPA ASTRAL DO USUÁRIO (Use para personalizar a leitura):
    - Sol em ${astrologyContext.planets.sun.sign} (Essência)
    - Lua em ${astrologyContext.planets.moon.sign} (Emoções)
    - Ascendente em ${astrologyContext.planets.rising.sign} (Como se projeta)
    - Momento de vida (Nódulo Norte): ${astrologyContext.deepPoints.northNode.sign}
    
    INSTRUÇÃO ESPECIAL: Relacione a energia das cartas com o mapa astral do usuário. Por exemplo, se sair uma carta de água e o usuário tiver Lua em Peixes, destaque a profundidade emocional.
    `;
  }

  const prompt = `
    O usuário fez a seguinte pergunta ou mentalizou o seguinte tema: "${question || 'Leitura Geral'}".
    As cartas tiradas foram, nesta ordem (Passado, Presente, Futuro/Resultado): ${cardNames}.
    
    ${astroPrompt}

    Por favor, forneça uma interpretação detalhada desta tiragem. 
    1. Analise cada carta individualmente no contexto da posição.
    2. Faça uma síntese de como elas se conectam.
    3. Dê um conselho final baseado na energia geral.
    
    Formate a resposta com parágrafos claros e use Markdown para negrito nos nomes das cartas.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      }
    });

    return response.text || "Os astros estão nebulosos hoje. Tente novamente.";
  } catch (error: any) {
    console.error("Erro detalhado na leitura de tarot:", error);
    if (error.message?.includes("403") || error.message?.includes("permission")) {
      throw new Error("O Portal Místico exige uma chave com permissões (403). Use o botão 'Ativar Recursos Pro' no topo.");
    }
    throw new Error("Não foi possível conectar com o plano astral. Verifique sua conexão.");
  }
};

export const interpretBirthChart = async (
  data: BirthChartData
): Promise<AstrologyResult> => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const ai = new GoogleGenAI({ apiKey });
  // Mudando para flash-preview para evitar erros de permissão comuns com o Pro em certas chaves
  const modelName = 'gemini-3-flash-preview';

  const prompt = `
    Realize uma leitura aprofundada e COMPLETA do Mapa Astral para:
    Nome: ${data.name}
    Data: ${data.date}
    Horário: ${data.time}
    Local: ${data.place}

    Estime as posições astronômicas com precisão.
    Além dos planetas básicos, inclua Lilith, Nódulo Norte e Quíron.

    Retorne APENAS um JSON válido com a seguinte estrutura estrita:
    {
      "planets": {
        "sun": { "sign": "Nome do Signo", "house": "Casa X", "description": "Resumo da essência" },
        "moon": { "sign": "Nome do Signo", "house": "Casa X", "description": "Resumo emocional" },
        "rising": { "sign": "Nome do Signo", "house": "Casa 1", "description": "A máscara social" },
        "mercury": { "sign": "Nome do Signo", "house": "Casa X", "description": "Intelecto" },
        "venus": { "sign": "Nome do Signo", "house": "Casa X", "description": "Amor e valores" },
        "mars": { "sign": "Nome do Signo", "house": "Casa X", "description": "Ação e desejo" },
        "jupiter": { "sign": "Nome do Signo", "house": "Casa X", "description": "Expansão" },
        "saturn": { "sign": "Nome do Signo", "house": "Casa X", "description": "Lições e limites" }
      },
      "deepPoints": {
        "lilith": { "sign": "Nome do Signo", "meaning": "O lado sombra e rebeldia" },
        "northNode": { "sign": "Nome do Signo", "meaning": "O propósito de alma e destino" },
        "chiron": { "sign": "Nome do Signo", "meaning": "A ferida que cura" }
      },
      "elementalBalance": "Análise breve do equilíbrio dos elementos (Fogo, Terra, Ar, Água)",
      "analysis": "Uma síntese profunda e poética da personalidade desta pessoa, focando nos potenciais e desafios."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
      }
    });

    const jsonText = response.text || "{}";
    return JSON.parse(jsonText.trim()) as AstrologyResult;
  } catch (error: any) {
    console.error("Erro no mapa astral:", error);
    if (error.message?.includes("403")) {
      throw new Error("As estrelas exigem uma chave de acesso paga para este cálculo complexo (Erro 403). Use o botão 'Ativar Recursos Pro'.");
    }
    throw new Error("As estrelas não se alinharam para esta leitura. Tente novamente em alguns instantes.");
  }
};

export const getDailyHoroscope = async (signName: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const ai = new GoogleGenAI({ apiKey });
  const modelName = 'gemini-3-flash-preview';

  const prompt = `
    Gere um horóscopo diário para o signo de ${signName}.
    Considere a data de hoje.
    
    Estrutura:
    - Energia do Dia
    - Amor
    - Trabalho
    - Conselho Místico
    
    Seja breve e inspirador.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "As estrelas estão silenciosas hoje.";
  } catch (error: any) {
    console.error("Erro no horóscopo:", error);
    throw new Error("Não foi possível conectar com os astros.");
  }
};