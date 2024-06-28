<template>
    <div>
  <h1 class="title">Sign Up</h1>
 <div class="form">
  
   <input type="text" placeholder="name" v-model="name"/>
   <input type="email" placeholder="email" v-model="email"/>
   <input type="password" placeholder="password" v-model="password"/>
   <button @click="signUp" class="btn">Sign up</button>
   <router-link to="login" class="link">login</router-link>
 
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
name:'SignUp',
data(){
   return{
       name:'',
       email:'',
       password:''
   }
},
methods:{
    async signUp(){
    let result=await axios.post('http://localhost:3000/users',{
        name:this.name,
        email:this.email,
        password:this.password

    })
   console.log(result)
   if(result.status==201){
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