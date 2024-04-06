<template>
  <router-link to="/" class="logo" title="Deni Carmo">
    <img
      src="@/assets/img/deni-logo.png"
      alt="Deni Carmo Logo"
      width="80px"
      height="35px"
      class="logo-img"
    />
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  max-width: 80px;
  height: auto;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 3;

  &-img {
    width: 100%;
    max-width: 45px;
    height: auto;
    max-height: 35px;
    min-height: 35px;
  }
}

@media (max-width: 800px) {
  .logo {
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
