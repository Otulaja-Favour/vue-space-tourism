<script setup>
import navs from '../components/navbar.vue'
import homefeature from '@/components/homefeature.vue';
</script>

<template>
  <div id="main" class="container-fluid">
    <navs />
    <homefeature />
  </div>
</template>


<style  scoped>

#main {
    background-image: url(../assets/home/background-home-desktop.jpg);
    
    color: white;
    /* height: 100vh; */
    /* font-family: Roboto; */
}

</style>

