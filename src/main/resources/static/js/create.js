/* function guardar(){
    let n=document.getElementById("txtNombre").value 
    let e=document.getElementById("txtEmail").value 
    let p=parseInt(document.getElementById("txtPrioridad").value )
    
    let usuario={
        nombre:n,
        email:e,
        prioridad:p
    }
    let url="http://localhost:8080/usuarios"
        var options = { 
            body: JSON.stringify(usuario),
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow'
        }
        fetch(url, options)
        .then(function() {
            console.log("creado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
        })


}

function modificar(){
    let i=parseInt(document.getElementById("txtId").value )
    let n=document.getElementById("txtNombre").value 
    let e=document.getElementById("txtEmail").value 
    let p=parseInt(document.getElementById("txtPrioridad").value )
    
    let usuario={
        id:i,
        nombre:n,
        email:e,
        prioridad:p
    }
    let url="http://localhost:8080/usuarios"
        var options = { 
            body: JSON.stringify(usuario),
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow'
        }
        fetch(url, options)
        .then(function() {
            console.log("creado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
        })
} */