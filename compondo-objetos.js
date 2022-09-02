const cliente = {
     
     nome:"andre",
     idade: "36",
     cpf: "123456",
     email: "andre@email.com",
     telefones:["44 998263061","4498263061"]

}

cliente.dependentes =  {
     nome: "sara",
     parentesco: "filha",
     datanasc: "20/03/2011",

}

console.log (cliente)

cliente.dependentes.nome = "sara silva"

console.log(cliente)