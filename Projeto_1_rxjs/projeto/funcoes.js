const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }

    })
}
function lerArquivo() {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {
                    encoding: 'utf-8'
            })
                subscriber.next(conteudo.toString())
            } catch (e) {
                subscriber.error()
            }
        }
}))
}


function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if(texto.endsWith(padraoTextual)) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerElementosSeApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)    
        })
    }
}

function mesclarElementos (array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((agrupamento, palavra) => {
         const p = palavra.toLowerCase()
         const qtde = agrupamento[p] ? agrupamento[p].qtde + 1 : 1
         agrupamento[p] = { elemento: p, qtde }
         return agrupamento
    }, {}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem === 'asc' ? asc : desc)
    }
}


function createPipeableOperator(operatorFn) {
    return function(source) {
        return Observable.create(subscriber => {
                const sub  = operatorFn(subscriber)
                source.subscribe(operatorFn({
                    next: sub.next,
                    error: sub.error || (e => subscriber.error(e)),
                    complete: sub.complete || (e => subscriber.complete(e)),
                }))
        })
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumerico
}