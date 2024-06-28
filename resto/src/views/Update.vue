<template>
   <Header/>
  <h1 class="title">Update restaurant</h1>
  <form class="add">
    <input type="text" name="name" v-model="restaurant.name"/>
    <input type="text" name="contact" v-model="restaurant.contact"/>
    <button type="button" @click="updateRestaurant">update restaurant</button>
  </form>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
  data(){
    return{
      restaurant:{
        name:'',
        contact:''
      }
    }
  },
 
  components:{
    Header
  },
  methods:{
   async updateRestaurant(){
    console.log(this.restaurant)
    let result=await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,{
        name:this.restaurant.name,
        contact:this.restaurant.contact,
      })
      if(result.status==200){
        this.$router.push({name:'home'})
      }
   }
  },
  async mounted(){
    let user=localStorage.getItem('user')
   
    if(!user){
        this.$router.push({name:'SignUp'})
    }
    let result=await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
    console.log(result.data)
    this.restaurant=result.data
}

}
</script>

<style>

</style>