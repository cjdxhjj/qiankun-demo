import './public-path';
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import { routes } from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(ElementUI);

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app');

Vue.config.productionTip = false;
let router = null;
let instance = null;
function render(props) {
  const { container } = props;
  console.log('mount app:' + container.id);
  router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
  });
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}


// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
  console.log('unmount app');
}
