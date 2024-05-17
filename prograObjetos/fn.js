class Persona {

constructor(nombre,apellido,fecha_nacimiento){


this. nombre=nombre;
this. apellido=apellido;
this. fecha_nacimiento=fecha_nacimiento;

}

saludar(){
    console.log(`hola, soy ${this.nombre}, mi apellido es ${this.apellido}`)
    

    
}


getEdad(fecha_nacimiento){

    let hoy= new Date();
    
let edad= hoy.getFullYear() - this.fecha_nacimiento

return edad;


    

    //console.log(`año de nacimiento ${this.fecha_nacimiento}`)
    



}
}

let daniel= new Persona('Daniel','Zabala','2002',)


let edad= daniel.getEdad()
console.log(daniel.getEdad())














