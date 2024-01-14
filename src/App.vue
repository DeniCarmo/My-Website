<template>
  <Header />
  <MenuMobile v-if="$screen.innerWidth <= 800" />
  <router-view />
  <transition name="fadeIn" appear>
    <div id="mask" v-if="$store.state.toggleMask" @click="closeAll"></div>
  </transition>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      language: null,
    };
  },
  components: {
    Header: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Header" */ './components/Header.vue')
    ),
    MenuMobile: defineAsyncComponent(() =>
      import(/* webpackChunkName: "MenuMobile" */ './components/MenuMobile.vue')
    ),
  },
  methods: {
    ...mapMutations(['setLang', 'showMenuMobile', 'showMask']),
    setLanguage() {
      this.language = this.$lang === 'pt' ? 'pt-BR' : 'en-US';
      this.setLang(this.language);
    },
    closeAll() {
      this.showMenuMobile(false);
      this.showMask(false);
    },
  },
  created() {
    this.setLanguage();
  },
};
</script>

<style lang="scss">
html,
body {
  height: auto;
}

#app {
  height: auto;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: $body-bg;
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $color-subtitle;

  &:hover {
    background: $color-main;
  }
}

#mask {
  width: 100%;
  height: 100vh;
  background-color: rgba($color-main, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  transition: all 0.5s ease;
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  opacity: 1;
  transform: translate3d(0, 0px, 0);
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0);
}

.leftToRight-enter-active,
.leftToRight-leave-active {
  opacity: 1;
  transform: translate3d(0, 0px, 0);
}

.leftToRight-enter-from,
.leftToRight-leave-to {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: $color-grey;
  transition: all 0.3s ease;

  &-active {
    background-color: $color-main;
  }
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 5px !important;
}

.swiper .swiper-wrapper {
  padding-bottom: 15px;
}

.swiper-button-prev,
.swiper-button-next {
  transform: translate3d(0, -50%, 0);

  &::after {
    color: $color-main;
  }
}
</style>
