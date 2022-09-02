const cliente = {
     
     nome:"andre",
     idade: "36",
     cpf: "123456",
     email: "andre@email.com",
     telefones:["44 998263061","4498263061"],
     
     dependentes: [{
          nome: 'sara silva',
          parentesco: 'filha',
          datanasc: 24/05/2001
     }]

}

cliente.dependentes.push({
     nome:"samia maria",
     parentesco: "filha",
     datanasc: "02/04/2001"
})

//console.log(cliente)

const filhamaisnova = cliente.dependentes.filter(dependente => dependente.datanasc ==="02/04/2001")

console.log(filhamaisnova[0].nome)