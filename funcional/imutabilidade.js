
function ordernar(array) {
   return [...array].sort()
}

//Obkect.freeze -> Não muda o conteudo
const nums = [3, 1, 7, 9, 4, 6]
const numsOrdenados = ordernar(nums)
console.log(nums)
console.log(numsOrdenados)

const parteNums = nums.slice(2)
console.log(parteNums, nums)