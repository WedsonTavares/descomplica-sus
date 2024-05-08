(function() {
  // Seleciona o formulário e o botão de envio
  const form = document.querySelector('#questionForm');
  const submitButton = document.querySelector('#submitButton');

  // Adiciona um evento de click ao botão de envio
  submitButton.addEventListener('click', function() {
    // Cria um array para armazenar as respostas
    const respostas = [];

    // Pega as respostas dos rádios
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
      respostas.push(radio.checked? radio.value : null);
    });

    // Mostra o resultado no console
    console.log('Respostas:', respostas);
    // Mostra alerta de conclusão
    alert('Formulário enviado com sucesso!');
  });
})();