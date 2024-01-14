<template>
  <transition name="leftToRight" appear>
    <aside class="menu-mobile" id="menuMobile" v-show="$store.state.toggleMenuMobile">
      <div class="menu-mobile-header">
        <span class="menu-mobile-header__title">Menu</span>
        <span class="menu-mobile__close" id="menuClose" @click="closeMenuMobile"> X </span>
      </div>

      <div class="menu-mobile__content">
        <ul class="menu-mobile__items">
          <li class="menu-mobile__item" v-for="(item, i) in items" :key="i">
            <router-link :to="item.link" class="menu-mobile__link" @click="closeMenuMobile">
              {{ item[$store.state.lang === 'pt-BR' ? 'pt' : 'en'] }}
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      items: {
        about: {
          pt: 'Sobre',
          en: 'About',
          link: '/',
        },
        stack: {
          pt: 'Stack',
          en: 'Stack',
          link: '/stack',
        },
        projects: {
          pt: 'Projetos',
          en: 'Projects',
          link: '/projects',
        },
        contact: {
          pt: 'Contato',
          en: 'Contact',
          link: '/contact',
        },
      },
    };
  },
  methods: {
    ...mapMutations(['showMenuMobile', 'showMask']),
    closeMenuMobile() {
      this.showMenuMobile(false);
      this.showMask(false);
    },
  },
};
</script>

<style scoped lang="scss">
.menu-mobile {
  width: 100%;
  max-width: 340px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  background-color: $body-bg;
  box-shadow: 3px 5px 10px $color-subtitle;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  transition: all 0.5s ease-in-out;

  &__close {
    font-family: $sulphur;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    color: $color-white;
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-left: auto;
    cursor: pointer;
  }

  &__content {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: auto;
    padding-top: 20px;
  }

  &-header {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    background-color: $color-main;

    &__title {
      font-family: $sulphur;
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
      color: $color-white;
    }
  }

  &__items {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
    list-style: none;
    padding: 0 10px;
  }

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;
  }

  &__link {
    font-family: $sulphur;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    color: $color-main;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    letter-spacing: 0.5px;

    &:hover {
      color: $color-main;
      text-decoration: none;
    }

    &:focus,
    &:active,
    &:visited {
      outline: none;
      color: $color-main;
    }
  }
}
</style>
