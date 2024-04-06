<template>
  <Swiper
    v-if="itemsData && itemsData.length"
    :modules="modules"
    :slides-per-view="1"
    :loop="true"
    :pagination="true"
    :navigation="true"
    :autoplay="true"
    class="works-slider"
  >
    <SwiperSlide v-for="(item, i) in itemsData" :key="i" class="works-slide">
      <div id="works-item" class="works-item">
        <h2 class="works-subtitle">{{ item.title }}</h2>
        <a class="works-screenshot" :href="item.url" target="_blank">
          <img
            :src="getImgUrl('/works/img/', item.img.default)"
            :alt="item.img.alt"
            :title="item.img.alt"
          />
        </a>
        <div class="works-details">
          <span class="works-text">{{ item.text }}</span>

          <span class="works-platform" v-if="item.platform">
            {{ $store.state.lang === 'pt-BR' ? 'Plataforma: ' : 'Platform: ' }}
            <a :href="item.platform.url" class="works-platform-logo" target="_blank" nofollow>
              {{ item.platform.name }}
            </a>
          </span>

          <span class="works-description">
            {{ item.description }}
          </span>

          <div class="works-stack">
            <span class="works-stack__title">Stack:</span>
            <div
              class="works-stack__item"
              v-for="(tech, i) in item.stack"
              :key="`${tech.name}-${i}`"
            >
              <img
                :src="getImgUrl('/works/stack/', tech.logo)"
                :alt="tech.name"
                class="works-stack__img"
                v-if="tech.logo"
              />
              <span
                class="works-stack__name"
                :class="!tech.logo ? ' works-stack__name--noLogo' : ''"
                >{{ tech.name }}</span
              >
            </div>
          </div>

          <a class="works-link" :href="item.url" target="_blank" nofollow> Confira! </a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  props: {
    itemsData: Array,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getImgUrl(path, img) {
      return new URL(path + img, import.meta.url).href;
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.works {
  &-slider {
    border-radius: 15px;
    box-shadow: 3px 5px 10px #212121;

    @media (max-width: 800px) {
      border-radius: 0;
      box-shadow: none;
    }
  }

  &-subtitle {
    font-family: $sulphur;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    color: $color-subtitle;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    width: 100%;
    flex-basis: 100%;
    margin-bottom: 10px;

    @media (max-width: 576px) {
      font-family: $sulphur;
      font-size: 18px;
      line-height: 18px;
      font-weight: 700;
      color: $color-subtitle;
      display: block;
      margin-top: 25px;
    }
  }

  &-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &:hover,
    &:focus,
    &:active,
    &:visited {
      outline: none !important;
      text-decoration: none !important;
    }

    @media (max-width: 800px) {
      flex-flow: column;
    }
  }

  &-text {
    font-family: $sulphur;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    color: $color-subtitle;
    letter-spacing: 0.5px;
    text-align: justify;
    display: block;
    margin-top: 15px;
  }

  &-description {
    font-family: $sulphur;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: $color-subtitle;
    letter-spacing: 0.5px;
    text-align: justify;
    display: block;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  &-details {
    flex-basis: 60%;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 45px;
    position: relative;

    &:hover,
    &:focus,
    &:active,
    &:visited {
      outline: none !important;
      text-decoration: none !important;
    }

    @media (max-width: 800px) {
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 0;
    }
  }

  &-platform {
    font-family: $sulphur;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: $color-subtitle;
    display: flex;
    align-items: center;
    margin-top: 15px;

    &-logo {
      svg {
        width: 100px;
        height: 35px;
      }
    }
  }

  &-link {
    font-family: $sulphur;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    color: $color-subtitle;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $color-main;
    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
    position: absolute;
    bottom: 0;
    right: 15px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    @media (max-width: 800px) {
      margin-top: 15px;
      position: initial;
    }

    @media (min-width: 1200px) {
      &:hover {
        text-decoration: none;
        color: $body-bg;
        border: 1px solid $body-bg;

        &:before {
          transform: translateX(0);
        }

        &:after {
          transform: translateX(0);
        }
      }

      &:before {
        content: ' ';
        width: 50%;
        height: 100%;
        background: $color-main;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-101%);
        transition: all 0.5s ease-in-out;
        z-index: -1;
      }

      &:after {
        content: ' ';
        width: 50%;
        height: 100%;
        background: $color-main;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(101%);
        transition: all 0.5s ease-in-out;
        z-index: -1;
      }
    }
  }

  &-screenshot {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 40%;
    max-height: 900px;

    @media (min-width: 801px) {
      padding: 0 10px;
    }

    img {
      width: 100%;
      height: auto;
      max-height: 900px;
    }
  }

  &-stack {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
    grid-gap: 15px;

    @media (max-width: 800px) {
      justify-content: center;
    }

    &__title {
      font-family: $sulphur;
      font-size: 24px;
      line-height: 24px;
      font-weight: 600;
      color: $color-subtitle;
      text-transform: uppercase;
      flex-basis: 100%;
      margin-bottom: 10px;

      @media (max-width: 800px) {
        text-align: center;
      }
    }

    &__item {
      width: 100%;
      max-width: 100px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow: column;
      align-self: stretch;
    }

    &__img {
      width: 100%;
      max-width: 50px;
      height: auto;
      margin-bottom: 8px;
    }

    &__name {
      font-family: $sulphur;
      font-size: 14px;
      line-height: 14px;
      font-weight: 600;
      color: $color-subtitle;
      text-align: center;

      &--noLogo {
        font-size: 22px;
        line-height: 22px;
      }
    }
  }
}
</style>

<style lang="scss">
#works {
  .swiper {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    &::after {
      font-size: 36px;
      line-height: 36px;
    }
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px !important;
  }

  @media (max-width: 800px) {
    .swiper {
      padding-bottom: 0;
    }

    .swiper-button-next,
    .swiper-button-prev {
      top: 35%;
      transform: translate3d(0, 0, 0);

      &::after {
        font-size: 22px;
        line-height: 22px;
      }
    }

    .swiper-button-next {
      right: -8px;
    }

    .swiper-button-prev {
      left: -8px;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      display: none;
    }
  }
}
</style>
