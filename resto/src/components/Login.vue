<template>
    <div>
  <h1 class="title">Sign Up</h1>
 <div class="form">
  
   
   <input type="email" placeholder="email" v-model="email"/>
   <input type="password" placeholder="password" v-model="password"/>
   <button @click="login" class="btn">Login</button>
   <router-link to="SignUp" class="link">sign Up</router-link>
 
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
         email:'',
         password:''
    }
},
methods:{
    async login(){
        let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
        if(result.status==200 && result.data.length){
            localStorage.setItem('user',JSON.stringify(result.data))
            this.$router.push({name:'home'})
     
    }
    }
   
},
mounted(){
    let user=localStorage.getItem('user')
    if(user){
        this.$router.push({name:'home'})
    }
}
}

</script>

<style>

</style>