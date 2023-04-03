const conteudo = document.querySelector(".produtos__conteudo")
const inputPesquisa = document.querySelector("input[type='search']")
const inputNome = document.querySelector('[data-tipo="nome"]')


const produtosEscondidos = (produtos, inputValue) => {
    //conteudo que nao da match
    produtos
        .filter(produtos => !produtos.textContent.toLowerCase().includes(inputValue))
        .forEach(produtos => {
            produtos.classList.remove('d-flex')
            produtos.classList.add('hidden')
        })

}
const produtosAmostra = (produtos, inputValue) => {
    //produtos que dao match
    produtos
    .filter(produtos => produtos.textContent.toLowerCase().includes(inputValue))
    .forEach(produtos => {
        produtos.classList.remove('hidden')
        produtos.classList.add('d-flex')
    })    
}

inputPesquisa.addEventListener("input", event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const produtos = Array.from(conteudo.children)

    produtosEscondidos(produtos, inputValue)
    produtosAmostra(produtos, inputValue)
})