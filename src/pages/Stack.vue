<template>
  <transition name="fadeIn" appear>
    <section id="tools" class="tools col-12">
      <h1 class="tools-title">
        {{ $store.state.lang === 'pt-BR' ? 'Minhas Ferramentas' : 'My Tools' }}
      </h1>

      <div class="container">
        <div class="row">
          <Swiper
            :modules="modules"
            :slides-per-view="3"
            :loop="true"
            :pagination="true"
            :navigation="true"
            :autoplay="true"
            :breakpoints="breakpoints"
          >
            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/sass-icon.png" alt="SASS" title="SASS" />
                  </div>
                  <span class="tools-desc">SASS</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/jquery-icon.png" alt="jQuery" title="jQuery" />
                  </div>
                  <span class="tools-desc">jQuery</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img
                      src="@/assets/img/javascript-icon.png"
                      alt="Javascript"
                      title="Javascript"
                    />
                  </div>
                  <span class="tools-desc">Javascript</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/vuejs-icon.png" alt="Vue.js" title="Vue.js" />
                  </div>
                  <span class="tools-desc">Vue.js</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/vuex-icon.png" alt="Vuex" title="Vuex" />
                  </div>
                  <span class="tools-desc">Vuex</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/reactjs-icon.png" alt="React.js" title="React.js" />
                  </div>
                  <span class="tools-desc">React.js</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img
                      src="@/assets/img/styled-components-icon.svg"
                      alt="Styled Components"
                      title="Styled Components"
                    />
                  </div>
                  <span class="tools-desc">Styled Components</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/bootstrap.png" alt="Bootstrap" title="Bootstrap" />
                  </div>
                  <span class="tools-desc">Bootstrap</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img
                      src="@/assets/img/foundation-icon.png"
                      alt="Foundation"
                      title="Foundation"
                    />
                  </div>
                  <span class="tools-desc">Foundation</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img
                      src="@/assets/img/tailwind-icon.png"
                      alt="Tailwind CSS"
                      title="Tailwind CSS"
                    />
                  </div>
                  <span class="tools-desc">Tailwind CSS</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/vite-icon.png" alt="Vite" title="Vite" />
                  </div>
                  <span class="tools-desc">Vite</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/nodejs-icon.png" alt="NodeJs" title="NodeJs" />
                  </div>
                  <span class="tools-desc">NodeJs</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="tools-item--wrapper">
                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/mongodb-icon.png" alt="MongoDB" title="MongoDB" />
                  </div>
                  <span class="tools-desc">MongoDB</span>
                </div>

                <div class="tools-item col-6 col-md-4">
                  <div class="tools-img">
                    <img src="@/assets/img/github.png" alt="Github" title="Github" />
                  </div>
                  <span class="tools-desc">Github</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import applySEO from '@/globals/applySEO.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Pagination, Navigation],
      breakpoints: {
        800: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
          title: 'Stack',
          description: 'Um pouco sobre minha stack de conhecimentos.',
        });
      } else {
        applySEO({
          title: 'Stack',
          description: 'A little bit about my knowledge stack.',
        });
      }
    },
  },
  mounted() {
    if (this.$store.state.lang === 'pt-BR') {
      applySEO({
        title: 'Stack',
        description: 'Um pouco sobre minha stack de conhecimentos.',
      });
    } else {
      applySEO({
        title: 'Stack',
        description: 'A little bit about my knowledge stack.',
      });
    }
  },
};
</script>

<style scoped lang="scss">
.tools {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 40px;
  border-radius: 15px;
  box-shadow: 3px 5px 10px #212121;
  transition: all 0.5s ease;

  .tools {
    &-title {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
      color: $color-main;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
      transition: all 0.5s ease;
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-flow: column;

      &--wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
      }
    }

    &-img {
      width: 100%;
      max-width: 100px;
      height: auto;
      max-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      img {
        width: 80px;
        height: auto;
      }
    }

    &-desc {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
      color: $color-main;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }
  }
}

@media (max-width: 800px) {
  .tools {
    width: calc(100% - 30px);
  }
}
</style>
