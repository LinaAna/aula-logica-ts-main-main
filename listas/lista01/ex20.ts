const salarioBruto = Number(prompt("Digite o salário bruto: "));

const descontoINSS = salarioBruto * 0.11;
const descontoIR = salarioBruto * 0.75;
const descontoVT = salarioBruto * 0.06;

const salarioLiquido = salarioBruto - (descontoINSS + descontoIR + descontoVT);
alert(`bruto ${salarioBruto} -> INSS ${descontoINSS}, IR ${descontoIR}, VT ${descontoVT}, líquido ${salarioLiquido}`);