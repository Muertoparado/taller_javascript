/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR */
arr=[];
do{
   
    op=Number(prompt("digite un nuero diferente de cero: "));
    arr.unshift(op);
    console.log(arr);

}while(op!=0);
let sum=0;
let cont=0;
for(const num of arr){
    sum +=num;
    cont+=1;
}

console.log(`sumatoria total ${sum}`);
console.log(`numeros ingresados ${cont}`);
console.log(`valor promedio ${sum/cont}`);
console.log(`numero maximo `,Math.max(...arr));
console.log(`numero minimo `,Math.min(...arr));
