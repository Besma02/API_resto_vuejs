<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
     
        <a @click="logout" href="#">Logout</a>
    </div>

</template>

<script>
export default {
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name:'login'})
        }
    }

}
</script>

<style>
.nav{
    background:black;
    padding: 20px;
}
.nav a{
    color:white;
    padding: 10px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
}
.nav a:hover{
    color:#1f1f1fdd;
    background: white;
   
}
</style>