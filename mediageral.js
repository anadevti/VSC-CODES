const salajs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salajava = [6, 5, 8, 9, 5, 6]
const salapython = [7, 3.5, 8, 9.5]

function mediasala(notasdasala){
     const somadasnotas = notasdasala.reduce(
 (acum, atual)=> atual+acum,0)
     return somadasnotas/ notasdasala.length
}

console.log (`média da sala de javascript ${mediasala (salajs)}`)
console.log (`média da sala de java ${mediasala (salajava)}`)
console.log (`média da sala de Python ${mediasala (salapython)}`)

