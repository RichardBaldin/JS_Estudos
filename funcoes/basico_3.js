//arrow function
const FelizNatal=() => console.log('Feliz Natal!')
FelizNatal()

const saudacao = (nome) => `Fala ${nome} Tranquilo??!!!`
console.log(saudacao('Davi'))

//Com esses três pontinhos (...numeros) ele pega os valores que eu informo e os lista  ...(operador rest)
const somar = (numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))
console.log(somar([1,2,3,4,9,10]))

//const potencia =(base) =>{
 //   return (exp) =>{
//        return Math.pow(base, exp)
//    }
//}

//Conseguimos reduzir bem a sintaxe de uma função
const potencia = base => exp =>  Math.pow(base, exp)

console.log(potencia(3)(4))

//this faz referencia aos valores da variavies (conceito de OO)
Array.prototype.log = function(){
    console.log(this)
}

Array.prototype.ultimo = function(){
    console.log(this[this.length-1])
}

Array.prototype.primeiro = function(){
    console.log(this[0])
}
const numeros = [1,2,3]
numeros.log()
numeros.ultimo()
numeros.primeiro()