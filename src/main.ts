import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import SvgIcon from 'vue-svgicon';
export const VueInstance = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(SvgIcon, {
        tagName: 'svg-icon',
        defaultWidth: '1em',
        defaultHeight: '1em'
    });
VueInstance.mount("#app");
