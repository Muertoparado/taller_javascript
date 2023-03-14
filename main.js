/* 4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */

let personas1={};
personas1.nombre=prompt("digite el nombre persona 1 ");
personas1.edad=Number(prompt("digite la edad persona 1"));

let personas2={};
personas2.nombre=prompt("digite el nombre persona 2 ");
personas2.edad=Number(prompt("digite la edad persona 2"));

let personas3={};
personas3.nombre=prompt("digite el nombre persona 3 ");
personas3.edad=Number(prompt("digite la edad persona 3"));

if(personas1.edad>>personas2.edad){
    if(personas2.edad>>personas3.edad){
        console.log(`persona de mayor edad llamada ${personas1[0]}`);
    }else{
        if(personas3.edad>>personas1.edad){
            console.log(`persona de mayor edad llamada ${personas3[0]}`)
        }
    }
}else{
    if(personas1.edad>>personas3.edad){
        console.log(`persona de mayor edad llamada ${personas2[0]}`);
    }else{
        if(personas3.edad>>personas2.edad){
            console.log(`persona de mayor edad llamada ${personas3[0]}`)

        }
    }
}
