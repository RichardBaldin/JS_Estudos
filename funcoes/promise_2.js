

setTimeout(function(){
console.log('AAAAAAAAAAAAAAAAAAAAAAA')

setTimeout(function(){
    console.log('AAAAAAAAAAAAAAAAAAAAAAA')

    setTimeout(function(){
        console.log('AAAAAAAAAAAAAAAAAAAAAAA')
    },2000)
},2000)
},2000)


function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Oi Amigo!')
            resolve()
        }, tempo)
    })
}

let p = esperarPor(3000)
   .then(() => esperarPor(3000))
   .then(esperarPor)