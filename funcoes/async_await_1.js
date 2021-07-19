function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

esperarPor(2000)
.then(() => console.log('Olá Amigo!'))
.then(esperarPor)
.then(() => console.log('Olá Amigo!'))
.then(esperarPor)
.then(() => console.log('Olá Amigo!'))
.then(esperarPor)

async function retornarValor(){
    return 20
}

function retornarValorRapido(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor =  await retornarValorRapido()
    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor +3

}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}


executarDeVerdade()