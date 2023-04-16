<a href="https://promptify-ai.vercel.app/">
  <img alt="PromptifyAI" src="/public/screenshot.png">
    <h1 align="center">PromptifyAI</h1>
</a>

<p align="center">
  ChatGPT enhanced
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/promptifyAI-chatGPT-enhanced">
    <img src="https://img.shields.io/github/stars/Anchit1909/promptifyAI-chatGPT-enhanced?label=Anchit1909%2FpromptifyAI" alt="promptifyAI repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

PromptifyAI is an advanced version of ChatGPT, offering additional features to users. It allows chat storage in the cloud, ensuring conversations are saved permanently. In addition, the project offers tried and tested prompts to improve search experience for the users.

## How it works

- It uses ChatGPT API from OpenAI to generate response to messages.
- This application also gives you storage for storing chats which is powered by **Firebase**.
- The user authentication system is made possible using **NextAuth**.

## Tech Stack

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/)
- [Firebase](https://firebase.google.com/)

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Store API keys in .env file.

Create a file in root directory of project named **.env.local**. And store your API key in it, as shown in the .example.env file.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
