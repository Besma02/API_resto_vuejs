<template>
   <Header/>
  <h1 class="title">Add restaurant</h1>
  <form class="add">
    <input type="text" name="name" v-model="restaurant.name"/>
    <input type="text" name="contact" v-model="restaurant.contact"/>
    <button type="button" @click="addRestaurant">add restaurant</button>
  </form>
 
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
 
  components:{
    Header
  },
  data(){
    return{
      restaurant:{
        name:'',
        contact:''
      }
    }
  },
  methods:{
    async addRestaurant(){
      let result=await axios.post('http://localhost:3000/restaurant',{
        name:this.restaurant.name,
        contact:this.restaurant.contact,
      })
      if(result.status==201){
        this.$router.push({name:'home'})
      }
    }

  },
  mounted(){
    let user=localStorage.getItem('user')
   
    if(!user){
        this.$router.push({name:'SignUp'})
    }
}

}
</script>

<style>

</style>