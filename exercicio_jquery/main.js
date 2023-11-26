$(document).ready(function() {

    $('#botao-submit').click(function(e) {
        e.preventDefault();

        const novoItemTexto = $('#input-novo-item').val();

        if(novoItemTexto.trim() !== "") {
            const novaLinha = $('<li>').text(novoItemTexto);

            novaLinha.click(function() {
                if (this.style.textDecoration === 'line-through') {
                    this.style.textDecoration = 'none';
                } else {
                    this.style.textDecoration = 'line-through';
                }
            })

            $('#lista-de-tarefas').append(novaLinha);

            $('#input-novo-item').val("")
        }
    })
})