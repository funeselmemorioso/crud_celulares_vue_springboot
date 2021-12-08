const app=new Vue({
    el:"#producto",
    data:{
        productos:[],
        errored:false,
        loading: true
    },
    created(){
        var url='http://localhost:8080/producto'
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        eliminar(id){
            const url = 'http://localhost:8080/producto/'+id;
                      
            var options = {
                method: 'DELETE',
               }
            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

        }
    }
})


function guardarProducto(){
    let n=document.getElementById("txtNombre").value 
    let p=parseFloat(document.getElementById("txtPrecio").value )
    
    
    let producto={
        nombre:n,
        precio:p
    }
    let url="http://localhost:8080/producto"
        var options = { 
            body: JSON.stringify(producto),
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