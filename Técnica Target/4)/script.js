
let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

let faturamentoTotal = sp + rj + mg + es + outros;

let percentualSP = (sp / faturamentoTotal) * 100;
let percentualRJ = (rj / faturamentoTotal) * 100;
let percentualMG = (mg / faturamentoTotal) * 100;
let percentualES = (es / faturamentoTotal) * 100;
let percentualOutros = (outros / faturamentoTotal) * 100;

console.log("Percentual de representação por estado:");
console.log("SP:"+ percentualSP.toFixed(2) + "%");
console.log("RJ:"+ percentualRJ.toFixed(2) + "%");
console.log("MG:"+ percentualMG.toFixed(2) + "%");
console.log("ES:"+ percentualES.toFixed(2) + "%");
console.log("Outros:"+ percentualOutros.toFixed(2) + "%");
