<template>
   <Header/>
  <h1 class="title">Restaurants {{name}}</h1>
  <div class="container" v-for="item in restaurant" :key="item.id">
    <h2>{{item.name}}</h2>
    <p>{{item.contact}}</p>
    <div class="modif">
   <router-link class="link" :to="'/update/'+item.id">update</router-link>
   <button  class="delete" @click="deleteRestaurant(item.id)">Delete</button>
  </div>

  </div>
 
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
  data(){
    return{
    name:'',
    restaurant:[]
    }
  },
  components:{
    Header
  },
  methods:{
    async deleteRestaurant(id){
      console.log(id)
      let result=await axios.delete('http://localhost:3000/restaurant/'+id)
      console.log(result)
      if(result.status==200){
        this.loadData()
      }

    },
    async loadData(){
      let user=localStorage.getItem('user')
    this.name=JSON.parse(user).name
    if(!user){
        this.$router.push({name:'SignUp'})
    }
    let result=await axios.get('http://localhost:3000/restaurant')
    this.restaurant=result.data
    }
  },
  async mounted(){
    this.loadData()

}

}
</script>

<style>
.container{
  margin:10px  auto;
  background: skyblue;
  text-align: center;
  width: 400px;
  padding: 10px;
}
.link{
  text-decoration: none;
  color: white;
  font-size: 18px;
}
.delete{
  border:none;
  border-radius:10px;
  padding: 5px 10px;
  background: rgb(252, 252, 252);
  color: rgb(4, 4, 4);
  margin-left: 10px;

}
.modif{
  display: flex;
  align-items: center;
 margin-left: 160px;
  

}

</style>