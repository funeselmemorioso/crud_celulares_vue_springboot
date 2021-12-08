

const app=new Vue({
    el:"#app",
    data:{
        usuarios:[],
        errored:false,
        loading: true
    },
    created(){
        var url='http://localhost:8080/usuarios'
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        eliminar(id){
            const url = 'http://localhost:8080/usuarios/'+id;
                      
            var options = {
                method: 'DELETE',
               }
            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
           // this.$forceUpdate();

        }
    }
})


function guardar(){
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
}