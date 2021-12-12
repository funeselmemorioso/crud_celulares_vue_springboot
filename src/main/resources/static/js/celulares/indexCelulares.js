const app=new Vue({
    el:"#app",
    data:{
        celulares:[],
        errored:false,
        loading: true
    },
    created(){
        
        this.fetchData();
    },
    methods:{
        fetchData(){
            var url='http://localhost:8080/celulares'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.celulares = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        eliminar(id){
            const url = 'http://localhost:8080/celulares/'+id;
                      
            var options = {
                method: 'DELETE',
               }

            var self = this;

            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(() => self.fetchData())
           
            
        }
    }
})


