var miPagina = new URL(window.location.href);
var idCelular = miPagina.searchParams.get("id");   

const app=new Vue({
    el:"#app",
    data:{
        celular:{ marca:{id:0, nombre:""}, descripcion:"", modelo:"", memoria:0 },
        marcas:[],
        errored:false,
        loading: true
    },
    created(){          
        this.traerMarcas();        
        this.fetchData();
    },
    methods:{
        traerMarcas(){
            var url='http://localhost:8080/marcas'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.marcas = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        fetchData(){
            var url='http://localhost:8080/celulares/' + idCelular
            fetch(url)
                .then(response => response.json())
                .then(data => { 
                    console.log(data.nombre);                  
                    this.celular = data;                    
                    //console.log(this.marca);
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        editarCelular(){          
            let url="http://localhost:8080/celulares" 

            var options = { 
                body: JSON.stringify(this.celular),
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
