class Persona{

    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento){


    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.nacionalidad=nacionalidad;
    this.fecha_nacimiento=fecha_nacimiento;

}
saludar(){

    console.log(`hola, soy ${this.nombre}`)
    

    
}


}

class Cliente extends Persona{

constructor (nombre,apellido,dni,nacionalidad,fecha_nacimiento,numero_cuenta){

    super(nombre,apellido,dni,nacionalidad,fecha_nacimiento)


    this.numero_cuenta= numero_cuenta;
}
}

let daniel= new Cliente("Daniel","Zabala","44152574","Argentino","2002","22003");

// daniel.nombre="Daniel"
// daniel.apellido="Zabala"
// daniel.dni="44152574"
// daniel.fecha_nacimiento="2002"
// daniel.nacionalidad="Argentino"
// daniel.numero_cuenta="22003"

console.log(daniel)
daniel.saludar()
