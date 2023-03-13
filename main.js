/* 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */

let a=Number(prompt("digite el primer numero a: "));
let b=Number(prompt("Digite el segundo numero b: "))

if(a>>b){
    console.log(`el #a ${a} mayor a #b ${b}`);
    console.log(`suma numeros ${a+b} \n diferencia numeros ${a-b}`);
    
}else{
    console.log(`el #b ${b} mayor a #a ${a}`);
    console.log(`producto numeros ${a*b}\n division ${a/b}`)

}