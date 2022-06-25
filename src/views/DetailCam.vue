<template>
  <div>
    <NavBar />

  <div class="back">
   <router-link to="/ListCamera"><strong>Back</strong></router-link>
  </div>
  </div>
  <h2>
    Detail Product
  </h2>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "DetailCam",
  components: {
    NavBar,
  },
};
</script>
<style>
.back{
  margin-top: 40px;
  margin-left: 80px;

}
</style>
