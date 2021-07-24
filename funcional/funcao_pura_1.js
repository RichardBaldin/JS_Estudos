const PI = 3.14

//Função impura, pois o PI é um valor externo a função, não depende apenas de valores passados por pâramento
//Não é uma impureza muito significastiva pois se trata de algo estável
function areaCirc(raio) {
    return raio * raio * PI
}
//Função Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi
}


console.log(areaCirc(10))
console.log(areaCircPura(10,3.14))