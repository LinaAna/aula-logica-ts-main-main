// Leia um total de segundos e mostre em horas, minutos e segundos.
const totalSeg = Number(pront("Digite o total de segundos: "));

const horas = Math.floor(totalSeg/3600);
const restoHoras = totalSeg % 3600;

const minutos = Math.floor(restoHoras / 60);
const segundos = restoHoras % 60;

alert(`${totalSeg}s ${horas}h ${minutos}m e ${segundos}`);