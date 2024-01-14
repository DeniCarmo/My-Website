<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="madeby col-12">
          <span class="madeby-item">
            <img src="@/assets/img/deni-logo.png" alt="Deni" class="madeby-item__img" />
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: auto;
}
.madeby {
  width: 100%;
  height: auto;
  min-height: 100px;
  display: flex;
  align-items: center;

  .madeby {
    &-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &__img {
        width: 100%;
        max-width: 100px;
        height: auto;
        max-height: 60px;
      }
    }
  }
}
</style>
