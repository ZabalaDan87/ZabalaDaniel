let i1=0;
let i2=0;
let $array1 = [];
let $array2 = [];

function search(){

    i1 += 1

    let $numero= document.getElementById("codigo1").value;

    $array1.push($numero)

    if (i1 === 3){

    document.getElementById("codigo1").disabled = true;
    document.getElementById("enviar1").disabled = true;

    }
    console.log($array1)
}


function search2(){

    i2 += 1

    let $numero= document.getElementById("codigo2").value;
    
    $array2.push($numero)

    if (i2 === 3){

        document.getElementById("codigo2").disabled = true;
        document.getElementById("enviar2").disabled = true;
    }

    if( i1 ===3 && i2 === 3){
        buscarImagenes();
    }
    console.log($array2)
}


function buscarImagenes(){

    let personajesid1= $array1.join(",");
    let personajesid2= $array2.join(",");

    let muestra = personajesid1 + "," + personajesid2; // Concatenamos los IDs separados por comas

    fetch(`https://rickandmortyapi.com/api/character/${muestra}`)
    .then(Response => Response.json())
    .then(data =>{

        data.forEach((personaje, index) => {

            const img = document.createElement("img");
            img.src = personaje.image;

            img.classList.add(`imagen-${index + 1}`); 

            document.getElementById("imagenes").appendChild(img);
            
        });

    })
}


