<template>
  <RouterView/>
</template>

<script>
export default {

}
</script>

<style>
.form input,.add input{
   display :block;
   margin: 20px auto;
   width:300px;
   height: 30px;
   border: 1px solid skyblue;
   padding: 5px;
}
.btn,.add button{
    display :block;
    margin: 20px auto;
   background: skyblue;
   width:310px;
   border:none;
   color:white;
   cursor: pointer;
   padding:10px;
}
.title{
    text-align: center;
}
.link{
   text-decoration: none;
   display: block;
   text-align: center;
}
body{
   padding: 0;
   margin: 0;
}
.title{
  text-align: center;
}

</style>