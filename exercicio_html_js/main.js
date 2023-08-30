// Obtém os elementos do DOM
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const formulario = document.getElementById('formulario-comparacao');
const validacaoCorreta = document.querySelector('.validacao-correta');
const validacaoIncorreta = document.querySelector('.validacao-incorreta');

// Define a função de validação
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const valorA = parseFloat(numeroA.value);
    const valorB = parseFloat(numeroB.value);

    if (valorB > valorA) {
        validacaoIncorreta.textContent = '';
        validacaoCorreta.textContent = 'Afirmação correta: Número B é maior que Número A.';
    } else {
        validacaoCorreta.textContent = '';
        validacaoIncorreta.textContent = 'Afirmação incorreta: Número B não é maior que Número A.';
    }
});
