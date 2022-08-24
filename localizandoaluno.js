const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasdosalunos = [10, 7, 9, 6]

let ListaDeNotasEAlunos = [alunos, mediasdosalunos] 

console.log (`${ListaDeNotasEAlunos[0][0]},
sua média é ${ListaDeNotasEAlunos [1][0]}`)

const exibenomenota = (nomedoaluno) => {
    if (ListaDeNotasEAlunos[0].includes(nomedoaluno)){
        indice = ListaDeNotasEAluno[0].indexof (nomedoaluno)
        return ListaDeNotasEAlunos [1][indice] + ',sua media é'
        + ListaDeNotasEAlunos[1] [indice]
    }else {
        return "Aluno nao esta cadastrado"
    }
}

console.log (exibenomenota("Juliana"))