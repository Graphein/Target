let str = "Eduardo";

let arrayDeCaracteres = str.split('');

let arrayInvertido = arrayDeCaracteres.map((_, index, array) => array[array.length - 1 - index]);

let strInvertida = arrayInvertido.join('');

console.log("String:", strInvertida);
