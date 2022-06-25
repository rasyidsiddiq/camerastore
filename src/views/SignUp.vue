<template>
  <h1>Register</h1>
  <div class = "Login">
    <img src="../assets/image/loginimg.png" width="400"/>
    <input type="text" v-model="Id" placeholder="Enter ID"/>
    <input type="text" v-model="username" placeholder="Enter Username"/>
    <input type="text" v-model="password" placeholder="Enter Password"/>
    <input type="text" v-model="fullname" placeholder="Full Name"/>
    <input type="text" v-model="adress" placeholder="Adress"/>
    <input type="text" v-model="gender" placeholder="Gender"/>
    <router-link to="/LogIn"><button>Register</button></router-link>
    <div class="Have">
      <router-link to="/LogIn"> <strong>Already Have Account? Log In</strong></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp'
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
  margin-bottom:10px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #5b5f5c;
}
.Login button {
  width: 200px;
  height: 40px;
  background: skyblue;
  display: block;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  border: 1px solid #5b5f5c;
}
.Have {

  margin-bottom: 50px;
  text-align: center;
}
</style>
