  <template>
  <div id="app">
    <router-link to="/"></router-link>
  </div>
  <router-view />
  
</template>

<script>
export default {
  name: 'app',
  components:{}
  } 

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
}
body {
  font-family: 'montserrat', sans-serif;
  
}
header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
#app {

    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }
</style>