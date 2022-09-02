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

function oferecereguro (obj) {
     const propsclientes = Object.keys (obj);
     if (propsclientes.includes("dependentes"))
     {
          console.log (`Oferta de seguro de vida para ${obj.nome}`);
     }

}
console.log(Object.entries(cliente))
oferecereguro(cliente)
