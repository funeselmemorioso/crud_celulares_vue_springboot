var miPagina = new URL(window.location.href);
var idMarca = miPagina.searchParams.get("id");   

const app=new Vue({
    el:"#app",
    data:{
        marca:{id:0, nombre:""},
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
        },
        editarMarca(){          
            let url="http://localhost:8080/marcas" 

            var options = { 
                body: JSON.stringify(this.marca),
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
    }
});
