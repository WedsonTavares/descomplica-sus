// Seleciona o formulário de login
const loginForm = document.getElementById('login-form');

// Adiciona um evento de submit ao formulário
loginForm.addEventListener('submit', (e) => {
  // Previne o comportamento padrão do formulário (enviar para o servidor)
  e.preventDefault();

  // Seleciona os inputs do formulário
  const emailInput = document.getElementById('floatingInputEmail');
  const passwordInput = document.getElementById('floatingInputPassworld');

  // Armazena os valores dos inputs
  const email = emailInput.value;
  const password = passwordInput.value;

  // Exibe um alerta de sucesso
  alert(`Login realizado com sucesso! `);
});