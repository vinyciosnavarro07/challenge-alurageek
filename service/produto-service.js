const listaProdutos = () => {
    return fetch(`http://localhost:3000/produto`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}   

const criaProdutos = (imagem, nome, preco) => {
    return fetch(`http://localhost:3000/produto`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produto')
    })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover o produto')
        }
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto')
    })
}

const atualizaProduto = (id, imagem, nome, preco) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o produto')
    })
}

export const produtoService = {
    listaProdutos,
    criaProdutos,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}