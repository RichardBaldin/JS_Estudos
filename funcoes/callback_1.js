
function exec(fn, a, b){
    return fn(a,b)
}

const somarNoTerminal = (x ,y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

//O callback perimite você passar uma função como parâmetro para outra, que essa ao ler o arquivo chama a função passando o conteudo no arquivo gerando a resposta
const subtrair = (w, z) => w - z

const r = exec(subtrair, 50, 25)
console.log(r)

const cb = () => console.log('ExecS...')
//setInterval chama a função nesse determnado tempo
setInterval(cb, 1000)
// ou  setIntervel(() => console.log('Exec...'),1000)