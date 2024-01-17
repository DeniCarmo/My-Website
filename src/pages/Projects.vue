<template>
  <section id="works" class="works">
    <h1 class="works-title">
      {{ $store.state.lang === 'pt-BR' ? 'Trabalhos e Projetos' : 'Works and Projects' }}
    </h1>

    <div class="container">
      <div class="row">
        <WorksSlider :itemsData="itemsData" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import works from '@/components/works/works.js';
import applySEO from '@/globals/applySEO.js';
export default {
  data() {
    return {};
  },
  components: {
    WorksSlider: defineAsyncComponent(() =>
      import(/* webpackChunkName: "WorksSlider" */ '@/components/works/WorksSlider.vue')
    ),
  },
  computed: {
    itemsData() {
      return this.$store.state.lang === 'pt-BR' ? works[0].pt : works[0].en;
    },
    currentLang() {
      return this.$store.state.lang;
    },
  },
  watch: {
    currentLang(newLang) {
      if (newLang === 'pt-BR') {
        applySEO({
          title: 'Trabalhos e Projetos',
          description: 'Alguns dos meu trabalhos e projetos.',
        });
      } else {
        applySEO({
          title: 'Works and Projects',
          description: 'Some of my works and projects.',
        });
      }
    },
  },
  mounted() {
    if (this.$store.state.lang === 'pt-BR') {
      applySEO({
        title: 'Trabalhos e Projetos',
        description: 'Alguns dos meu trabalhos e projetos.',
      });
    } else {
      applySEO({
        title: 'Works and Projects',
        description: 'Some of my works and projects.',
      });
    }
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
  max-width: 1024px;
  height: auto;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-top: 40px;

  @media (max-width: 800px) {
    padding: 0 5px;
  }

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
