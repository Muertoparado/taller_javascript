/* 8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */


let op=Number(prompt('1. para cuadrado \n 2.para triangulo '));

switch (op){
    case 1:
        l=Number(prompt(`digite el lado del cuadrado`));
        console.log(`perimetro ${l*4}`);
        break;
    case 2:
        a=Number(prompt(`digite base del triangulo`));
        b=Number(prompt(`altura triangulo`));
        console.log(`area total triangulo ${a*b}`);
}
