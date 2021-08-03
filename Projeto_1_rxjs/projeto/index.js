const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'legendas')

const simbolos = [
    '.','?','-',',','"','♪',
    '_','<i>','</i>','\r','[',']',
    '(',')'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo()
    )
    .subscribe(console.log)

// fn.composicao(
//     fn.lerDiretorio,
//     fn.elementosTerminadosCom('.srt'),
// fn.lerArquivos,
// fn.mesclarElementos,
// fn.separarTextoPor('\n'),
// fn.removerElementosSeVazio,
// linhas => fn.removerElementosSeIncluir('-->')(linhas),
// fn.removerElementosSeApenasNumero,
// fn.removerSimbolos(simbolos),
// fn.mesclarElementos,
// fn.separarTextoPor(' '),
// fn.removerElementosSeVazio,
// fn.removerElementosSeApenasNumero,
// fn.agruparElementos,
// fn.ordenarPorAtribNumerico('qtde', 'desc'),
// console.log

// )(caminho)


