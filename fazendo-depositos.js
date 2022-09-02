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
     }],

     saldo: 100,
     
     depositar:function(valor)
     {
          this.saldo += valor
     }
}

console.log(cliente.saldo)
cliente.depositar (30)
console.log(cliente.saldo)