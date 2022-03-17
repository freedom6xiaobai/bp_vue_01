<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view/>
    </div>
    <div class="g-footer-container">

    </div>
  </div>
</template>


<script>

export default {
  name: 'App',
  components: {}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
