<template>
  <div class="homecontent">
    <div>
      <p>So, you want to travel to</p>
      <h1>Space</h1>
      <p>
        Let's face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly
        out of this world experience!
      </p>
    </div>
    <div>
        <RouterLink id="circle" to="/destination">Explore</RouterLink>
     
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

#circle {
    /* width: 100px !important; */
  margin: 0 auto;
  width: 150px !important;
  border-radius: 50%;
  padding: 50px 40px;
  text-align: center;
  display: flex;
  font-size: 30px;
  border: none;
  background-color: white;
  text-decoration: none;
  color: black;
}
#circle:hover {
  box-shadow: 10px 10px  0px 60px rgb(216, 214, 211, 0.3);
}

@media screen and (max-width:900px) {
   
}
</style>
