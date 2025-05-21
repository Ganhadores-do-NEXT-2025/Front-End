// Toggle dos blocos para o FAQ
const perguntas = document.querySelectorAll('.question-cabecalho');
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', function () {
      const pai = this.parentElement;
      pai.classList.toggle('active');
    });
  });
