/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */


let a=(prompt("digite el nombre del articulo: "));
let b=Number(prompt("Digite el precio del articulo: "));
let c=Number(prompt("Digite la cantidad de articulos: "))


let precio=c*b;

console.log(`------factura------\n nombre ${a} \n precio a pagar ${precio}`)