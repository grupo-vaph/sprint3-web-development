# Jovi Camera

Aplicativo mobile-first que simula uma câmera com IA contextual: o app detecta quando o usuário está em sala de aula e sugere automaticamente o **Modo Estudo**, que digitaliza documentos (efeito de OCR simulado) e organiza o conteúdo por matéria.

Este projeto é a evolução (Sprint 3) do protótipo estático em HTML, CSS e JavaScript desenvolvido nas sprints anteriores, agora migrado para **React**, com estrutura de componentes reutilizáveis, navegação por estado, persistência de dados com `localStorage` e uso de operações matemáticas (`Math`).

## Índice

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos e instalação do Node.js](#pré-requisitos-e-instalação-do-nodejs)
- [Como instalar as dependências do projeto](#como-instalar-as-dependências-do-projeto)
- [Como executar o projeto](#como-executar-o-projeto)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Usuários e senhas para teste](#usuários-e-senhas-para-teste)
- [Uso de Inteligência Artificial no projeto](#uso-de-inteligência-artificial-no-projeto)
- [Deploy](#deploy)
- [Integrantes](#integrantes)

## Tecnologias utilizadas

- **React 19** — biblioteca para construção da interface, utilizando componentes funcionais e hooks (`useState`, `useEffect`).
- **Vite** — ferramenta de build e servidor de desenvolvimento.
- **JavaScript (ES6+)** — lógica da aplicação, incluindo desestruturação, arrow functions e operações com `Math` (`Math.random`, `Math.round`, `Math.floor`).
- **CSS3** — estilização migrada do protótipo original, com layout mobile (simulando a tela de um celular).
- **localStorage (Web Storage API)** — persistência local dos dados de matérias/documentos, sem necessidade de backend ou banco de dados.
- **Git e GitHub** — versionamento do código.
- **Vercel** — hospedagem e deploy da aplicação.

## Pré-requisitos e instalação do Node.js

Para rodar este projeto, é necessário ter o **Node.js** instalado (ele já vem com o **npm**, gerenciador de pacotes usado para instalar as dependências).

**1. Verifique se já tem o Node instalado:**

Abra o terminal (Prompt de Comando, PowerShell ou Terminal, dependendo do seu sistema) e rode:

```bash
node -v
npm -v
```

Se aparecer um número de versão (ex: `v20.11.0`), o Node já está instalado e você pode pular para a próxima seção. Se aparecer erro ("comando não encontrado"), siga os passos abaixo.

**2. Instale o Node.js:**

- Acesse [https://nodejs.org/](https://nodejs.org/)
- Baixe a versão **LTS** (recomendada, mais estável) — ela detecta automaticamente seu sistema operacional (Windows, macOS ou Linux)
- Execute o instalador baixado e siga os passos padrão (Next, Next, Finish)
- Feche e abra o terminal novamente, e confirme a instalação rodando de novo:
```bash
  node -v
  npm -v
```

Este projeto foi desenvolvido e testado com **Node.js 18 ou superior**.

## Como instalar as dependências do projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/grupo-vaph/sprint3-web-development.git
```

**2. Entre na pasta do projeto:**

```bash
cd sprint3-web-development
```

**3. Instale as dependências com o npm:**

```bash
npm install
```

Esse comando lê o arquivo `package.json` e baixa automaticamente todas as bibliotecas que o projeto precisa (React, Vite, etc.) para a pasta `node_modules`.

## Como executar o projeto

Depois de instalar as dependências, rode:

```bash
npm run dev
```

O terminal vai mostrar um endereço local, geralmente:

Local: http://localhost:5173


Abra esse endereço no navegador para usar a aplicação.

Para parar o servidor, use `Ctrl + C` no terminal.

## Estrutura de pastas

```
src/
├── components/
│   ├── Header.jsx        # Cabeçalho reutilizável (título + botão voltar)
│   └── Footer.jsx         # Navegação inferior (Câmera / Galeria / Matérias)
├── pages/
│   ├── Login.jsx          # Tela de login com validação
│   ├── Camera.jsx         # Tela principal da câmera
│   ├── IaSugere.jsx       # Modal de sugestão de Modo Estudo pela IA
│   ├── ModoEstudo.jsx     # Captura de documentos
│   ├── OcrResultado.jsx   # Resultado do OCR simulado
│   ├── Organizar.jsx      # Organização dos documentos por matéria
│   └── Galeria.jsx        # Galeria com filtros e lightbox
├── utils/
│   └── storage.js         # Funções auxiliares para localStorage
├── App.jsx                # Componente pai: estado global e navegação
├── main.jsx                # Ponto de entrada da aplicação
└── style.css                # Estilos globais (migrados do protótipo HTML)
```


## Funcionalidades

- **Login simulado**, com validação de e-mail e senha.
- **Tela de câmera**, com modos (Foto, Vídeo, Retrato, Noite, Estudo) e zoom simulado.
- **Sugestão de IA**: ao capturar uma foto, a aplicação simula a detecção de uma sala de aula e sugere o Modo Estudo, com uma porcentagem de confiança gerada aleatoriamente (`Math.random` + `Math.round`).
- **Modo Estudo e OCR simulado**: captura de documentos com texto extraído automaticamente e nível de precisão gerado por `Math`.
- **Organização por matéria**: os documentos capturados são contabilizados automaticamente por matéria e persistidos no `localStorage`; o usuário também pode adicionar novas matérias manualmente, recebendo uma cor aleatória (`Math.floor` + `Math.random`).
- **Galeria** com filtros por matéria e visualização em tela cheia (lightbox), com navegação entre itens.
- **Persistência de dados**: todas as matérias e contagens de documentos são salvas no `localStorage` do navegador, permanecendo mesmo após recarregar a página.

## Usuários e senhas para teste

O login desta aplicação é **simulado** (não existe backend, banco de dados ou autenticação real). Por isso, **não há um usuário ou senha fixos/corretos** — qualquer combinação que atenda às regras abaixo é aceita:

- **E-mail:** qualquer texto em formato válido de e-mail (precisa ter `@` e um domínio, ex: `usuario@exemplo.com`)
- **Senha:** qualquer texto com **6 caracteres ou mais**

Exemplo válido: `aluno@fiap.com` / `123456`

## Uso de Inteligência Artificial no projeto

A ferramenta Claude (Anthropic) foi utilizada como apoio ao longo de todo o desenvolvimento deste projeto, principalmente nas partes de maior complexidade, como a estruturação de componentes React (relação pai → filho via props), a lógica de persistência com `localStorage` e a aplicação de operações com `Math`. A IA deu suporte na geração do código de cada componente e página, na explicação dos conceitos aplicados e na organização do trabalho.

Ao longo do processo, os testes de cada tela no navegador, a leitura das mensagens de erro no console e a identificação dos sintomas dos problemas (por exemplo, uma chave duplicada em uma lista do React, um nome de arquivo importado incorretamente e uma falha na persistência inicial do `localStorage`) foram feitos manualmente, e repassados à IA para que as correções fossem aplicadas em conjunto.

## Deploy

Link da aplicação em produção (Vercel): <https://sprint3-web-development-liart.vercel.app/>

Link do repositório: <https://github.com/grupo-vaph/sprint3-web-development>

## Integrantes

- Enzo Gabriel Pereira                       RM: 570659
- Henrique Giusti de Souza                   RM: 570766
- Pedro Henrique Moura Aguiar                RM: 570715
- Pietro Alexandre Guerato                   RM: 571232
- Victor Ulisses de Morais Silva             RM: 572634