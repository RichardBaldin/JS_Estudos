const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promisse(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })

    })
}
//Observer
function namorada() { 
    setTimeout(() => {
        console.log('N: Apagar as luzes')
        console.log('N: Pedir Silêncio')
        console.log('N: Surpresa!!!!')
    }, 2000)
}
//Observer
function sindico(evento) {
    setTimeout(() => {
        console.log('S: Monitorando o Barulho')
        console.log(`S: ${evento.resp}`)
        console.log(`S: ${evento.date}`)


    }, 1000)
}

//Subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado Chegou? (s/N/q)')
        if(resp.toLowerCase() === 's') {
            //Os observadores são notiifcados
            (interessados || []).forEach(obs => obs({ resp, date: date.now() }))
        } else if(resp.toLowerCase() === 'q') {
            break
        }
    }
}
/*
Foi registradoi dois observadores
Os observadores são a namorada e o sindicos
o Subject é o porteiro
*/ 
porteiro([namorada, sindico]) 

