const clientes = [
     {
         nome: "André",
         cpf: `12345678901`,
         dependentes: [{
             nome: `Sara`,
             parentesco: `filha`,
             dataNasc: `20/03/2011`
         },{
             nome: `Samia`,
             parentesco: `filha`,
             dataNasc: `04/01/2014`
         }]
     },
     {
         nome: `Juliana`,
         cpf: `18218901671`,
         dependentes: [{
             nome: `Sophia`,
             parentesco: `filha`,
             dataNasc: `30/08/2020`
         }],
     }
 ]
 
 
 
 let listaDeDependentes = [];
 
 for (let i = 0; i < clientes.length; i++) {
     listaDeDependentes.push(...clientes[i].dependentes);
 }
 
 console.table(listaDeDependentes);