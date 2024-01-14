import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      lang: 'pt-BR',
      toggleMenuMobile: false,
      toggleMask: false,
    };
  },
  mutations: {
    setLang(state, payload) {
      state.lang = payload;
    },
    showMenuMobile(state, payload) {
      state.toggleMenuMobile = payload;
    },
    showMask(state, payload) {
      state.toggleMask = payload;
    },
  },
});

export default store;
