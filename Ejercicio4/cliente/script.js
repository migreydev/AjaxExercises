const url = 'https://intranetjacaranda.es/Ejercicios/cargaProvinciasXML.php';
const urlMunicipio = 'https://intranetjacaranda.es/Ejercicios/cargaMunicipiosXML.php';
const provincia = document.getElementById('provincias');
const municipio = document.getElementById('municipio');


provincia.addEventListener('click', async() =>{


    try{

        const respuesta = await fetch (url);
            
            if(!respuesta.ok){
                console.error('Error al botener una respuesta');
            }
    
        const xml = await respuesta.text();
    
        const parse = new DOMParser();
    
        const xmlDoc = parse.parseFromString(xml, 'text/xml');
    
        const provincias =  xmlDoc.querySelectorAll('provincia');
    
        
        let arrayProvincia = [];
    
        provincias.forEach(element => {
            let provinciaObjeto = {
    
                codigo: element.querySelector('codigo').textContent,
                nombre: element.querySelector('nombre').textContent,
            }
    
            arrayProvincia.push(provinciaObjeto);
    
            const option = document.createElement('option');
    
            option.value = provinciaObjeto.codigo;
            option.textContent  = provinciaObjeto.nombre;
    
            provincia.append(option);
    
        });

    }catch (error){
        console.error('Error', error);
    }

})

municipio.addEventListener('click', async() =>{

    try{

        const respuesta = await fetch (urlMunicipio);
    
        if(!respuesta.ok){
            console.error('Error al obtener la respuesta');
        }

        const xml = await respuesta.text();

        const parse = new DOMParser();

        const xmlDoc = parse.parseFromString(xml, 'text/xml');
        
        const municipios = xmlDoc.querySelectorAll('municipio');

        municipios.forEach(elemento => {

            const codigo = elemento.querySelector('codigo').textContent;
            const nombre = elemento.querySelector('nombre').textContent;
        })

    }catch (error){
        console.error('Error', error);
    }

})