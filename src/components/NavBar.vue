<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Camera Store</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ListCamera">Camera</router-link>
          </li>


        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/user">
              User
              <i class="bi bi-person"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/LogIn">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/LogIn" >Logout</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
export default {
  name : 'NavBar'

}
</script>
