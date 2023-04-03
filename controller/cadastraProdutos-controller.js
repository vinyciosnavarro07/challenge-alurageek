import { produtoService } from "../service/produto-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()
    const imagem = evento.target.querySelector('[data-tipo="arquivo"]').value
    const nome = evento.target.querySelector('[data-tipo="nome"]').value
    const preco = evento.target.querySelector('[data-tipo="preco"]').value

    produtoService.criaProdutos(imagem, nome, preco)
    .then(()=> {
        window.location.href = './menu-admin.html'
    })
})