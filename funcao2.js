// armazenando uma funcao em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
};
imprimirSoma(2, 3);

// armazenando um funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b ;
}

console.log(soma(2, 3));

// returno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3)); 

function  multiplicacao  (a, b, c){
    return (a * b) + c;
}


console.log(multiplicacao(2, 3, 1   ));