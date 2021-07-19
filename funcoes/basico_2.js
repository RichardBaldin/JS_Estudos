
function bomDia(){
    console.log('Bom Dia!')
}
//Atua na maioria dos casos como uma função anônima
const boaTarde = function(){
    console.log('Boa Tarde!')
}

//1 - Passando uma função como  parametro para outra
function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
 }

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2 - Retornar uma função a partir de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPotencia = potencia(3)(4)
console.log(resultadoPotencia)