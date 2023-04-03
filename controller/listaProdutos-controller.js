import { produtoService } from "../service/produto-service.js";
const criaNovaLinha = (imagem, nome, preco, id) => {
    const linhaNovoProduto = document.createElement("div")
    const conteudo = `<div class="produtos__bloco">
    
    <img class="produtos__img" src="${imagem}" alt="Imagem do produto aqui">
    <h5 class="produtos__nome">${nome}</h5>
    <h4 class="produtos__preco">${preco}</h4>
    <a class="link__estilo" href="#">Ver produto</a>
    <button class="botao__deletar" type="button">Deletar</button>
    <a href="./edita-produto.html?id=${id}"><button type="button" class="botao__editar">Editar</button></a>

</div>`

linhaNovoProduto.innerHTML = conteudo
linhaNovoProduto.dataset.id = id

return linhaNovoProduto
}

const tabela = document.querySelector('[data-product]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeletar = evento.target.className === 'botao__deletar'
    if(ehBotaoDeletar){
        try{
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await produtoService.removeProduto(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = ''
        }
    }
})

const render = async () => {
    try{
        const listaProdutos = await produtoService.listaProdutos()
        
        listaProdutos.forEach(elemento => {
                tabela.appendChild(criaNovaLinha(elemento.imagem, elemento.nome, elemento.preco, elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
        
    }
}

render()