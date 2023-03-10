/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */

let notas=[];

let sum=0;
for (let index = 0; index < 3; index++) {
    let nota=Number(prompt(`digite nota #${index+1}`));
    notas[index]=nota;
    sum+=nota;
}
let nfin=sum/3;
/* console.log(`la nota final del promedio es ${nfin}`); */

if(nfin >=3.9){
    console.log(`becado ${nfin}`);
}
else{
    console.log(`estudie ${nfin}`);
}