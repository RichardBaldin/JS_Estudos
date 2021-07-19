//Converter a temperatura em gruas fahrenheit para celcius

var GFar = [0, 20, 32, 50, 70, 100, 120]
var i =0
var GCelcius = GFar.map( function( temp) {
    return Math.round( ((temp -32) *5) / 9)
})

for(let temperatura of GCelcius){
    console.log(GFar[i]+'°F| ' +temperatura + '°C') 
    i++
}
