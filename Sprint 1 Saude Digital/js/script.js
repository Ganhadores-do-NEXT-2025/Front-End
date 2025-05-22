// Toggle dos blocos de FAQ
document.querySelectorAll('.question-cabecalho').forEach(pergunta => {
  pergunta.addEventListener('click', () => {
    pergunta.parentElement.classList.toggle('active');
  });
});

// Função utilitária para aplicar máscara de CPF
function aplicarMascaraCPF(input) {
  input.addEventListener('input', ({ target }) => {
    let v = target.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    target.value = v;
  });
}

// Função utilitária para aplicar máscara de Telefone
function aplicarMascaraTelefone(input) {
  input.addEventListener('input', ({ target }) => {
    let v = target.value.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '($1) $2')
         .replace(/(\d{5})(\d)/, '$1-$2');
    target.value = v;
  });
}

// Tratamento do formulário de reagendamento OU cancelamento
const consultaForm = document.getElementById('reagendarForm') || document.getElementById('cancelarForm');
if (consultaForm) {
  consultaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const botao = e.submitter;
    const textoBotao = botao?.textContent.toLowerCase();

    if (textoBotao.includes('reagend')) {
      alert('Consulta reagendada com sucesso!');
      window.location.href = 'meus-agendamentos.html';
    } else if (textoBotao.includes('cancel')) {
      alert('Consulta cancelada com sucesso!');
      window.location.href = 'meus-agendamentos.html';
    } else {
      alert('Ação desconhecida.');
    }
  });
}

// Webchat IBM Watson Assistant
window.watsonAssistantChatOptions = {
  integrationID: "42168497-c1df-47d0-b51c-c8596800bdb2",
  region: "au-syd",
  serviceInstanceID: "caa63f65-088b-4f37-9de8-7af5a9ee725b",
  onLoad: async (instance) => await instance.render()
};
setTimeout(() => {
  const script = document.createElement('script');
  script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
               (window.watsonAssistantChatOptions.clientVersion || 'latest') +
               "/WatsonAssistantChatEntry.js";
  document.head.appendChild(script);
}, 0);

// Formulário de Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const cpf = document.getElementById('cpf');
  if (cpf) aplicarMascaraCPF(cpf);

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login realizado com sucesso!');
    window.location.href = '../index.html';
  });
}

// Formulário de Cadastro
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  if (cpf) aplicarMascaraCPF(cpf);
  if (tel) aplicarMascaraTelefone(tel);

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar-senha').value;

    if (senha !== confirmar) {
      alert('As senhas não coincidem!');
      return;
    }

    if (senha.length < 8) {
      alert('A senha deve ter no mínimo 8 caracteres!');
      return;
    }

    alert('Cadastro feito com sucesso!');
    window.location.href = './login.html';
  });
}

// Menu mobile
const mobileMenuButton = document.querySelector('.mobile-menu');
  const mobileNav = document.querySelector('.mobile-menu-navegacao');
  const mobileAuthButtons = document.querySelector('.mobile-auth-buttons');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.toggle('active');
      if (mobileAuthButtons)
        mobileAuthButtons.style.display = mobileNav.classList.contains('active') ? 'block' : 'none';
    });
  }
