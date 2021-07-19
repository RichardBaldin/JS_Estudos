function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocooreu um erro!!!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
.then(v => console.log(`${v}`))
.then(
    v => console.log(v),
    err => console.log(`Erro Esp.: ${err}`)
)
.catch(err => console.log(`Erro: ${err}`))
.then(() => console.log('Fim!'))