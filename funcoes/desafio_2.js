const carrinho = [
    {nome: 'Caneta', qtde: 10, preco:7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco:649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco:27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco:5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco:19.20, fragil: true},
]

//1. Apenas elementos com fragil: true
//2. Pegar a quantidade e o preço => total
//3.  media dos totais


const media = 
carrinho.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acc, el)=> {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
return{
    qtde:novaQtde,
    total:novoTotal,
    media:novoTotal/novaQtde,
}
}, {qtde:0, total:0, media:0})

console.log(media)


Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial 
    for(let i = 0; i < this.lenght; i++){
        if(!acc && i === 0){
            acc = this[i]
        }else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}


const media2 = 
carrinho.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acc, el)=> {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
return{
    qtde:novaQtde,
    total:novoTotal,
    media:novoTotal/novaQtde,
}
}, {qtde:0, total:0, media:0})
console.log(media2)
