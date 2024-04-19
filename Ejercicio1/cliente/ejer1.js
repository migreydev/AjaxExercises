const url= "https://intranetjacaranda.es/Ejercicios/compruebaDisponibilidadXML.php";
const button = document.getElementById('comprobar');

const form = document.querySelector('form');

button.addEventListener('click', async() =>{

    try{

        const respuesta = await fetch (url);
        
        if(!respuesta.ok){
            console.error('Error al botener una respuesta');
        }
    
        const xml = await respuesta.text();
        const parse = new DOMParser();
    
        const xmlDoc = parse.parseFromString(xml, 'text/xml');   
        
        const disponible = xmlDoc.querySelector('disponible').textContent;

        const h2 = document.createElement('h2');
        const usuario = document.getElementById('login').value;

        h2.textContent = `El usuario ${usuario} ${disponible} está disponible`;

        form.append(h2);

    }catch (error){
        console.error('Error', error);
    }

})