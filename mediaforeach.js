const notas = [10, 6.5, 8, 7.5]

let somadasnotas = 0

notas.forEach(nota => {
     somadasnotas+= nota
})

let media = somadasnotas/notas.length

console.log (media)

