const url= "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadJSON.php";
const button = document.getElementById('comprobar');

const form = document.querySelector('form');

button.addEventListener('click', async() =>{

    try{

        const respuesta = await fetch (url);
        
        if(!respuesta.ok){
            console.error('Error al botener una respuesta');
        }

        const disponible = await respuesta.json();
        console.log(disponible);
    
        const text = disponible.disponible;
        const usuario = document.getElementById('login').value;
    
        const h2 = document.createElement('h2');
    
        h2.innerText =`El username: ${usuario} ${text} esta disponible`;
    
        form.append(h2);


    }catch (error){
        console.error('Error', error);
    }

})