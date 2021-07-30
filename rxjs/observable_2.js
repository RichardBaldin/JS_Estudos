const { Observable, noop } = require('rxjs')
//noop permite que nós não deixamos de tratar o erro, apenas o ignorando
const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que Problema?!?')
    }
})

obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim!')
)

obs.subscribe({
    next(valor) {
        console.log(`valor: ${valor}`)
    }, 
    error(msg) {
        console.log(`Erro: ${msg}`)
    },
    complete() {
        console.log('Fim!')
    }
})