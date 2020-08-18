// novo rescurso do ES2015

const pessoa =  {
    nome: 'Matheus',
    idade: 17,
    endereco: {
        logradouro: 'Rua Augusta',
        numero: 183
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);