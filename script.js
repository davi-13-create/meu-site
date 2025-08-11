function handleFormSubmit() {
  alert('Obrigado! Sua mensagem foi recebida — (formulário simulado).');
}

// Função para exibir informações ao clicar em "Saiba Mais"
document.querySelectorAll('.neon-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.info) {
      alert(button.dataset.info);
    }
  });
});

// Efeito sutil nos botões
document.querySelectorAll('.neon-btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.filter = 'brightness(1.15)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.filter = '';
  });
});
