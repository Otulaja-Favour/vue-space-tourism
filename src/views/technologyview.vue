<script setup>
import navs from '../components/navbar.vue'
import technologyfeature from '@/components/technologyfeature.vue';
</script>

<template>
  <div id="main" class="container-fluid">
    <navs />
   <technologyfeature />
    

  </div>
</template>


<style  scoped>

#main {
    background-image: url(../assets/technology/background-technology-desktop.jpg);
    
    color: white;
    height: 100vh;
    /* font-family: Roboto; */
}

#nav4{
    border-bottom: 3px solid white;
}
</style>

