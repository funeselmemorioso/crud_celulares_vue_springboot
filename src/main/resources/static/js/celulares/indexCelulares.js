

const app=new Vue({
    el:"#app",
    data:{
        celulares:[],
        errored:false,
        loading: true
    },
    created(){
        var url='http://localhost:8080/celulares'
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
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
            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
           // this.$forceUpdate();

        }
    }
})


