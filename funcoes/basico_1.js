//function declaration
let a = 4
console.log(a)
//Function declaration
function bomDia(){
    console.log('Bom Dia!')
}
bomDia()

//function Expression

const boaTarde = function() {
    console.log('Boa Tarde!')
}

boaTarde()

function somar(a, b){
    return a+b
}

const resultado = somar(3,4)
console.log('A soma é ' + resultado)