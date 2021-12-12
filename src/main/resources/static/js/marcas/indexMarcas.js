const app=new Vue({
    el:"#app",
    data:{
        marcas:[],
        errored:false,
        loading: true
    },
    created(){
        
        this.fetchData();
    },
    methods:{
        fetchData(){
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
        eliminar(id){
            const url = 'http://localhost:8080/marcas/'+id;
                      
            var options = {
                method: 'DELETE',
               }

               var self = this;
            fetch(url, options)
            .then(res => res.text()) 
            .then(res => console.log(res))
            .then(() =>self.fetchData())    
        }
    }
})


