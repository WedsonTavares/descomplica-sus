// Adiciona um evento de clique ao botão "Registrar"
document.getElementById('reg').addEventListener('click', function (event) {
    event.preventDefault();

    // Log de dados"
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const endereco = document.getElementById('endereco').value;
    const termos = document.getElementById('termos').checked;
    const email = document.getElementById('email').value;
    console.log("termos", termos);

    if (nome !== '') {
        if (cpf !== '') {
            if (rg !== '') {
                if (endereco !== '') {
                    if (termos == false) {
                        if (email == '')
                            alert('Aceite os termos de uso!');
                    } else {
                        alert('Cadastrado com sucesso!'); window.location = '../index/index.html';
                    }
                } else {
                    alert('Preencha o campo endereço.');
                }
            } else {
                alert('Preencha o campo RG.');
            }
        } else {
            alert('Preencha o campo CPF.');
        }
    } else {
        alert('Preencha o campo nome.');
    }

});

// Formata o CPF ao digitar
function formatCPF(input) {

    var value = input.value.replace(/\D/g, '');
    //console.log('value', value);
    //console.log('value.length', value.length);
    if (value.length > 11) {
        value = value.substr(0, 11);
    }

    if (value.length === 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3' + '-' + '$4');
    } else if (value.length === 10) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
    }
    console.log('value_final', value)
    input.value = value;

}

// Formata o RG ao digitar
function formatRG(input) {
    /*var value = input.value.replace(/\D/g, '');
    if (value.length > 9) {
        value = value.substr(0, 8);
    }
    if (value.length === 8) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    } else if (value.length === 9) {
        value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-');
    }
    input.value = value;*/
}