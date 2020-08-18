// par nome/valor
const saudacao = 'Opa' // contexto lécixo 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao;
}

//obejtos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Matheus',
    idade: 17,
    peso: 69.9,
    endereço: {
        logradouro: 'Rua Augusta',
        numero: 183
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);