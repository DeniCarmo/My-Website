<template>
  <section id="works" class="works">
    <h1 class="works-title">{{ title ? title : 'No title informed' }}</h1>

    <div class="container">
      <div class="row">
        <WorksSlider :itemsData="itemsData" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import works from '@/assets/works/works.js';
export default {
  data() {
    return {
      itemsData: this.$store.state.lang === 'pt-BR' ? works.pt : works.en,
    };
  },
  components: {
    WorksSlider: defineAsyncComponent(() =>
      import(/* webpackChunkName: "WorksSlider" */ '@/components/works/WorksSlider.vue')
    ),
  },
};
</script>

<style scoped lang="scss">
.works {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-top: 40px;

  .works {
    &-title {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
      color: $color-main;
      text-transform: uppercase;
      margin-bottom: 30px;
      text-decoration: underline;
      letter-spacing: 0.5px;
    }
  }
}
</style>
