export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input__container__invalido')
        input.parentElement.querySelector('.input__mensagem__erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input__container__invalido')
        input.parentElement.querySelector('.input__mensagem__erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    }, 
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch:'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e uma minúscula, um número e não deve conter símbolos.'
    }, 
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    },
    arquivo: {
        valueMissing: 'Você precisa adicionar uma imagem.'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}