import { produtoService } from "../service/produto-service.js";

(async()=> {
    const pegaURL = new URL(window.location)
    
    const id = pegaURL.searchParams.get('id')
    
    const inputImagem = document.querySelector('[data-tipo="arquivo"]')
    const inputNome = document.querySelector('[data-tipo="nome"]')
    const inputPreco = document.querySelector('[data-tipo="preco"]')

    try{
        const dados = await produtoService.detalhaProduto(id)
        inputImagem.value = dados.inputImagem
        inputNome.value = dados.nome
        inputPreco.value = dados.preco
    }
    catch(erro){
        console.log(erro)
        window.location.href = ''
    }
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento)=>{
        evento.preventDefault()
        try{
            await produtoService.atualizaProduto(id, inputImagem.value, inputNome.value, inputPreco.value)
            window.location.href = './menu-admin.html'
        }
        catch(erro){
            console.log(erro)
            window.location.href = ''
        }
    })
})()