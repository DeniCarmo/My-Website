<template>
  <header class="header" id="header">
    <nav class="container">
      <div class="row">
        <div
          class="menu-mobile__open"
          id="menuOpen"
          @click="openMenuMobile"
          v-if="$screen.innerWidth <= 800"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g transform="translate(1 1)">
              <g>
                <g>
                  <path
                    d="M255-1C113.618-1-1,113.618-1,255s114.618,256,256,256s256-114.618,256-256S396.382-1,255-1z M255,468.333
                        c-117.818,0-213.333-95.515-213.333-213.333S137.182,41.667,255,41.667S468.333,137.182,468.333,255S372.818,468.333,255,468.333
                        z"
                  />
                  <path
                    d="M361.667,148.333H148.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h213.333
                        c11.782,0,21.333-9.551,21.333-21.333C383,157.885,373.449,148.333,361.667,148.333z"
                  />
                  <path
                    d="M361.667,233.667H148.333C136.551,233.667,127,243.218,127,255s9.551,21.333,21.333,21.333h213.333
                        c11.782,0,21.333-9.551,21.333-21.333S373.449,233.667,361.667,233.667z"
                  />
                  <path
                    d="M361.667,319H148.333C136.551,319,127,328.551,127,340.333c0,11.782,9.551,21.333,21.333,21.333h213.333
                        c11.782,0,21.333-9.551,21.333-21.333C383,328.551,373.449,319,361.667,319z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Logo />
        <Menu v-if="$screen.innerWidth > 800" />
        <LangSwitcher />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
  data() {
    return {};
  },
  components: {
    Menu: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Menu" */ '@/components/header/Menu.vue')
    ),
    Logo: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Logo" */ '@/components/header/Logo.vue')
    ),
    LangSwitcher: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Lang Switcher" */ '@/components/header/LangSwitcher.vue')
    ),
  },
  methods: {
    ...mapMutations(['showMenuMobile', 'showMask']),
    openMenuMobile() {
      this.showMenuMobile(true);
      this.showMask(true);
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: auto;
  min-height: 45px;
  border-top: 1px solid $color-subtitle;
  border-bottom: 1px solid $color-subtitle;
  background: $body-bg;
  box-shadow: 3px 3px 5px $color-grey;
  transition: all 0.5s ease-in-out;
  position: relative;

  .container {
    .row {
      position: relative;
    }
  }

  &-sticky {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
}

.menu-mobile {
  &__open {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: $body-bg;
    border-radius: 100%;
    cursor: pointer;

    svg {
      width: 40px;
      height: 40px;

      path {
        fill: $color-subtitle;
      }
    }
  }
}

@media (max-width: 800px) {
  .header {
    padding: 8px 15px;
  }
}
</style>
