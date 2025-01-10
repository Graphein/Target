let numero = 21;

let a = 0;
let b = 1;
let pertence = false;

while (a <= numero) {
    if (a === numero) {
        pertence = true;
        break; 
    }
    let proximo = a + b; 
    a = b; 
    b = proximo; 
}

if (pertence) 
{
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} 
else 
{
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
