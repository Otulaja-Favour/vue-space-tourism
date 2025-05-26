<script setup>
import navs from '../components/navbar.vue'
import crewfeature from '@/components/crewfeature.vue';
</script>

<template>
  <div id="main" class="container-fluid">
    <navs />
    
<crewfeature />

  </div>
</template>


<style  scoped>

#main {
    background-image: url(../assets/crew/background-crew-desktop.jpg);
    
    color: white;
    height: 100vh;
    /* font-family: Roboto; */
}

#nav3{
    /* border-bottom: 3px solid white; */
}

@media screen and (max-width:900px) {
  #main{
    /* height: 700px !important; */
  }
}
</style>

