function busca(){
    i=0
    
    fetch('./personas.json')
    .then(response => response.json())
    .then(data => {
        
    console.log(data)


     let array=[];
     let array2=[];
     let female=0;
     let male=0;
    

}
    )
    }
    

    data["results"].array.forEach(user => {

        if(user.gender==="male" ){
            array.push  
            console.log(user.name.first+""+user.name.last)
            male+=male+1
        
            
        
         }else{

            array2.push(user.name.first+""+user.name.last)
            female+=female+1
         }
        
     });

     for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let p=document.createElement("p");
        p.textContent=element;
        document.body.appendChild(p);
        let conthombre=document.getElementById("cont");
        conthombre.innerText=`Cantidad de Hombres`+ male
        
     }

    for (let i = 0; i < array.length; i++) {
        const element = array2[i];


        let p=document.createElement("p");
        p.textContent=element;
        document.body.appendChild(p);
        let contmujer=document.getElementById("cont2");
        contmujer.innerText=`Cantidad de Mujeres`+ female
        
    }
