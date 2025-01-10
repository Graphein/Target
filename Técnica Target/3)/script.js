const faturamentoDiario = [
    100, 200, 0, 300, 400, 0, 500, 0, 600, 700, 0, 0, 800, 900, 1000,
    0, 1100, 0, 0, 1200, 1300, 0, 1400, 0, 1500, 0, 1600, 0, 1700, 1800
];

let menorFaturamento = null;
let maiorFaturamento = null;
let somaFaturamento = 0;
let diasComFaturamento = 0;


for (let i = 0; i < faturamentoDiario.length; i++) 
{
    let faturamento = faturamentoDiario[i];

    if (faturamento > 0) 
    {
        if (menorFaturamento === null || faturamento < menorFaturamento) 
        {
            menorFaturamento = faturamento;
        }
        if (maiorFaturamento === null || faturamento > maiorFaturamento) 
        {
            maiorFaturamento = faturamento;
        }
        somaFaturamento += faturamento;
        diasComFaturamento++;
    }
}

const mediaMensal = somaFaturamento / diasComFaturamento;

let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

console.log("Menor faturamento em um dia:", menorFaturamento);
console.log("Maior faturamento em um dia:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
