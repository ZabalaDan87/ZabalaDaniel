
const personaje = {

    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
    
}
document.getElementById("result").innerHTML=( "Nombre " + personaje.name);
document.getElementById("stat").innerHTML=( "Status " + personaje.status);

//console.log('nombre: ',personaje.name)
//console.log('status: ',personaje.status)



//console.log(personaje)
//console.log(personaje.name)
//console.log(personaje.origin.url)



/*const jugador ={
    "nombre": "nahuel",
    "apellido": "Barrios",
    "apodo":"perrito",
    "edad" :28,
    "clubes":["San Lorenzo","UCatolica"],
    "activo": true,
    "Sueldo": 1000000.99

}

console.log(jugador.clubes[0])*/

