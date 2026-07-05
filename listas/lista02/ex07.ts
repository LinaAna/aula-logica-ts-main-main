let valor = Number(prompt("Digite o valor para saber seu desconto: "));
if(valor > 100){
    let pagar =valor - valor * 0.10;
    alert("Com desconto: R$ " + pagar);
}else{
    alert("Sem desconto: R$ " + valor);
}