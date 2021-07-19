//Object.values e Object.entries() -> Teste ES8

var fruits = {
    maça: 10,
    laranja: 20,
    uva: 30,
    abacaxi: 40
}
//Retorna o total de todos os produtos
var total = Object.values(fruits).reduce((a,b) =>a + b);

console.log('Total de frutas:' + total);

//Retorna a Matriz [chave, valor] 

for (var[key, val] of Object.entries(fruits)){
    console.log("Fruta: " + key,"Quantidade: " + val);
}