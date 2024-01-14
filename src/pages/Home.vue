<template>
  <transition name="fadeIn" appear>
    <section id="about" class="about">
      <div class="about-bg">
        <div class="about-bg__mask"></div>
      </div>
      <span class="about-title">
        {{ $store.state.lang === 'pt-BR' ? 'Olá!' : 'Hello!' }}
      </span>

      <span class="about-text">
        {{ contentLang.text }}
        <router-link to="/contact" class="about-link"> {{ contentLang.link }}</router-link
        >.
      </span>
    </section>
  </transition>
</template>

<script>
import applySEO from '@/globals/applySEO.js';
export default {
  data() {
    return {
      content: {
        pt: {
          text: `
            Meu nome é Denilson, mas pode me chamar de Deni, sou um desenvolvedor front end e moro em
            Araçatuba - SP. Esta é a minha casa na internet, aqui verá minhas
            habilidades, meus trabalhos e meus projetos. Estou sempre estudando e procurando melhorar como
            profissional. Fique à vontade para olhar e caso goste do que vê, é mais do que bem vindo(a)
            para 
          `,
          link: 'entrar em contato',
        },
        en: {
          text: `
            My name is Denilson, but you may call me Deni, I'm a front end developer based in 
            Araçatuba - SP, Brazil. This is my home on the internet, here you'll see 
            my skills, my works and my projects. I'm always studying and looking to grow as a professional. 
            Feel free to take a look and if you like what you see, you're more than welcome to 
          `,
          link: 'get in touch',
        },
      },
    };
  },
  computed: {
    contentLang() {
      return this.$store.state.lang === 'pt-BR' ? this.content.pt : this.content.en;
    },
    currentLang() {
      return this.$store.state.lang;
    },
  },
  watch: {
    currentLang(newLang) {
      if (newLang === 'pt-BR') {
        applySEO({
          title: 'Desenvolvedor Front-End',
          description: 'Deni Carmo - Desenvolvedor front-end | Vue.js | Nuxt.js | React.js',
        });
      } else {
        applySEO({
          title: 'Front-End Developer',
          description: 'Deni Carmo - Front-end developer | Vue.js | Nuxt.js | React.js',
        });
      }
    },
  },
  mounted() {
    if (this.$store.state.lang === 'pt-BR') {
      applySEO({
        title: 'Desenvolvedor Front-End',
        description: 'Deni Carmo - Desenvolvedor front-end | Vue.js | Nuxt.js | React.js',
      });
    } else {
      applySEO({
        title: 'Front-End Developer',
        description: 'Deni Carmo - Front-end developer | Vue.js | Nuxt.js | React.js',
      });
    }
  },
};
</script>

<style scoped lang="scss">
.about {
  width: 100%;
  max-width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
  padding-top: 40px;
  border-radius: 15px;
  box-shadow: 3px 5px 10px #212121;
  transition: all 0.5s ease;

  .about {
    &-title {
      font-family: $sulphur;
      font-size: 26px;
      line-height: 26px;
      font-weight: 700;
      color: $color-main;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 100%;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    &-text {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
      color: $color-subtitle;
      letter-spacing: 0.5px;
      text-align: justify;
      width: 100%;
      max-width: 600px;
      height: auto;
    }

    &-link {
      color: $color-main;
      text-decoration: underline;

      &:focus,
      &:active,
      &:visited {
        outline: none;
        text-decoration: underline;
      }
    }

    &-bg {
      width: 100%;
      height: 100vh;
      display: none;
      background: #ffffff;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      &__mask {
        display: none;
      }
    }
  }
}

@media (max-width: 800px) {
  .about {
  }
  .about {
    max-width: calc(100% - 30px);
    padding: 15px;

    &-title {
      margin-bottom: 30px;
    }

    &-text {
      letter-spacing: unset;
    }
  }
}
</style>
