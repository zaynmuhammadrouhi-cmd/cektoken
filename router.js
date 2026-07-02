const Home = {
    template: `
    <div class="container">

        <div class="card">

            <h1>Cek Nama ID PLN</h1>

            <p>Masukkan ID Pelanggan PLN</p>

            <input
                v-model="id"
                type="text"
                placeholder="Contoh : 56905973303"
            >

            <button @click="cek">
                Cek Sekarang
            </button>

        </div>

    </div>
    `,
    data(){
        return{
            id:""
        }
    },
    methods:{
        cek(){

            if(!this.id.trim()){
                alert("Masukkan ID PLN");
                return;
            }

            this.$router.push("/"+this.id);

        }
    }
};

const Result = {

template:`

<div class="container">

<div class="card">

<div v-if="loading">

<h2>Mencari data...</h2>

</div>

<div v-else-if="error">

<h2>Data tidak ditemukan</h2>

<br>

<router-link to="/">Kembali</router-link>

</div>

<div v-else>

<h2>✅ Data Ditemukan</h2>

<hr>

<p><b>Nama Pelanggan</b></p>

<h3>{{nama}}</h3>

<p><b>ID PLN</b></p>

<h3>{{idpln}}</h3>

<p><b>Tarif / Daya</b></p>

<h3>{{daya}}</h3>

<br>

<router-link to="/">Cek Lagi</router-link>

</div>

</div>

</div>

`,

data(){

return{

loading:true,

error:false,

nama:"",

idpln:"",

daya:""

}

},

mounted(){

fetch(
"https://yagami-cell.com/test_game_inject/test_pln/"+this.$route.params.id
)

.then(res=>res.json())

.then(res=>{

this.loading=false;

if(res.status=="suskes"){

this.nama=res.data.nama;

this.idpln=res.data.idpln;

this.daya=res.data.daya;

}else{

this.error=true;

}

})

.catch(()=>{

this.loading=false;

this.error=true;

});

}

};

const routes=[

{
path:"/",
component:Home
},

{
path:"/:id",
component:Result
}

];

const router=VueRouter.createRouter({

history:VueRouter.createWebHashHistory(),

routes

});
