const form = document.getElementById('formulario-comparacao');

function comparacao()

form.addEventListener('submit', function(e) {
    let comparacao = false
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `A afirmação está correta - ${numeroB.value} é maior que ${numeroA.value}`
    const mensagemFracasso = `A afirmação não está correta - ${numeroB.value} não é maior que ${numeroA.value}`

    comparacao = (numeroB.value>numeroA.value)
    if (comparacao) {
        const validacao = document.getElementsByClassName('.validacao-correta');
        validacao.innerHTML = mensagemSucesso
    
    } else {
        validacao.innerHTML = mensagemFracasso
    }
})