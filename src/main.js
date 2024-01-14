import { createApp } from 'vue';
import App from './App.vue';
import router from './router/main';
import store from './store/main.js';

const app = createApp(App);

const getLang = () => {
  let browserLang = navigator.language || navigator.userLanguage;
  return browserLang === 'pt-BR' ? 'pt' : 'en';
};

app.config.globalProperties.$screen = window;
app.config.globalProperties.$lang = getLang();

app.use(store);
app.use(router);
app.mount('#app');
