import { createApp } from 'vue';
import App from './App.vue';
// import './style.css';

export default {
  render(options = {}) {
    const opts = {
      el: '#test2',
      ...options
    };
    return createApp(App).mount(opts.el);
  }
};
