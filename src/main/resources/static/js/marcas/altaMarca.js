function guardarMarca(){

    let nombre = document.querySelector("#txt_marca").value;    
    
    let marca={
        nombre: nombre
    }

    let url="http://localhost:8080/marcas"

    var options = { 
        body: JSON.stringify(marca),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow'
    }
    fetch(url, options)
    .then(function() {
     alert('SE CREO OK');     
    })
    .catch(err => {        
        console.error(err);
    })

}