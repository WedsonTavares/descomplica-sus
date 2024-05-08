// Adiciona um evento de clique ao botão "Registrar"
document.getElementById('reg').addEventListener('click', function(event) {
    event.preventDefault();

    // Exibe um alerta com a mensagem "Formulário enviado com sucesso!"
    alert('Formulário enviado com sucesso!');
});

// Formata o CPF ao digitar
function formatCPF(input) {
    var value = input.value.replace(/\D/g, '');
    if (value.length > 11) {
        value = value.substr(0, 11);
    }
    if (value.length === 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\2)/, '$1.$2.$3-$4');
    } else if (value.length === 10) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
    }
    input.value = value;
}

// Formata o RG ao digitar
function formatRG(input) {
    var value = input.value.replace(/\D/g, '');
    if (value.length > 8) {
        value = value.substr(0, 8);
    }
    if (value.length === 8) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    } else if (value.length === 9) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-');
    }
    input.value = value;
}