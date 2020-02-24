import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'
import 'normalize.css'
import './assets/markdown/vue.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入

// 全局注入
Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.config.productionTip = false




// 分别引入不同的定义的语言文件
import zh from './page/lang/zh_CN' //中文
import en from './page/lang/EN' //英文
const messages = {
	zh,
  en
	
};
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
