import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueYandexMetrika from 'vue-yandex-metrika';

createApp(App).use(store).use(AOS.init()).use(router).use(VueYandexMetrika, {
    id: 85852639,
    router: router,
    clickmap: true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor: true,
    env: process.env.NODE_ENV
    // other options
}).mount('#app')
