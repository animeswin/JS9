class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }

    exibirDetalhes() {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Categoria: ${this.categoria}`
    }
}

const listaDeProdutos = []

const adicionarProduto = (nome, preco, categoria) => {
    const produto = new Produto(nome, preco, categoria)
    listaDeProdutos.push(produto)
    console.log(`Produto "${nome}" adicionado à lista.`)
}

const listarProdutos = () => {
    if (listaDeProdutos.length === 0) {
        console.log("A lista de produtos está vazia.")
    } else {
        console.log("Lista de produtos:")
        listaDeProdutos.forEach((produto, indice) => console.log(`${indice}: ${produto.exibirDetalhes()}`))
    }
}

const buscarProduto = (nome) => {
    const produtoEncontrado = listaDeProdutos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())
    console.log(produtoEncontrado ? `Produto encontrado:\n${produtoEncontrado.exibirDetalhes()}` : "Produto não encontrado.")
}

const filtrarProdutosPorCategoria = (categoria) => {
    const produtosFiltrados = listaDeProdutos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase())
    console.log(produtosFiltrados.length ? "Produtos encontrados:" : "Nenhum produto encontrado.")
    produtosFiltrados.forEach(produto => console.log(produto.exibirDetalhes()))
}

const calcularTotalPreco = () => {
    const total = listaDeProdutos.reduce((soma, produto) => soma + produto.preco, 0)
    console.log(`Valor total dos produtos: R$${total.toFixed(2)}`)
}

adicionarProduto("Notebook", 4500.00, "Eletrônicos")
adicionarProduto("Smartphone", 2500.00, "Eletrônicos")
adicionarProduto("Cadeira Gamer", 800.00, "Móveis")
adicionarProduto("Geladeira", 3200.00, "Eletrodomésticos")

listarProdutos()
buscarProduto("Smartphone")
filtrarProdutosPorCategoria("Eletrônicos")
calcularTotalPreco()