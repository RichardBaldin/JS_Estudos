const nums = [1, 2, 3, 4, 5, 6]
const dobro = (n) => n * 2 
console.log(nums.map(dobro))


const nomes = ['Ana', 'Bia', 'Lia', 'Rafa', 'Gui']
const primeiraLetra = texto => texto[0]

console.log(nomes.map(primeiraLetra))

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco:7.99},
    {nome: 'Impressora', qtde: 0, preco:649.50},
    {nome: 'Caderno', qtde: 4, preco:27.10},
    {nome: 'Lapis', qtde: 3, preco:5.82},
    {nome: 'Tesoura', qtde: 1, preco:19.20},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

//Criando nossa própria versão do MAP
console.log('-----------------------------------------------------------')
Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++){
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped
}
//No caso de estarmos usando o nosso map
//const getNome = item => item.nome
//console.log(carrinho.meuMap(getNome))

//const getTotal = item => item.qtde * item.preco
//const totais = carrinho.meuMap(getTotal)
//console.log(totais)