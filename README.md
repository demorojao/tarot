<div align="center">
  <h1 style="color: #fbbf24;">Mystica 🌌</h1>
  <p><em>Sabedoria Ancestral & Intuição Astral</em></p>
</div>

## Sobre o Projeto

O **Mystica** é uma aplicação web mística e imersiva que atua como um oráculo digital. Misturando conhecimentos milenares com tecnologia moderna, a plataforma oferece serviços guiados pelas estrelas:

- **🔮 Horóscopo Diário:** Previsões personalizadas para os signos do zodíaco.
- **🎴 Tarot:** Tiragens esotéricas com interpretações profundas do deck de Rider-Waite.
- **🪐 Mapa Astral:** Cálculo e interpretação dos astros no momento do seu nascimento.
- **📖 Grimório:** Uma biblioteca digital interativa para explorar os segredos dos Arcanos Maiores e Menores.

## Tecnologias Utlizadas ✨

- **Frontend:** React, TypeScript (TSX), Vite
- **Estilização:** Tailwind CSS (com tema sombrio e toques em âmbar/dourado místico)
- **Efeitos Visuais:** Three.js / React Three Fiber (para o fundo espacial)
- **Backend & Autenticação:** Supabase
- **Inteligência Astral:** Google Gemini API (modelo principal: `gemini-2.5-flash`)

## Como Rodar Localmente 🚀

**Pré-requisitos:** Node.js instalado.

1. Clone o repositório:
   ```bash
   git clone https://github.com/demorojao/tarot.git
   cd tarot
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Renomeie o arquivo `.env.example` para `.env` e preencha com as suas chaves:
   ```env
   VITE_SUPABASE_URL=sua_url_aqui
   VITE_SUPABASE_ANON_KEY=sua_chave_aqui
   VITE_GOOGLE_API_KEY=sua_chave_gemini_aqui
   ```

4. Execute o feitiço (inicie a aplicação):
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3000` (ou na porta indicada pelo Vite).
