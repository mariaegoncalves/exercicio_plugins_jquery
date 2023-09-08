$(document).ready(function(){
    $("#formValidation").validate({
        rules:{
            firstname:{
                minlength: 2
            },
            lastname:{
                minlength: 2
            },
            email:{
                email: true
            },
            number:{
                number: true,
                minlength: 11,
                maxlength: 11
            },
            cep:{
                number: true,
                minlength: 8,
                maxlength: 8
            },
            address:{
                minlength: 5
            },
            cpf:{
                number: true,
                minlength: 11,
                maxlength: 11,
            },
        },
        submitHandler: function(form){
            alert("Seu formulário foi enviado com sucesso")
        }
    })
})