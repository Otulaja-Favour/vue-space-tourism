<script setup>
import navs from '../components/navbar.vue'
import destinationfeature from '@/components/destinationfeature.vue';
</script>

<template>
  <div id="main" class="container-fluid">
    <navs />
   <destinationfeature />
  </div>
</template>


<style  scoped>

#main {
    background-image: url(../assets/destination/background-destination-desktop.jpg);
    
    color: white;
    height: 100vh;
    /* font-family: Roboto; */
}
#nav2{
    border-bottom: 3px solid white;
}

</style>

