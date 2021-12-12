const app=new Vue({
    el:"#app",
    data:{
        marca:{ nombre:"" },        
        errored:false,
        loading: true
    },
    created(){         
        this.loading = false;      
    },
    methods:{  
        crearMarca(){         

            let url="http://localhost:8080/marcas"

            var options = { 
                body: JSON.stringify(this.marca),
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
    }
});



