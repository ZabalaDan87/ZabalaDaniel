function buscausuario(){
        fetch('https://randomuser.me/api/')            
            .then (response =>response.json())
            .then(data=>{
                console.log(data)             
                    let longitud = data.results[0].location.coordinates.longitude;
                    let latitud = data.results[0].location.coordinates.latitude;
           
                    let image= document.getElementById("img")
                    image.src=data.results[0].picture.large;
                    
                    let nombre= data.results[0].name.first;
                    let apellido= data.results[0].name.last;

                           let conteiner=L.DomUtil.get('map')
                            if (conteiner!=null) {
                                    conteiner._leaflet_id=null;
                            }

                let map=L.map("map").setView([longitud,latitud],10);

                let marker = L.marker([longitud,latitud]).addTo(map);

                        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                         maxZoom: 19,
                         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        }).addTo(map);
                    

                        
             } )
}
