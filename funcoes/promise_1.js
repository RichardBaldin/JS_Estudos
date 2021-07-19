
let p = new Promise(function(resolve){
resolve(['Ana','Bia','Carlos','Renam'])
})
//para fazer a chamada da nossa Promise
//Uma Promise gera apenas um unico valor

p
.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))

 