var miPagina = new URL(window.location.href);
var idMarca = miPagina.searchParams.get("id");   

const app=new Vue({
    el:"#app",
    data:{
        marca:{},
        errored:false,
        loading: true
    },
    created(){  
        
        var url='http://localhost:8080/marcas/' + idMarca
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => { 
                    console.log(data.nombre);                  
                    this.marca = data;                    
                    console.log(this.marca);
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        }
    }
});


function guardarMarca(){

    let nombre = document.querySelector("#txt_marca").value;   

    let marca={
        id:idMarca,
        nombre: nombre
    }

    let url="http://localhost:8080/marcas" 

    var options = { 
        body: JSON.stringify(marca),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow'
    }
    fetch(url, options)
    .then(function() {
        alert("se actualizó OK") 
    })
    .catch(err => {        
        console.error(err);
    })

}