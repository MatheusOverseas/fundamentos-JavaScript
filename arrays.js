const valores = ['Matheus', 'Cunha', 'Marques'];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ide: 3}, false, null, 'teste'); // adciona valores ao array
console.log(valores);

console.log(valores.pop()); // exclui o  ultimo valor do array