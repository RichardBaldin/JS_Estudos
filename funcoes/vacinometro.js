var vacinas = [
    {estado:'São Paulo', doses:27},
    {estado:'Rio de Janeiro', doses:15},
    {estado:'Minas Gerais', doses:14},
    {estado:'Bahia', doses:19},
    {estado:'Ceará', doses:22},
    {estado:'Rio Grande do Sul', doses:23},
    {estado:'Paraná', doses:23}
];

var totalDoses = vacinas.reduce( function(acc, elem){
    return acc + elem.doses;
}, 0)

console.log("O Brasil já aplicou " + totalDoses + " Milhões de doses")
console.log(vacinas.estado)