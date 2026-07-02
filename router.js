const Home = {
    template: `
    <div style="padding:30px;text-align:center">

        <h1>Cek Nama ID PLN</h1>

        <br>

        <input
            v-model="id"
            placeholder="Masukkan ID PLN"
            style="padding:12px;width:300px;max-width:100%;">

        <br><br>

        <button @click="cek"
        style="padding:12px 20px;cursor:pointer">

            Cek

        </button>

    </div>
    `,
    data(){

        return{

            id:''

        }

    },
    methods:{

        cek(){

            if(this.id.trim()){

                this.$router.push('/'+this.id);

            }

        }

    }

}

const Result = {

    template:`

    <div style="padding:30px;text-align:center">

        <h2>ID PLN</h2>

        <h1>{{$route.params.id}}</h1>

        <br>

        <p>Halaman ini nanti akan mengambil data dari Yagami.</p>

        <br>

        <router-link to="/">← Kembali</router-link>

    </div>

    `

}

const routes=[

    {

        path:'/',

        component:Home

    },

    {

        path:'/:id',

        component:Result

    }

];

const router=VueRouter.createRouter({

    history:VueRouter.createWebHashHistory(),

    routes

});
