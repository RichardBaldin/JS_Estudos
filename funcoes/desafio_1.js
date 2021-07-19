//Criar uma função somar(3)(4)(5)

function soma(n1) {
    return function (n2) {
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}
resultado = soma(3)(4)(5)
console.log(resultado)

//fn -> 3 *7 || 3 + 7 || 3 - 7 
//Calcular(3)(7)(fn)

function somar(v1, v2) {
    return v1 + v2
}

function mult(v1, v2) {
    return v1 * v2
}

function div(v1, v2) {
    return v1 / v2
}

function operacoes(v1) {
    return function (v2) {
        return function (fn) {
            return fn(v1, v2)
        }
    }
}

let resposta = operacoes(2)(2)(somar)
console.log(resposta)

resposta = operacoes(5)(2)(mult)
console.log(resposta)

resposta = operacoes(2)(2)(div)
console.log(resposta)