$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: {
                required:'Por favor, informe seu nome'
            },
            email: {
                required:'Por favor, informe seu email'
            },
            mensagem: {
                required:'Por favor, digite uma mensagem'
            },
        }
    })
})