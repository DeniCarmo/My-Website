<template>
  <nav class="menu col-12">
    <ul class="menu__list">
      <li class="menu__item" v-for="(item, i) in items" :key="i">
        <router-link class="menu__link" :to="item.link">
          {{ item[$store.state.lang === 'pt-BR' ? 'pt' : 'en'] }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
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
};
</script>

<style scoped lang="scss">
.menu {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu {
    &__list {
      width: 100%;
      height: auto;
      min-height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 0 15px;
      list-style: none;
      margin: 0;
    }

    &__item {
      overflow: hidden;
    }

    &__link {
      font-family: $sulphur;
      font-size: 16px;
      line-height: 16px;
      color: $color-main;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 1px;
        border-top: 1px solid $color-main;
        position: absolute;
        right: 100%;
        top: 100%;
        transition: 0.3s ease-in-out;
        z-index: 1;
      }

      &:hover {
        &::before {
          right: 0;
        }
      }
    }
  }
}
</style>
