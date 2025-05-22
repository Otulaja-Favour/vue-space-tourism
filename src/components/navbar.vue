<template>
  <div>
    <nav class="navbar navbar-expand-lg px-5" id="navbars">
      <div class="container-fluid">
         <RouterLink class="navbar-brand" to="/"><img src="../assets/shared/logo.svg" alt="" /></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <p style="color: white; margin-left: -190px">
                ______________________________________________
              </p>
              <li class="nav-item">
                <RouterLink to="/">00Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/destination">01 DESTINATION</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/crew">02 CREWS</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/technology">03 TECHNOLOGY</RouterLink>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>
