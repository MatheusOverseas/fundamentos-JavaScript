const nome = 'Matheus';
const conncatenacao = 'olá' + nome + '!';

const tenplate = `
    Olá
    ${nome}`
console.log(conncatenacao, tenplate);


// expressoes....
console.log(`1 + 1 =  ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei.... ${up("cuidado!")}`)