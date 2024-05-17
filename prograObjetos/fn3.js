class Persona{

    constructor(name,lastname,gender,city,email,age){


    this.name=name;
    this.lastname=lastname;
    this.gender=gender;
    this.city=city;
    this.email=email;
    this.age=age;

}

// saludar(){

//     console.log(`hola, soy ${this.name}`)}

    esmenor(){
        console.log(`hola soy: ${this.name}${this.lastname} soy cliente`)


    }

    esmayor(){
        console.log(`hola soy :  ${this.name}${this.lastname} soy empleado`)
    }

}






class Cliente extends Persona{

    constructor(name,lastname,gender,city,email,age,numero_cuenta){

    super(name,lastname,gender,city,email,age)


    this.numero_cuenta=numero_cuenta
}


}




class Empleados extends Persona{
    constructor(name,lastname,gender,city,email,age,legajo){

    super(name,lastname,gender,city,email,age)
    

    this.legajo=legajo

}



}

function buscar(){

    fetch(`https://randomuser.me/api/`)
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data)

            let random= new Persona(data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
                data.results[0].location.city,data.results[0].email,data.results[0].dob.age)



                document.getElementById(`results`)
console.log(random)
//random.saludar();



if (data.results[0].dob.age<18) {
    let Cliente= new Persona(data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
        data.results[0].location.city,data.results[0].email,"1")

        Cliente.esmenor();
    
} else {
    let Empleados= new Persona(data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
        data.results[0].location.city,data.results[0].email,"100")
            Empleados.esmayor();
    
}



    })

}


