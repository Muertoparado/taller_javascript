/* 6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

 estudiantes=[];

function estudiante(nombre,sexo,nota){
    this.nombre=nombre;
    this.sexo=sexo;
    this.nota=nota;
}
 do{
    let nombre=prompt("digite el nombre: ");
    let sexo=prompt("digite el sexo (F o M): ");
    let nota=parseFloat(prompt("digite la nota definitiva: "));
    let estudiant1=new estudiante(nombre,sexo,nota);

    estudiantes.unshift(estudiant1);
    console.log(estudiantes)

 }while(confirm("desea continuar"));

m=[];
f=[];
for (let i=0; i<estudiantes.legth;i++){
   if(estudiantes[i].sexo=='f'){
      contf+=1;
      estf= new f (estudiante)
       f.unshift(estf) 
       console.log(`numero de mujeres`,contf)
   }
   if(estudiantes[i].sexo=='m'){
      contm+=1;
      estm= new m (estudiante)
         m.unshift(estm)  
        console.log(`numero de hombres`,contm)
        console.log(m)
   }
}

   
