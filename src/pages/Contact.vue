<template>
  <transition name="fadeIn" appear>
    <div class="contact" id="contact">
      <h1 class="contact-title">
        {{ $store.state.lang === 'pt-BR' ? 'Contato' : 'Contact' }}
      </h1>

      <div class="contact-items__wrapper">
        <div class="contact-items">
          <a
            href="https://github.com/DeniCarmo"
            class="contact-item__link"
            target="_blank"
            nofollow
          >
            <i class="contact-item__icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M500,10C236.3,10,22.6,229.4,22.6,500c0,270.6,213.8,490,477.4,490c263.7,0,477.4-219.4,477.4-490C977.4,229.4,763.7,10,500,10z M643.3,940.1c-23,4.6-31.1-9.9-31.1-22.3c0-15.2,0.5-65.2,0.5-127.2c0-43.3-14.5-71.6-30.7-86c100.8-11.4,206.5-50.7,206.5-228.8c0-50.6-17.5-92.1-46.5-124.5c4.6-11.7,20.2-58.8-4.5-122.7c0,0-37.9-12.5-124.3,47.6c-36.1-10.3-74.8-15.5-113.2-15.7c-38.5,0.2-77.2,5.3-113.2,15.7c-86.4-60-124.4-47.6-124.4-47.6c-24.6,63.9-9.1,111-4.4,122.7c-28.9,32.4-46.5,73.8-46.5,124.5c0,177.7,105.6,217.5,206,229.2c-12.9,11.6-24.6,32-28.7,62c-25.8,11.8-91.3,32.3-131.6-38.6c0,0-23.9-44.5-69.3-47.8c0,0-44.2-0.6-3.1,28.2c0,0,29.7,14.2,50.2,67.8c0,0,26.6,90.2,152.4,62.2c0.2,38.7,0.6,67.9,0.6,78.9c0,12.3-8.2,26.6-30.9,22.3c-179.8-61.3-309.3-235.1-309.3-440C47.7,244,250.2,36.4,500,36.4c249.8,0,452.3,207.6,452.3,463.8C952.3,705,822.8,878.7,643.3,940.1z"
                  />
                </g>
              </svg>
            </i>
          </a>
          <span class="contact-item__title">Github</span>
        </div>

        <div class="contact-items">
          <a
            href="https://www.linkedin.com/in/denilson-josé-do-carmo-4a0623106/"
            class="contact-item__link"
            target="_blank"
            nofollow
          >
            <i class="contact-item__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                />
              </svg>
            </i>
          </a>
          <span class="contact-item__title">Linkedin</span>
        </div>
      </div>

      <div class="contact-email">
        <span class="contact-email__text">
          E-mail:
          <a href="mailto:deni.carmo2017@gmail.com" class="contact-email__link"
            >deni.carmo2017@gmail.com</a
          >
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import applySEO from '@/globals/applySEO.js';
export default {
  data() {
    return {};
  },
  computed: {
    currentLang() {
      return this.$store.state.lang;
    },
  },
  watch: {
    currentLang(newLang) {
      if (newLang === 'pt-BR') {
        applySEO({
          title: 'Contato',
          description: 'Gostaria de entrar em contato? Basta seguir um dos links.',
        });
      } else {
        applySEO({
          title: 'Contact',
          description: 'Want to get in touch? Just follow one of the links.',
        });
      }
    },
  },
  mounted() {
    if (this.$store.state.lang === 'pt-BR') {
      applySEO({
        title: 'Contato',
        description: 'Gostaria de entrar em contato? Basta seguir um dos links.',
      });
    } else {
      applySEO({
        title: 'Contact',
        description: 'Want to get in touch? Just follow one of the links.',
      });
    }
  },
};
</script>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding-bottom: 50px;
  padding-top: 40px;
  border-radius: 15px;
  box-shadow: 3px 5px 10px #212121;
  transition: all 0.5s ease;

  .contact {
    &-title {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
      color: $color-main;
      text-transform: uppercase;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }

    &-items {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      margin: 0 20px;

      &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &-item {
      &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
      }

      &__icon {
        margin-bottom: 5px;

        svg {
          width: 80px;
          height: 80px;

          path {
            transition: all 0.5s ease-in-out;
            fill: #787878;
          }
        }

        &:hover {
          svg {
            path {
              fill: $color-subtitle;
            }
          }
        }
      }

      &__title {
        font-family: $sulphur;
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;
        color: $color-main;
        letter-spacing: 0.5px;
      }
    }

    &-email {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;

      &__text {
        font-family: $sulphur;
        font-size: 18px;
        line-height: 18px;
        font-weight: 400;
        color: $color-main;
        letter-spacing: 0.5px;
      }

      &__link {
        font-family: $sulphur;
        font-size: 18px;
        line-height: 18px;
        font-weight: 400;
        color: $color-main;
        letter-spacing: 0.5px;
        animation: links 1s infinite;
        text-decoration: underline !important;
      }
    }
  }
}

@media (max-width: 800px) {
  .contact {
    width: calc(100% - 30px);
  }
}
</style>
