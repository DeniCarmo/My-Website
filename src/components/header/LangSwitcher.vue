<template>
  <div class="lang-switcher" @click="selectLang">
    <span class="lang-switcher-item" :class="`lang-switcher-${lang === 'pt-BR' ? 'pt' : 'en'}`">
      {{ $store.state.lang }}
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      lang: null,
    };
  },
  methods: {
    ...mapMutations(['setLang']),
    selectLang() {
      if (this.$store.state.lang === 'pt-BR') {
        this.setLang('en-US');
        this.lang = this.$store.state.lang;
      } else {
        this.setLang('pt-BR');
        this.lang = this.$store.state.lang;
      }
    },
  },
  created() {
    this.lang = this.$store.state.lang;
  },
};
</script>

<style scoped lang="scss">
.lang-switcher {
  width: 100%;
  max-width: 80px;
  height: 30px;
  background: $body-bg;
  border: 1px solid $color-main;
  border-radius: 25px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 25px;
  top: 8px;
  z-index: 5;
  cursor: pointer;

  .lang-switcher {
    &-item {
      width: 40px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $modal-bg;
      border-radius: 25px;
      padding: 0;
      transition: all 0.3s ease;
    }

    &-pt,
    &-en {
      font-family: $sulphur;
      font-size: 11px;
      line-height: 11px;
      font-weight: 600;
      color: $color-main;
      text-transform: uppercase;
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      position: absolute;
      top: 0;
    }

    &-pt {
      left: 0;
    }

    &-en {
      left: 100%;
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
