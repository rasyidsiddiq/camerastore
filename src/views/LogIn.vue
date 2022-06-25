<template>
  <h1>Login</h1>
  <div class = "Login">
    <img src="../assets/image/loginimg.png" width="400"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="text" v-model="password" placeholder="Enter Password"/>
    <router-link to="/"><button>Login</button></router-link>
    <div class="Have">
      <router-link to="/SignUp"><strong> Don't have an account yet? Register here</strong></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LogIn'
}
</script>
<style>
h1{
  margin-top: 40px;
  margin-left: 200px;

}
.Login img{
  margin-left: 470px;
  margin-bottom: 20px;
}
.Login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom:30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #5b5f5c;
}
.Login button {
  width: 200px;
  height: 40px;
  background: skyblue;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  border: 1px solid #5b5f5c;
}
</style>
