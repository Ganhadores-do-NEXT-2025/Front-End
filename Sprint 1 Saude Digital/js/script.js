// Toggle dos blocos para o FAQ
const perguntas = document.querySelectorAll('.question-cabecalho');
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', function () {
      const pai = this.parentElement;
      pai.classList.toggle('active');
    });
  });

// Webchat
  window.watsonAssistantChatOptions = {
            integrationID: "42168497-c1df-47d0-b51c-c8596800bdb2",
            region: "au-syd",
            serviceInstanceID: "caa63f65-088b-4f37-9de8-7af5a9ee725b",
            onLoad: async (instance) => { await instance.render(); }
        };
        setTimeout(function () {
            const t = document.createElement('script');
            t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
                (window.watsonAssistantChatOptions.clientVersion || 'latest') +
                "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
        });

// Script para Login
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const cpf = document.getElementById('cpf');
    if (cpf) aplicarMascaraCPF(cpf);

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Login realizado com sucesso!');
      window.location.href = '../index.html';
    });
  }