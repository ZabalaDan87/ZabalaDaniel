
function searchUser(){

     let local=document.getElementById("local").checked;
     let internet= document.getElementById("internet").checked;

 document.getElementById("mujeres").innerHTML="";
 document.getElementById("hombres").innerHTML="";
 document.getElementById("contador").innerHTML="";
 document.getElementById("contador2").innerHTML="";
 document.getElementById("contador3").innerHTML="";
  let url;


     if (!local && !internet) {
          alert(`debe seleccionar una opcion`)
        return false
        
     } else {
        
 }
  if (local) {
   url=`personas.json`
    
   } else {
         url=`https://randomuser.me/api/?results=10`
    }
  
    fetch(url)
    .then(response => response.json()) 
    .then(data => {
        console.log(data["results"]); 

        let array = []; 
        let array2 = []; 
        let array3=[];
        let mujeres = 0; 
        let varones = 0; 

        data["results"].forEach(user => {
            if (user.gender === "female") {
                array.push(user.name.first + " " + user.name.last+" "+user.dob.age);
                mujeres += 1;
            }
            else {
                array2.push(user.name.first + " " + user.name.last+" "+user.dob.age);
                varones += 1;   
            }
        });


        array3=array.concat(array2)
        console.log(array3)


        // Obtiene los contenedores para las mujeres y los hombres
        const mujeresDiv = document.getElementById("mujeres");
        const hombresDiv = document.getElementById("hombres");

        
        for (let i = 0; i < array.length; i++) {
            const nombre = array[i];

            let p = document.createElement("p"); // Crea un elemento de párrafo
            p.textContent = nombre; // Establece el texto del párrafo
            p.style.color = "#FF0000"; 
            mujeresDiv.appendChild(p); // Añade el párrafo al contenedor de mujeres

           
            let contadorMujeres = document.getElementById("contador");
            contadorMujeres.innerText = `Cantidad de mujeres: ` + mujeres; 
        } 

        
        for (let i = 0; i < array2.length; i++) {
            const nombre = array2[i];

            let p = document.createElement("p"); // Crea un elemento de párrafo
            p.textContent = nombre; // Establece el texto del párrafo
            p.style.color = "#0000FF"; 
            hombresDiv.appendChild(p); // Añade el párrafo al contenedor de hombres

            
            let contadorVarones = document.getElementById("contador2");
            contadorVarones.innerText = `Cantidad de hombres: ` + varones; 
        } 

        let personas = varones + mujeres;
        let contadorPersonas = document.getElementById("contador3");
        contadorPersonas.innerText = `Cantidad de personas: ` + personas; 
    })
}
