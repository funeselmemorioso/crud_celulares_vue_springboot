const app=new Vue({
    el:"#app",
    data:{
        celular:{ marca:{id:0, nombre:""}, descripcion:"", modelo:"", memoria:0 },
        marcas:[],
        errored:false,
        loading: true
    },
    created(){         
        this.loading = false;
        this.traerMarcas();
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
        crearCelular(){
            console.log(this.celular);    

            let url="http://localhost:8080/celulares"

            var options = { 
                body: JSON.stringify(this.celular),
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
    }
});
