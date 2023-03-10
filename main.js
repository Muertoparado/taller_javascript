/* 3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */

let voltaje=0;

let resistencia=Number(prompt("digite la resistencia total"));
let corriente=Number(prompt("digite la corriente total"));

console.log(`el voltaje total circuito serie es: ${resistencia*corriente}V`);