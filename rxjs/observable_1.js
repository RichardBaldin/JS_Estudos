const { Observable} = require('rxjs')
//Promise envia um por chamada
const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
})

promise.then(console.log)
//Observer pode lançar vários dados
const obs = new Observable(subscriber => {
    subscriber.next('Observer é bem legal!!!')
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))