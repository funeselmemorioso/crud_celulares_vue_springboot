function guardarCelular(){

    let marca = {id:1};
    let descripcion = "es un telefono bla bla";
    let modelo = "G5666";
    let memoria = 2;
    
    
    let producto={
        marca:marca,
        modelo:modelo,
        descripcion:descripcion,
        memoria:memoria
    }

    let url="http://localhost:8080/celulares"

    var options = { 
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow'
    }
    fetch(url, options)
    .then(function() {
        console.log("creado")        
    })
    .catch(err => {        
        console.error(err);
    })

}