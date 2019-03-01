class Estudiante{
   nombreCompleto: string;
   constructor(public nombre:string , public apellido:string){
      this.nombreCompleto=nombre+  " "  + apellido; 
   }
}

interface Persona{
   nombre: string;
   apellido:string;
}

function example(persona: Estudiante){ 
  return "Hola, " + persona.nombre + " " + persona.apellido;
}

//let user={nombre:"Maguy", apellido: "Soto"};
let user=new Estudiante("Sebastian " , "Lopez");

document.body.innerHTML = example(user);