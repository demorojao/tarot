import { TarotCardData } from './types';

// Using Sacred Texts Archive as the source for the original 1909 Rider-Waite-Smith deck scans.
const BASE_IMG_URL = "https://www.sacred-texts.com/tarot/pkt/img/";

export const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Áries', symbol: '♈', dateRange: '21 Mar - 19 Abr', element: 'Fogo' },
  { id: 'taurus', name: 'Touro', symbol: '♉', dateRange: '20 Abr - 20 Mai', element: 'Terra' },
  { id: 'gemini', name: 'Gêmeos', symbol: '♊', dateRange: '21 Mai - 20 Jun', element: 'Ar' },
  { id: 'cancer', name: 'Câncer', symbol: '♋', dateRange: '21 Jun - 22 Jul', element: 'Água' },
  { id: 'leo', name: 'Leão', symbol: '♌', dateRange: '23 Jul - 22 Ago', element: 'Fogo' },
  { id: 'virgo', name: 'Virgem', symbol: '♍', dateRange: '23 Ago - 22 Set', element: 'Terra' },
  { id: 'libra', name: 'Libra', symbol: '♎', dateRange: '23 Set - 22 Out', element: 'Ar' },
  { id: 'scorpio', name: 'Escorpião', symbol: '♏', dateRange: '23 Out - 21 Nov', element: 'Água' },
  { id: 'sagittarius', name: 'Sagitário', symbol: '♐', dateRange: '22 Nov - 21 Dez', element: 'Fogo' },
  { id: 'capricorn', name: 'Capricórnio', symbol: '♑', dateRange: '22 Dez - 19 Jan', element: 'Terra' },
  { id: 'aquarius', name: 'Aquário', symbol: '♒', dateRange: '20 Jan - 18 Fev', element: 'Ar' },
  { id: 'pisces', name: 'Peixes', symbol: '♓', dateRange: '19 Fev - 20 Mar', element: 'Água' },
];

export const TAROT_DECK: TarotCardData[] = [
  // --- MAJOR ARCANA ---
  { 
    id: 0, 
    name: 'The Fool', 
    namePt: 'O Louco', 
    arcana: 'Major', 
    keywords: ['Início', 'Liberdade', 'Espontaneidade'], 
    description: 'O Louco representa o potencial puro, a energia caótica antes da criação e o espírito aventureiro. É o convite para confiar no universo e dar um salto de fé no desconhecido, livre de medos e julgamentos.', 
    curiosity: 'O cão branco aos pés do Louco simboliza o instinto animal que o protege (ou alerta) do abismo, enquanto a flor branca representa a pureza de suas intenções.',
    imageUrl: `${BASE_IMG_URL}ar00.jpg` 
  },
  { 
    id: 1, 
    name: 'The Magician', 
    namePt: 'O Mago', 
    arcana: 'Major', 
    keywords: ['Manifestação', 'Poder', 'Ação'], 
    description: 'O Mago é o canal da energia divina para a terra. Ele possui todos os elementos (paus, copas, espadas, ouros) na mesa, simbolizando que você já tem todas as ferramentas necessárias para transformar seus desejos em realidade através da força de vontade.', 
    curiosity: 'O símbolo do infinito (lemniscata) acima de sua cabeça e a serpente mordendo a própria cauda em sua cintura representam a natureza eterna da transformação mágica.',
    imageUrl: `${BASE_IMG_URL}ar01.jpg` 
  },
  { 
    id: 2, 
    name: 'The High Priestess', 
    namePt: 'A Sacerdotisa', 
    arcana: 'Major', 
    keywords: ['Intuição', 'Mistério', 'Subconsciente'], 
    description: 'Guardiã dos mistérios ocultos e da sabedoria interior. A Sacerdotisa convida ao silêncio e à introspecção. Ela não revela tudo de uma vez; exige que você confie na sua intuição para desvendar o que está por trás do véu.', 
    curiosity: 'As colunas B e J (Boaz e Jachin) vêm do Templo de Salomão, representando a dualidade (luz/escuridão, ativo/passivo) que ela equilibra perfeitamente.',
    imageUrl: `${BASE_IMG_URL}ar02.jpg` 
  },
  { 
    id: 3, 
    name: 'The Empress', 
    namePt: 'A Imperatriz', 
    arcana: 'Major', 
    keywords: ['Fertilidade', 'Natureza', 'Cuidado'], 
    description: 'A personificação da Grande Mãe e da natureza generosa. Ela traz abundância, criatividade sensorial e o nascimento de novas ideias. É um sinal para se conectar com a beleza, nutrir seus projetos e colher os frutos da vida.', 
    curiosity: 'O escudo em forma de coração aos seus pés ostenta o símbolo de Vênus (♀), reforçando sua conexão com o amor, a beleza e a harmonia.',
    imageUrl: `${BASE_IMG_URL}ar03.jpg` 
  },
  { 
    id: 4, 
    name: 'The Emperor', 
    namePt: 'O Imperador', 
    arcana: 'Major', 
    keywords: ['Autoridade', 'Estrutura', 'Pai'], 
    description: 'O arquétipo do Pai e da estrutura social. O Imperador traz ordem ao caos, estabelecendo regras, limites e estabilidade. Ele representa o poder racional, a disciplina e a capacidade de construir impérios sólidos e duradouros.', 
    curiosity: 'As cabeças de carneiro em seu trono representam Áries, o primeiro signo do zodíaco, simbolizando iniciativa, liderança e força agressiva controlada.',
    imageUrl: `${BASE_IMG_URL}ar04.jpg` 
  },
  { 
    id: 5, 
    name: 'The Hierophant', 
    namePt: 'O Hierofante', 
    arcana: 'Major', 
    keywords: ['Tradição', 'Ensino', 'Crença'], 
    description: 'Também conhecido como O Papa, ele é a ponte entre o divino e o humano através da tradição. Representa instituições, educação formal e o conformismo social. Sugere buscar sabedoria em mentores ou seguir caminhos estabelecidos.', 
    curiosity: 'As chaves cruzadas aos seus pés representam as chaves do Reino dos Céus, simbolizando o acesso aos mistérios espirituais através da doutrina.',
    imageUrl: `${BASE_IMG_URL}ar05.jpg` 
  },
  { 
    id: 6, 
    name: 'The Lovers', 
    namePt: 'Os Enamorados', 
    arcana: 'Major', 
    keywords: ['Amor', 'União', 'Escolhas'], 
    description: 'Mais do que romance, esta carta fala sobre escolhas morais e alinhamento de valores. Representa a harmonia entre opostos e a necessidade de tomar decisões com o coração inteiro, integrando o masculino e o feminino dentro de si.', 
    curiosity: 'No Rider-Waite, a figura atrás do casal é o Arcanjo Rafael, o anjo da cura, sugerindo que o amor verdadeiro tem o poder de curar a alma.',
    imageUrl: `${BASE_IMG_URL}ar06.jpg` 
  },
  { 
    id: 7, 
    name: 'The Chariot', 
    namePt: 'O Carro', 
    arcana: 'Major', 
    keywords: ['Controle', 'Vontade', 'Vitória'], 
    description: 'A vitória através da força de vontade e disciplina. O Carro indica movimento rápido e superação de obstáculos. O desafio aqui é manter as rédeas firmes e controlar forças opostas para avançar em direção ao objetivo.', 
    curiosity: 'Note que o cocheiro não segura rédeas físicas, mas usa uma varinha mágica. Ele controla as esfinges (forças opostas) através de sua mente e vontade espiritual.',
    imageUrl: `${BASE_IMG_URL}ar07.jpg` 
  },
  { 
    id: 8, 
    name: 'Strength', 
    namePt: 'A Força', 
    arcana: 'Major', 
    keywords: ['Coragem', 'Compaixão', 'Paciência'], 
    description: 'A verdadeira força não é bruta, mas suave. Esta carta mostra o domínio dos instintos e paixões através do amor e da paciência. É a coragem de enfrentar feras internas e externas com compaixão e firmeza moral.', 
    curiosity: 'A mulher fecha a boca do leão suavemente, sem esforço físico aparente, demonstrando que a força espiritual é superior à força animal.',
    imageUrl: `${BASE_IMG_URL}ar08.jpg` 
  },
  { 
    id: 9, 
    name: 'The Hermit', 
    namePt: 'O Eremita', 
    arcana: 'Major', 
    keywords: ['Introspecção', 'Solidão', 'Guia'], 
    description: 'Um tempo de recolhimento voluntário para buscar a própria verdade. O Eremita se afasta do ruído do mundo não por rejeição, mas para ouvir sua voz interior. Sua lanterna ilumina apenas o próximo passo, pedindo paciência.', 
    curiosity: 'Dentro da lanterna do Eremita brilha uma estrela de seis pontas (Selo de Salomão), simbolizando a luz da sabedoria que guia através da escuridão da ignorância.',
    imageUrl: `${BASE_IMG_URL}ar09.jpg` 
  },
  { 
    id: 10, 
    name: 'Wheel of Fortune', 
    namePt: 'A Roda da Fortuna', 
    arcana: 'Major', 
    keywords: ['Sorte', 'Ciclos', 'Mudança'], 
    description: 'A única constante é a mudança. A Roda lembra que a vida é cíclica: o que sobe deve descer, e vice-versa. Representa carma, destino e pontos de virada inesperados onde não temos controle total.', 
    curiosity: 'Nos cantos da carta estão os quatro evangelistas (anjo, águia, leão, touro), que também representam os quatro signos fixos do zodíaco: Aquário, Escorpião, Leão e Touro.',
    imageUrl: `${BASE_IMG_URL}ar10.jpg` 
  },
  { 
    id: 11, 
    name: 'Justice', 
    namePt: 'A Justiça', 
    arcana: 'Major', 
    keywords: ['Verdade', 'Lei', 'Causa e Efeito'], 
    description: 'A busca pela verdade fria e imparcial. A Justiça corta as ilusões com sua espada e pesa os fatos em sua balança. Significa que você colherá exatamente o que plantou. Assuma responsabilidade por suas ações.', 
    curiosity: 'Diferente da representação moderna nos tribunais, a Justiça no Tarot não tem os olhos vendados. Ela precisa ver claramente para julgar com sabedoria.',
    imageUrl: `${BASE_IMG_URL}ar11.jpg` 
  },
  { 
    id: 12, 
    name: 'The Hanged Man', 
    namePt: 'O Enforcado', 
    arcana: 'Major', 
    keywords: ['Sacrifício', 'Pausa', 'Perspectiva'], 
    description: 'Uma suspensão voluntária ou forçada. O Enforcado pede que você pare de lutar e mude sua perspectiva. Às vezes, é preciso sacrificar o ego ou uma posição confortável para ganhar iluminação espiritual.', 
    curiosity: 'Apesar da posição desconfortável, o Enforcado tem uma auréola (luz) ao redor da cabeça e uma expressão serena, indicando que este sacrifício traz iluminação.',
    imageUrl: `${BASE_IMG_URL}ar12.jpg` 
  },
  { 
    id: 13, 
    name: 'Death', 
    namePt: 'A Morte', 
    arcana: 'Major', 
    keywords: ['Fim', 'Transformação', 'Renascimento'], 
    description: 'Raramente morte física, esta carta simboliza o fim profundo e necessário de um ciclo, relacionamento ou identidade. É a transformação radical que limpa o terreno para que o novo possa nascer. O apego ao passado só traz dor.', 
    curiosity: 'A rosa branca na bandeira da Morte é a rosa mística da vida, simbolizando a pureza e a imortalidade do espírito, mesmo quando a forma física muda.',
    imageUrl: `${BASE_IMG_URL}ar13.jpg` 
  },
  { 
    id: 14, 
    name: 'Temperance', 
    namePt: 'A Temperança', 
    arcana: 'Major', 
    keywords: ['Equilíbrio', 'Cura', 'Moderação'], 
    description: 'A arte da alquimia interior. Temperança mistura opostos (fogo e água) para criar algo novo e equilibrado. Pede moderação, paciência e diplomacia. É o momento de encontrar o caminho do meio e curar feridas.', 
    curiosity: 'O anjo tem um pé na terra (mundo material) e outro na água (mundo subconsciente/emocional), demonstrando a necessidade de estar ancorado na realidade enquanto se navega as emoções.',
    imageUrl: `${BASE_IMG_URL}ar14.jpg` 
  },
  { 
    id: 15, 
    name: 'The Devil', 
    namePt: 'O Diabo', 
    arcana: 'Major', 
    keywords: ['Vício', 'Materialismo', 'Apego'], 
    description: 'Representa as correntes que nós mesmos forjamos: vícios, materialismo excessivo, obsessões e crenças limitantes. O Diabo nos lembra que muitas vezes somos prisioneiros voluntários de nossos próprios medos e desejos.', 
    curiosity: 'Observe que as correntes no pescoço do casal são frouxas. Eles poderiam tirá-las se quisessem, mas escolhem ficar, simbolizando a servidão voluntária.',
    imageUrl: `${BASE_IMG_URL}ar15.jpg` 
  },
  { 
    id: 16, 
    name: 'The Tower', 
    namePt: 'A Torre', 
    arcana: 'Major', 
    keywords: ['Caos', 'Revelação', 'Despertar'], 
    description: 'A destruição repentina de estruturas falsas. A Torre é o raio que abala os alicerces construídos sobre a mentira ou o ego. Embora doloroso, o colapso é necessário para libertar a alma e permitir a construção de verdades sólidas.', 
    curiosity: 'As 22 chamas em forma de Yod caindo do céu representam as 22 letras do alfabeto hebraico, sugerindo que é uma intervenção divina que destrói para purificar.',
    imageUrl: `${BASE_IMG_URL}ar16.jpg` 
  },
  { 
    id: 17, 
    name: 'The Star', 
    namePt: 'A Estrela', 
    arcana: 'Major', 
    keywords: ['Esperança', 'Fé', 'Inspiração'], 
    description: 'Após a tempestade da Torre, vem a calma da Estrela. É um momento de cura profunda, renovação da fé e conexão cósmica. Você está alinhado com seu propósito e o universo oferece proteção e esperança.', 
    curiosity: 'A mulher derrama água tanto na terra quanto no lago, indicando que ela nutre o mundo físico com inspiração espiritual e devolve energia ao inconsciente coletivo.',
    imageUrl: `${BASE_IMG_URL}ar17.jpg` 
  },
  { 
    id: 18, 
    name: 'The Moon', 
    namePt: 'A Lua', 
    arcana: 'Major', 
    keywords: ['Ilusão', 'Medo', 'Sonhos'], 
    description: 'O reino das sombras, ilusões e do inconsciente. As coisas não são o que parecem sob o luar. A Lua fala de medos irracionais, mas também de intuição psíquica profunda e a necessidade de enfrentar seus "monstros" internos.', 
    curiosity: 'O caranguejo emergindo da água representa os medos profundos subindo do inconsciente para a consciência, iniciando a jornada evolutiva do lobo e do cão.',
    imageUrl: `${BASE_IMG_URL}ar18.jpg` 
  },
  { 
    id: 19, 
    name: 'The Sun', 
    namePt: 'O Sol', 
    arcana: 'Major', 
    keywords: ['Alegria', 'Sucesso', 'Vitalidade'], 
    description: 'A melhor carta do baralho. Representa clareza absoluta, sucesso, calor humano e vitalidade. Todas as sombras se dissipam sob a luz do Sol. É um "sim" cósmico para a felicidade, a inocência e a realização pessoal.', 
    curiosity: 'A criança nua montada no cavalo branco sem sela simboliza a liberdade total de restrições e a perfeita harmonia com a natureza animal.',
    imageUrl: `${BASE_IMG_URL}ar19.jpg` 
  },
  { 
    id: 20, 
    name: 'Judgement', 
    namePt: 'O Julgamento', 
    arcana: 'Major', 
    keywords: ['Renascimento', 'Chamado', 'Absolvição'], 
    description: 'O despertar espiritual e o chamado para uma nova vida. É hora de avaliar o passado, perdoar a si mesmo e aos outros, e renascer. Você está sendo convocado para um nível superior de consciência.', 
    curiosity: 'As pessoas estão nuas e cinzas (como mortos), levantando-se de caixões quadrados (limitações materiais) em resposta ao chamado do anjo Gabriel.',
    imageUrl: `${BASE_IMG_URL}ar20.jpg` 
  },
  { 
    id: 21, 
    name: 'The World', 
    namePt: 'O Mundo', 
    arcana: 'Major', 
    keywords: ['Conclusão', 'Realização', 'Viagem'], 
    description: 'A conclusão bem-sucedida de um longo ciclo. Você atingiu a integração total e a realização. O Mundo representa a dança da vida, viagens (físicas ou mentais) e a sensação de plenitude e pertencimento.', 
    curiosity: 'A figura central dança dentro de uma coroa de louros (símbolo de vitória), segurando dois bastões, unindo as energias que o Mago manipulava no início da jornada.',
    imageUrl: `${BASE_IMG_URL}ar21.jpg` 
  },

  // --- SUIT OF WANDS (PAUS) ---
  { 
    id: 22, 
    name: 'Ace of Wands', 
    namePt: 'Ás de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Inspiração', 'Potencial', 'Criação'], 
    description: 'Uma explosão de energia criativa e inspiração divina. O Ás de Paus é a semente de uma grande paixão ou empreendimento, exigindo ação imediata para não se apagar. É o "Eureka!" da alma.', 
    curiosity: 'As folhas voando ao redor do bastão têm a forma da letra hebraica "Yod", a primeira letra do nome de Deus, simbolizando a descida do espírito na matéria.',
    imageUrl: `${BASE_IMG_URL}waac.jpg` 
  },
  { 
    id: 23, 
    name: 'Two of Wands', 
    namePt: 'Dois de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Planejamento', 'Decisão', 'Descoberta'], 
    description: 'Você tem o mundo em suas mãos, mas ainda está no estágio de planejamento. É o momento de decidir se fica na segurança do castelo ou se aventura no desconhecido. Fala sobre visão de longo prazo.', 
    curiosity: 'O homem segura um globo, indicando ambição mundial, mas está confinado em seu castelo, representando o dilema entre o conforto e a aventura.',
    imageUrl: `${BASE_IMG_URL}wa02.jpg` 
  },
  { 
    id: 24, 
    name: 'Three of Wands', 
    namePt: 'Três de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Expansão', 'Visão', 'Progresso'], 
    description: 'Seus navios estão chegando. O planejamento do Dois de Paus começa a dar frutos. É hora de expandir horizontes, buscar oportunidades internacionais ou ver os primeiros resultados reais de seus esforços.', 
    curiosity: 'Diferente do Dois de Paus, aqui o personagem saiu do castelo e está na beira do penhasco, olhando para frente, mostrando que a ação já foi tomada.',
    imageUrl: `${BASE_IMG_URL}wa03.jpg` 
  },
  { 
    id: 25, 
    name: 'Four of Wands', 
    namePt: 'Quatro de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Celebração', 'Lar', 'Harmonia'], 
    description: 'Uma carta de pura alegria, estabilidade e celebração. Muitas vezes indica casamentos, festas, retorno ao lar ou a concretização de uma etapa importante que merece ser comemorada com a comunidade.', 
    curiosity: 'O cenário lembra uma Khuppah (tenda de casamento judaica), reforçando o significado tradicional de matrimônio e união familiar.',
    imageUrl: `${BASE_IMG_URL}wa04.jpg` 
  },
  { 
    id: 26, 
    name: 'Five of Wands', 
    namePt: 'Cinco de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Conflito', 'Competição', 'Desafio'], 
    description: 'Energia caótica e competição. Cinco pessoas brandindo paus, mas ninguém parece ferido; é mais uma briga de egos, um debate acalorado ou um brainstorming intenso do que uma guerra real. Exige que você lute pelo seu espaço.', 
    curiosity: 'Os jovens têm roupas de cores diferentes, simbolizando opiniões e pontos de vista divergentes que entram em choque.',
    imageUrl: `${BASE_IMG_URL}wa05.jpg` 
  },
  { 
    id: 27, 
    name: 'Six of Wands', 
    namePt: 'Seis de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Vitória', 'Reconhecimento', 'Sucesso'], 
    description: 'O retorno do herói. Você superou os desafios do Cinco de Paus e agora recebe o reconhecimento público. É a carta da vitória, da autoestima elevada e do sucesso visível aos olhos de todos.', 
    curiosity: 'A coroa de louros no bastão e na cabeça do cavaleiro é o símbolo clássico greco-romano de vitória e conquista triunfante.',
    imageUrl: `${BASE_IMG_URL}wa06.jpg` 
  },
  { 
    id: 28, 
    name: 'Seven of Wands', 
    namePt: 'Sete de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Defesa', 'Perseverança', 'Desafio'], 
    description: 'Você está no topo, mas agora todos querem o seu lugar. O Sete de Paus é sobre defender sua posição, suas crenças ou seu sucesso contra múltiplos opositores. Você tem a vantagem do terreno alto, não desista.', 
    curiosity: 'O homem usa sapatos diferentes (um bota, um sapato), sugerindo que ele foi pego de surpresa e teve que se defender às pressas.',
    imageUrl: `${BASE_IMG_URL}wa07.jpg` 
  },
  { 
    id: 29, 
    name: 'Eight of Wands', 
    namePt: 'Oito de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Velocidade', 'Movimento', 'Viagem'], 
    description: 'A única carta dos Arcanos Menores sem figuras humanas (no padrão). Representa energia em movimento rápido, notícias chegando via aérea/digital, viagens ou paixões avassaladoras. As coisas vão acontecer depressa.', 
    curiosity: 'Os bastões parecem estar aterrissando, indicando que a conclusão dos eventos ou a chegada das notícias é iminente.',
    imageUrl: `${BASE_IMG_URL}wa08.jpg` 
  },
  { 
    id: 30, 
    name: 'Nine of Wands', 
    namePt: 'Nove de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Resiliência', 'Persistência', 'Cansaço'], 
    description: 'O guerreiro ferido, mas ainda de pé. Você passou por muitas batalhas e está exausto e desconfiado, mas falta pouco para o fim. Esta carta pede resiliência final e proteção de suas fronteiras.', 
    curiosity: 'O curativo na cabeça do homem mostra que ele já foi ferido antes, mas sua postura ereta indica que a experiência o tornou mais forte, não derrotado.',
    imageUrl: `${BASE_IMG_URL}wa09.jpg` 
  },
  { 
    id: 31, 
    name: 'Ten of Wands', 
    namePt: 'Dez de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Sobrecarga', 'Fardo', 'Responsabilidade'], 
    description: 'Você assumiu responsabilidades demais e agora carrega um fardo pesado. O sucesso virou um peso. É um aviso sobre burnout e a necessidade de delegar ou soltar o que não é essencial para chegar ao destino.', 
    curiosity: 'O homem carrega os paus em direção a uma cidade ao longe, mostrando que o esforço tem um objetivo final, mas ele está tão curvado que mal consegue ver para onde vai.',
    imageUrl: `${BASE_IMG_URL}wa10.jpg` 
  },
  { 
    id: 32, 
    name: 'Page of Wands', 
    namePt: 'Valete de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Entusiasmo', 'Exploração', 'Notícia'], 
    description: 'Um mensageiro de boas novas criativas ou o espírito jovem e explorador. O Valete traz entusiasmo, novas ideias e a vontade de descobrir o mundo, embora ainda lhe falte a experiência para executar tudo.', 
    curiosity: 'As salamandras na túnica do Valete são símbolos elementais do fogo, mas estão mordendo o próprio rabo, indicando um ciclo de transformação que ainda não está completo.',
    imageUrl: `${BASE_IMG_URL}wapa.jpg` 
  },
  { 
    id: 33, 
    name: 'Knight of Wands', 
    namePt: 'Cavaleiro de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Energia', 'Aventura', 'Impulsividade'], 
    description: 'Ação pura, charme e impetuosidade. O Cavaleiro de Paus entra galopando, cheio de paixão e ideias, mas pode sair tão rápido quanto entrou. Cuidado para não cair na impulsividade e a falta de planejamento.', 
    curiosity: 'Ao contrário do Cavaleiro de Ouros que está parado, o cavalo deste cavaleiro está empinado em movimento, simbolizando a pressa e a energia do fogo.',
    imageUrl: `${BASE_IMG_URL}wakn.jpg` 
  },
  { 
    id: 34, 
    name: 'Queen of Wands', 
    namePt: 'Rainha de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Confiança', 'Independência', 'Carisma'], 
    description: 'A alma da festa e a líder carismática. A Rainha de Paus é otimista, independente e cheia de fogo. Ela não precisa da aprovação de ninguém para brilhar e inspira os outros com sua confiança contagiante.', 
    curiosity: 'O gato preto a seus pés não é um símbolo de má sorte aqui, mas representa o lado sombra e mágico que ela domina e integra à sua personalidade.',
    imageUrl: `${BASE_IMG_URL}waqu.jpg` 
  },
  { 
    id: 35, 
    name: 'King of Wands', 
    namePt: 'Rei de Paus', 
    arcana: 'Minor', 
    suit: 'Wands', 
    keywords: ['Liderança', 'Visão', 'Honra'], 
    description: 'O visionário e líder nato. O Rei de Paus não apenas tem grandes ideias, ele tem a capacidade de executá-las e liderar equipes. Ele representa empreendedorismo, honra e a capacidade de ver o "big picture".', 
    curiosity: 'As salamandras e leões em seu trono e manto reforçam seu domínio completo sobre o elemento fogo, representando força, coragem e transformação.',
    imageUrl: `${BASE_IMG_URL}waki.jpg` 
  },

  // --- SUIT OF CUPS (COPAS) ---
  { 
    id: 36, 
    name: 'Ace of Cups', 
    namePt: 'Ás de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Amor', 'Novo Sentimento', 'Intuição'], 
    description: 'A fonte transbordante do amor puro e da emoção. O Ás de Copas oferece um novo começo emocional: pode ser um novo amor, uma amizade profunda ou um despertar espiritual. Seu coração está aberto para receber.', 
    curiosity: 'A pomba descendo com a hóstia (símbolo eucarístico) na taça representa a presença do espírito divino infundindo a matéria com amor incondicional.',
    imageUrl: `${BASE_IMG_URL}cuac.jpg` 
  },
  { 
    id: 37, 
    name: 'Two of Cups', 
    namePt: 'Dois de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['União', 'Parceria', 'Atração'], 
    description: 'O encontro de almas. Esta carta simboliza uma parceria equilibrada e amorosa, baseada no respeito mútuo. Pode ser romântica, mas também se aplica a amizades profundas ou parcerias de negócios harmoniosas.', 
    curiosity: 'O Caduceu de Hermes (símbolo da medicina e negociação) flutuando acima do casal sugere que esta união traz cura e comunicação elevada.',
    imageUrl: `${BASE_IMG_URL}cu02.jpg` 
  },
  { 
    id: 38, 
    name: 'Three of Cups', 
    namePt: 'Três de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Amizade', 'Comunidade', 'Festa'], 
    description: 'Tempo de celebrar com sua tribo. O Três de Copas fala sobre amizade feminina, apoio comunitário e alegria compartilhada. É o momento de brindar às conquistas e se sentir conectado com aqueles que ama.', 
    curiosity: 'As três mulheres brindando lembram as Três Graças da mitologia grega (Alegria, Charme e Beleza), celebrando a abundância da colheita ao redor.',
    imageUrl: `${BASE_IMG_URL}cu03.jpg` 
  },
  { 
    id: 39, 
    name: 'Four of Cups', 
    namePt: 'Quatro de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Apatia', 'Contemplação', 'Tédio'], 
    description: 'Você está focado no que lhe falta ou no que o decepcionou, ignorando as ofertas que o universo lhe traz agora. Cuidado para não cair na armadilha da apatia ou do vitimismo e perder uma nova oportunidade.', 
    curiosity: 'Uma mão divina oferece uma quarta taça saída de uma nuvem, mas o jovem está tão absorto em suas três taças (passado) que nem a percebe.',
    imageUrl: `${BASE_IMG_URL}cu04.jpg` 
  },
  { 
    id: 40, 
    name: 'Five of Cups', 
    namePt: 'Cinco de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Perda', 'Arrependimento', 'Tristeza'], 
    description: 'A dor do que foi derramado. Esta carta trata do luto e do arrependimento. No entanto, é um lembrete crucial: embora três taças tenham caído, duas ainda permanecem de pé atrás de você. Nem tudo está perdido.', 
    curiosity: 'A ponte ao fundo sobre o rio simboliza a passagem do tempo e a possibilidade de deixar essa dor para trás e atravessar para uma nova fase.',
    imageUrl: `${BASE_IMG_URL}cu05.jpg` 
  },
  { 
    id: 41, 
    name: 'Six of Cups', 
    namePt: 'Seis de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Nostalgia', 'Memórias', 'Inocência'], 
    description: 'Um doce retorno ao passado. Reencontros com velhos amigos, memórias de infância ou o retorno a um estado de inocência e simplicidade. O passado aqui é um refúgio de alegria, não de dor.', 
    curiosity: 'As flores nas taças são lírios brancos, que simbolizam pureza e inocência, reforçando a natureza ingênua e pura das memórias evocadas.',
    imageUrl: `${BASE_IMG_URL}cu06.jpg` 
  },
  { 
    id: 42, 
    name: 'Seven of Cups', 
    namePt: 'Sete de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Ilusão', 'Opções', 'Desejos'], 
    description: 'Muitas opções, mas pouca clareza. Você está diante de múltiplos caminhos, mas cuidado: nem tudo que reluz é ouro. Algumas taças contêm joias, outras monstros. É hora de discernir a realidade da fantasia.', 
    curiosity: 'As imagens nas taças representam tentações humanas: riqueza, fama (louros), sexualidade, ilusão, mas também a figura coberta que representa o divino oculto.',
    imageUrl: `${BASE_IMG_URL}cu07.jpg` 
  },
  { 
    id: 43, 
    name: 'Eight of Cups', 
    namePt: 'Oito de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Abandono', 'Busca', 'Retirada'], 
    description: 'A difícil decisão de partir. Você construiu muito (8 taças), mas percebe que isso não preenche mais sua alma. É o momento de deixar para trás o que é conhecido e buscar um significado mais profundo, mesmo que doa.', 
    curiosity: 'O eclipse da lua e do sol no céu simboliza um momento de transição e escuridão da alma, necessário para a jornada solitária de autodescoberta.',
    imageUrl: `${BASE_IMG_URL}cu08.jpg` 
  },
  { 
    id: 44, 
    name: 'Nine of Cups', 
    namePt: 'Nove de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Satisfação', 'Desejo Realizado', 'Gratidão'], 
    description: 'Conhecida como a "carta dos desejos". Representa contentamento emocional, prazer sensual e satisfação pessoal. Seus desejos estão prestes a se realizar. Aproveite o momento de plenitude.', 
    curiosity: 'O homem está sentado de braços cruzados, uma postura de autossatisfação e proteção de suas conquistas, indicando que a felicidade aqui é mais individual do que compartilhada.',
    imageUrl: `${BASE_IMG_URL}cu09.jpg` 
  },
  { 
    id: 45, 
    name: 'Ten of Cups', 
    namePt: 'Dez de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Felicidade', 'Família', 'Harmonia'], 
    description: 'O "felizes para sempre" do Tarot. Representa harmonia doméstica, amor familiar e paz emocional duradoura. É a realização perfeita dos relacionamentos e o sentimento de pertencer a algo maior.', 
    curiosity: 'O arco-íris de taças no céu é um símbolo bíblico de aliança e promessa divina de paz após a tempestade, abençoando a família abaixo.',
    imageUrl: `${BASE_IMG_URL}cu10.jpg` 
  },
  { 
    id: 46, 
    name: 'Page of Cups', 
    namePt: 'Valete de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Mensagem', 'Criatividade', 'Curiosidade'], 
    description: 'O poeta e sonhador. O Valete de Copas traz mensagens de amor, intuição ou o início de um projeto criativo. Ele convida você a explorar seus sentimentos com a curiosidade de uma criança e a aceitar o inesperado.', 
    curiosity: 'O peixe saindo da taça simboliza uma ideia ou sentimento surgindo do inconsciente (água) de forma surpreendente, e o Valete olha para ele com aceitação, não medo.',
    imageUrl: `${BASE_IMG_URL}cupa.jpg` 
  },
  { 
    id: 47, 
    name: 'Knight of Cups', 
    namePt: 'Cavaleiro de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Romance', 'Charme', 'Imaginação'], 
    description: 'O romântico incurável. Ele segue seu coração acima da lógica. Traz convites, propostas ou uma abordagem poética para a vida. Cuidado apenas para não se apaixonar pela ideia do amor em vez da realidade.', 
    curiosity: 'As asas no capacete e nos pés do cavaleiro referenciam Hermes, o mensageiro, sugerindo que ele traz mensagens velozes do coração e da imaginação.',
    imageUrl: `${BASE_IMG_URL}cukn.jpg` 
  },
  { 
    id: 48, 
    name: 'Queen of Cups', 
    namePt: 'Rainha de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Compaixão', 'Calma', 'Conforto'], 
    description: 'A rainha da inteligência emocional. Ela é empática, intuitiva e nutridora. Ela escuta mais do que fala e entende o que não é dito. Representa a cura através do amor e da aceitação profunda.', 
    curiosity: 'A taça que ela segura é a única fechada entre todas as cartas de Copas, indicando que seus pensamentos e mistérios mais profundos são guardados apenas para si mesma.',
    imageUrl: `${BASE_IMG_URL}cuqu.jpg` 
  },
  { 
    id: 49, 
    name: 'King of Cups', 
    namePt: 'Rei de Copas', 
    arcana: 'Minor', 
    suit: 'Cups', 
    keywords: ['Equilíbrio', 'Diplomacia', 'Controle'], 
    description: 'O mestre das emoções. Ele sente profundamente, mas não é escravo de seus sentimentos. Representa equilíbrio emocional, diplomacia e um conselheiro sábio e compassivo. Ele navega tormentas mantendo a calma.', 
    curiosity: 'Seu trono flutua sobre o mar turbulento, mas ele permanece seco e estável, demonstrando seu domínio completo sobre o reino instável das emoções.',
    imageUrl: `${BASE_IMG_URL}cuki.jpg` 
  },

  // --- SUIT OF SWORDS (ESPADAS) ---
  { 
    id: 50, 
    name: 'Ace of Swords', 
    namePt: 'Ás de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Clareza', 'Verdade', 'Ideia'], 
    description: 'A espada da verdade corta a confusão. O Ás de Espadas é um momento de clareza mental súbita, uma nova ideia brilhante ou uma verdade que precisa ser dita. Representa a força do intelecto puro.', 
    curiosity: 'A coroa no topo da espada, adornada com folhas de palmeira (vitória) e oliveira (paz), sugere que a verdade, embora afiada e às vezes dolorosa, traz paz e triunfo final.',
    imageUrl: `${BASE_IMG_URL}swac.jpg` 
  },
  { 
    id: 51, 
    name: 'Two of Swords', 
    namePt: 'Dois de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Indecisão', 'Bloqueio', 'Trégua'], 
    description: 'Um impasse. Você está vendado, recusando-se a ver a verdade ou tomar uma decisão difícil. As emoções (água ao fundo) são mantidas à distância pelo intelecto. A indecisão também é uma escolha.', 
    curiosity: 'A venda nos olhos é autoimposta. A mulher segura as espadas cruzadas sobre o peito (coração), protegendo-se de sentir a dor necessária para tomar a decisão.',
    imageUrl: `${BASE_IMG_URL}sw02.jpg` 
  },
  { 
    id: 52, 
    name: 'Three of Swords', 
    namePt: 'Três de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Dor', 'Separação', 'Tristeza'], 
    description: 'A imagem clássica do coração partido. Representa dor emocional, separação, traição ou luto. A chuva cai, mas lembre-se: é a única forma de lavar a ferida. A dor é necessária para o crescimento, mas não deve ser sua morada.', 
    curiosity: 'Esta é uma das poucas cartas sem figuras humanas, enfatizando que a dor do coração partido é uma experiência universal e abstrata que transcende o indivíduo.',
    imageUrl: `${BASE_IMG_URL}sw03.jpg` 
  },
  { 
    id: 53, 
    name: 'Four of Swords', 
    namePt: 'Quatro de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Descanso', 'Recuperação', 'Pausa'], 
    description: 'Após a tempestade, o descanso. Não é morte, mas uma retirada estratégica. Você precisa parar, meditar e recuperar suas forças mentais antes de voltar à batalha. O silêncio agora é sua melhor arma.', 
    curiosity: 'O vitral na igreja mostra uma cena de alguém oferecendo uma bênção (Pax), reforçando que este é um local sagrado de cura e paz interior.',
    imageUrl: `${BASE_IMG_URL}sw04.jpg` 
  },
  { 
    id: 54, 
    name: 'Five of Swords', 
    namePt: 'Cinco de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Conflito', 'Derrota', 'Tensão'], 
    description: 'Uma vitória vazia. Você pode ter ganho o argumento, mas perdeu o respeito ou a amizade. Fala de egoísmo, hostilidade e a necessidade de escolher quais batalhas realmente valem a pena. Às vezes, é melhor recuar.', 
    curiosity: 'O sorriso de escárnio no rosto do vencedor contrasta com a tristeza dos perdedores ao fundo, ilustrando perfeitamente o conceito de "vitória de Pirro" (ganhar a um custo alto demais).',
    imageUrl: `${BASE_IMG_URL}sw05.jpg` 
  },
  { 
    id: 55, 
    name: 'Six of Swords', 
    namePt: 'Seis de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Transição', 'Mudança', 'Alívio'], 
    description: 'A travessia para águas mais calmas. Você está deixando uma situação difícil para trás. A tristeza ainda está presente, mas o pior já passou. É uma jornada de cura, física ou mental, em direção a um futuro mais estável.', 
    curiosity: 'A água do lado direito do barco está agitada, enquanto a do lado esquerdo (para onde vão) está calma, simbolizando visualmente a transição do caos para a paz.',
    imageUrl: `${BASE_IMG_URL}sw06.jpg` 
  },
  { 
    id: 56, 
    name: 'Seven of Swords', 
    namePt: 'Sete de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Estratégia', 'Furtividade', 'Engano'], 
    description: 'O ladrão ou o estrategista. Pode indicar alguém agindo pelas costas, mentiras ou a necessidade de você mesmo ser astuto e diplomático para resolver um problema, em vez de confrontá-lo diretamente.', 
    curiosity: 'O homem carrega cinco espadas, mas deixa duas para trás. Ele olha para trás com um sorriso malicioso, sugerindo que o plano não é perfeito ou que a consciência pesa.',
    imageUrl: `${BASE_IMG_URL}sw07.jpg` 
  },
  { 
    id: 57, 
    name: 'Eight of Swords', 
    namePt: 'Oito de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Prisão', 'Medo', 'Restrição'], 
    description: 'A prisão mental. Você se sente preso e sem saída, mas as amarras são frouxas e não há carcereiro. São seus próprios pensamentos e medos que o paralisam. A saída existe se você tiver coragem de abrir os olhos.', 
    curiosity: 'O castelo ao fundo representa a autoridade ou o passado que a pessoa deixou para trás, mas ela permanece perto dele, incapaz de se afastar psicologicamente.',
    imageUrl: `${BASE_IMG_URL}sw08.jpg` 
  },
  { 
    id: 58, 
    name: 'Nine of Swords', 
    namePt: 'Nove de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Ansiedade', 'Pesadelo', 'Preocupação'], 
    description: 'O pesadelo. Insônia, culpa, ansiedade extrema. Seus pensamentos o atacam no escuro. Porém, a maioria desses medos são monstros mentais que não existem na luz do dia. Procure ajuda para dissipar as sombras.', 
    curiosity: 'O edredom tem rosas (paixões) e signos do zodíaco, sugerindo que as preocupações da pessoa são cósmicas e terrenas, abrangendo toda a sua existência.',
    imageUrl: `${BASE_IMG_URL}sw09.jpg` 
  },
  { 
    id: 59, 
    name: 'Ten of Swords', 
    namePt: 'Dez de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Fim', 'Traição', 'Ruína'], 
    description: 'O fim dramático. Você chegou ao fundo do poço. Traição, dor, colapso. Mas a boa notícia: não há como descer mais. O sol está nascendo no horizonte, indicando que este fim doloroso libera você para um novo amanhecer.', 
    curiosity: 'A mão do homem faz um gesto de bênção (o sinal papal de dois dedos), sugerindo paradoxalmente que há uma bênção oculta ou liberação espiritual nesta derrota final.',
    imageUrl: `${BASE_IMG_URL}sw10.jpg` 
  },
  { 
    id: 60, 
    name: 'Page of Swords', 
    namePt: 'Valete de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Curiosidade', 'Vigilância', 'Mente'], 
    description: 'O investigador curioso. Mente ágil, fala rápida e sede de verdade. O Valete pode representar fofocas, espionagem ou apenas uma mente jovem e brilhante pronta para desafiar o status quo com perguntas incômodas.', 
    curiosity: 'As nuvens agitadas e os pássaros voando alto no céu refletem a natureza turbulenta, rápida e "aérea" dos pensamentos deste Valete.',
    imageUrl: `${BASE_IMG_URL}swpa.jpg` 
  },
  { 
    id: 61, 
    name: 'Knight of Swords', 
    namePt: 'Cavaleiro de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Ação', 'Impulso', 'Ambição'], 
    description: 'Ataque frontal. O Cavaleiro de Espadas é o mais rápido de todos. Ele avança com lógica afiada e determinação, mas pode ser frio e cortante. Cuidado para não atropelar os sentimentos alheios em sua busca pela "razão".', 
    curiosity: 'Ao contrário dos outros cavaleiros, não há paisagem detalhada aqui, apenas vento e velocidade, mostrando que ele está focado unicamente no objetivo, ignorando o cenário.',
    imageUrl: `${BASE_IMG_URL}swkn.jpg` 
  },
  { 
    id: 62, 
    name: 'Queen of Swords', 
    namePt: 'Rainha de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Independência', 'Percepção', 'Clareza'], 
    description: 'A viúva ou a mulher independente. Ela sofreu, e isso a tornou sábia e direta. Ela valoriza a honestidade acima de tudo e detecta mentiras à distância. Sua mente é clara, justa, mas ela pode parecer fria ou distante.', 
    curiosity: 'Ela estende uma mão convidando, mas segura a espada firmemente com a outra, sinalizando: "Você pode se aproximar, mas apenas se trouxer a verdade".',
    imageUrl: `${BASE_IMG_URL}swqu.jpg` 
  },
  { 
    id: 63, 
    name: 'King of Swords', 
    namePt: 'Rei de Espadas', 
    arcana: 'Minor', 
    suit: 'Swords', 
    keywords: ['Autoridade', 'Verdade', 'Poder Mental'], 
    description: 'O juiz supremo. Intelecto superior, lógica fria e ética inabalável. Ele toma decisões baseadas em fatos, não em sentimentos. Representa autoridade profissional, advocacia e o poder da mente racional.', 
    curiosity: 'As borboletas em seu trono representam a alma (Psiquê), indicando que, embora seja um homem de lógica, ele compreende a alma humana através do intelecto.',
    imageUrl: `${BASE_IMG_URL}swki.jpg` 
  },

  // --- SUIT OF PENTACLES (OUROS) ---
  { 
    id: 64, 
    name: 'Ace of Pentacles', 
    namePt: 'Ás de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Oportunidade', 'Prosperidade', 'Início'], 
    description: 'O presente material do universo. Um novo emprego, dinheiro inesperado ou o início de um projeto próspero. É a semente da estabilidade e da saúde física. Plante-a bem, e ela crescerá.', 
    curiosity: 'O jardim murado com o arco florido ao fundo representa o mundo material cultivado e protegido, onde a semente da prosperidade pode florescer em segurança.',
    imageUrl: `${BASE_IMG_URL}peac.jpg` 
  },
  { 
    id: 65, 
    name: 'Two of Pentacles', 
    namePt: 'Dois de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Equilíbrio', 'Adaptação', 'Prioridades'], 
    description: 'O malabarista da vida. Você está lidando com múltiplas responsabilidades, contas e tarefas. Exige flexibilidade e adaptação constante. O segredo não é parar, mas manter o movimento fluido para não deixar nada cair.', 
    curiosity: 'A fita verde que conecta os pentáculos forma o símbolo do infinito, sugerindo que a mudança e o movimento são eternos e que a estabilidade é uma ilusão dinâmica.',
    imageUrl: `${BASE_IMG_URL}pe02.jpg` 
  },
  { 
    id: 66, 
    name: 'Three of Pentacles', 
    namePt: 'Três de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Trabalho em Equipe', 'Habilidade', 'Colaboração'], 
    description: 'O mestre artesão. Reconhecimento pelo trabalho bem feito e a importância da colaboração. Diferente do 8 de Ouros (trabalho solo), aqui o sucesso vem da união de diferentes especialistas construindo algo duradouro.', 
    curiosity: 'As três figuras representam a trindade da criação material: o Monge (espiritual), o Arquiteto (intelectual/planejamento) e o Artesão (executor físico).',
    imageUrl: `${BASE_IMG_URL}pe03.jpg` 
  },
  { 
    id: 67, 
    name: 'Four of Pentacles', 
    namePt: 'Quatro de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Conservação', 'Segurança', 'Avareza'], 
    description: 'Segurando firme. Medo de perder o que conquistou. Pode indicar estabilidade financeira, mas também avareza e bloqueio de fluxo. O dinheiro é energia; se você o prende demais, ele estagna e a vida perde a cor.', 
    curiosity: 'O homem tem pentáculos na cabeça (mente), braços (ação) e pés (base), mostrando que ele está completamente bloqueado e dominado pelo materialismo, incapaz de se mover.',
    imageUrl: `${BASE_IMG_URL}pe04.jpg` 
  },
  { 
    id: 68, 
    name: 'Five of Pentacles', 
    namePt: 'Cinco de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Necessidade', 'Pobreza', 'Isolamento'], 
    description: 'A noite escura da alma material. Perda financeira, rejeição ou doença. Você se sente deixado de fora no frio. Mas olhe para cima: a luz da igreja (ajuda espiritual ou comunitária) está logo ali, se você pedir socorro.', 
    curiosity: 'As duas figuras passam direto pela janela iluminada do santuário, simbolizando que muitas vezes o socorro está disponível, mas o desespero nos cega para ele.',
    imageUrl: `${BASE_IMG_URL}pe05.jpg` 
  },
  { 
    id: 69, 
    name: 'Six of Pentacles', 
    namePt: 'Seis de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Generosidade', 'Caridade', 'Compartilhar'], 
    description: 'O equilíbrio entre dar e receber. Você pode ser o benfeitor generoso ou aquele que precisa de ajuda agora. Lembra que a prosperidade é um fluxo: o que você dá ao universo retorna para você de outras formas.', 
    curiosity: 'A balança na mão do mercador indica que a caridade não deve ser cega, mas justa e equilibrada, avaliando quem realmente necessita e merece.',
    imageUrl: `${BASE_IMG_URL}pe06.jpg` 
  },
  { 
    id: 70, 
    name: 'Seven of Pentacles', 
    namePt: 'Sete de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Paciência', 'Investimento', 'Avaliação'], 
    description: 'A pausa para avaliar a colheita. Você trabalhou duro, e agora espera. É um momento de paciência e de perguntar: "Valeu a pena o esforço?". Talvez seja hora de mudar a estratégia ou apenas confiar no tempo da natureza.', 
    curiosity: 'O homem apoia-se na enxada com uma expressão de fadiga e contemplação, não de alegria, sugerindo que o trabalho material é exaustivo e os resultados nem sempre são imediatos.',
    imageUrl: `${BASE_IMG_URL}pe07.jpg` 
  },
  { 
    id: 71, 
    name: 'Eight of Pentacles', 
    namePt: 'Oito de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Diligência', 'Conhecimento', 'Detalhe'], 
    description: 'O aprendiz dedicado. Foco total nos detalhes, aprimoramento de habilidades e trabalho repetitivo. Não é sobre fama, é sobre a excelência pessoal e o prazer de fazer algo bem feito. O sucesso vem da maestria.', 
    curiosity: 'Os pentáculos na árvore (trabalho concluído) são idênticos, mostrando a consistência e a perfeição alcançada através da prática repetitiva e disciplinada.',
    imageUrl: `${BASE_IMG_URL}pe08.jpg` 
  },
  { 
    id: 72, 
    name: 'Nine of Pentacles', 
    namePt: 'Nove de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Abundância', 'Luxo', 'Autossuficiência'], 
    description: 'A mulher independente em seu jardim. Luxo, refinamento e autossuficiência financeira. Você colhe os frutos de seu trabalho e pode desfrutar das coisas boas da vida sozinho, com segurança e elegância.', 
    curiosity: 'O falcão encapuzado em sua mão representa os instintos selvagens e a natureza material que foram domados e controlados para servir ao refinamento do espírito.',
    imageUrl: `${BASE_IMG_URL}pe09.jpg` 
  },
  { 
    id: 73, 
    name: 'Ten of Pentacles', 
    namePt: 'Dez de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Riqueza', 'Legado', 'Família'], 
    description: 'O legado duradouro. Riqueza que atravessa gerações, tradição familiar e estabilidade absoluta. Não é apenas dinheiro, é a estrutura sólida que sustenta a família e a comunidade a longo prazo.', 
    curiosity: 'Os pentáculos estão dispostos no padrão da Árvore da Vida da Cabala (Sefirot), indicando que a verdadeira riqueza material é um reflexo da ordem divina espiritual.',
    imageUrl: `${BASE_IMG_URL}pe10.jpg` 
  },
  { 
    id: 74, 
    name: 'Page of Pentacles', 
    namePt: 'Valete de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Manifestação', 'Estudo', 'Oportunidade'], 
    description: 'O estudante prático. Traz notícias sobre dinheiro, bolsas de estudo ou novas oportunidades de carreira. É ambicioso, focado e realista, pronto para transformar sonhos em metas tangíveis.', 
    curiosity: 'O Valete segura o pentáculo com as duas mãos e olha para ele intensamente, como se o estudasse, simbolizando a concentração total necessária para materializar ideias.',
    imageUrl: `${BASE_IMG_URL}pepa.jpg` 
  },
  { 
    id: 75, 
    name: 'Knight of Pentacles', 
    namePt: 'Cavaleiro de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Eficiência', 'Rotina', 'Conservadorismo'], 
    description: 'O trabalhador incansável. Ele é lento, metódico, mas imparável. Não espera atalhos; constrói o sucesso tijolo por tijolo. É confiável, leal e pragmático, embora possa ser teimoso ou avesso a riscos.', 
    curiosity: 'É o único cavaleiro cujo cavalo está parado com as quatro patas no chão, enfatizando a estabilidade, a falta de pressa e a conexão profunda com a terra.',
    imageUrl: `${BASE_IMG_URL}pekn.jpg` 
  },
  { 
    id: 76, 
    name: 'Queen of Pentacles', 
    namePt: 'Rainha de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Nutrição', 'Praticidade', 'Conforto'], 
    description: 'A mãe terra generosa. Ela cuida de todos através do conforto material: boa comida, um lar aconchegante e conselhos práticos. Ela sabe como fazer o dinheiro render e valoriza a segurança e o bem-estar físico.', 
    curiosity: 'A lebre no canto da carta é um símbolo de fertilidade e conexão com a terra, reforçando a capacidade da Rainha de gerar abundância e vida.',
    imageUrl: `${BASE_IMG_URL}pequ.jpg` 
  },
  { 
    id: 77, 
    name: 'King of Pentacles', 
    namePt: 'Rei de Ouros', 
    arcana: 'Minor', 
    suit: 'Pentacles', 
    keywords: ['Riqueza', 'Negócios', 'Abundância'], 
    description: 'O magnata de sucesso. Ele transformou a matéria em império. Representa o topo da realização financeira, estabilidade e poder mundano. Ele é generoso, mas espera resultados concretos. O toque de Midas.', 
    curiosity: 'Seu trono é adornado com cabeças de touro (signo de Touro), conectando-o diretamente à energia fixa, teimosa e produtiva do elemento Terra.',
    imageUrl: `${BASE_IMG_URL}peki.jpg` 
  },
];