
    console.log(soma(2, 2))
    console.log(soma(2, 2))
    console.log(soma(2, 2))

    function nomeidade (nome , idade){
        return `meu nome é ${nome} e minha idade é ${idade}`;
    }
    console.log(nomeidade(40, "ana"))

    function soma (num1, num2){
        return num1 + num2;
    }

    function multiplica (num1 = 1, num2 = 1){
        return num1 * num2;
    }

console.log(multiplica (soma(4,5)))