<template>
  <div>
    <NavBar />
  </div>

  <div class="row mt-1" >
    <div class="col-md-4">
      <h2>get your </h2>
      <div class="fav"><h2><strong>favorite camera </strong></h2></div>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/cam1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Phase One XF 100MP</strong> </h5>
          <p class="card-text">Resolution  : 151MP (CMOS BSI)
            <br/>Dynamic range : 15 f-stops
            <br/> Sensitivity (ISO)  : 50 - 25600
            <br/>Long exposure : 60 minutes
            <br/>Active pixels  : 14204 x 10652
            <br/> Output image dim. 300 DPI  : 120.26 x 90.19 cm
            <br/>
            <br/>
            <br/>
          </p>
          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/cam2.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Hasselblad H6D -100C</strong></h5>
          <p class="card-text">Hasselblad H6D-50c. Camera type: MILC body, Megapixels: 50 MP, Sensor type: CMOS,
            Maximum image resolution: 8272 x 6200 pixels. ISO sensitivity (max): 6400.
            Fastest camera shutter speed: 1/2000 s. Wifi. HD type: Full HD,
            Maximum video resolution: 1920 x 1080 pixels. Screen diagonal: 7.62 cm (3"),
            Touch screen. Internal memory: 16000 MB.</p>
          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/cam3.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Leica M240
          </strong></h5>
          <p class="card-text">
            24MP - Full frame CMOS Sensor
            <br/> ISO 100 - 6400
            <br/> 3.00" Fixed Type Screen
            <br/>Optical (rangefinder) viewfinder
            <br/>3.0fps continuous shooting
            <br/>680g. 139 x 80 x 42 mm
            <br/>Weather Sealed Body
            <br/>
            <br/>
            <br/>
            <br/>
          </p>

          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>

        </div>
      </div>
    </div>
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/camera3.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/camera2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-d">
      <div class="card">
        <img src="../assets/image/camera4.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <router-link to="/DetailCam/:id"><a href="#" class="btn btn-primary">Buy</a></router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "ListCamera",
  components: {
    NavBar,
  },
};
</script>

<style>
.line h2{
  margin-top: 1px;
}
h2{
  margin-top: 20px;
}
.card{
  margin-top: 50px;
  border: 2px solid #000000;
}
.card img{
  border-bottom: 2px solid #000000;
  border: 1px solid #000000;
}
.fav h2{
  margin-top: 0px;
}
</style>
