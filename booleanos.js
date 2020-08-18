let isAlive = false;
console.log(isAlive);

isAlive = true;
console.log(isAlive);

isAlive = 1;
console.log(!!isAlive);

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!! '');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAlive = true));

console.log('Os falsos....')
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAlive = false));

console.log('Pra finalizar....');
console.log(!!('' || null || 0 || 'EPA'));