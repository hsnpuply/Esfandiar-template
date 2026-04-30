import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './app/router';
import { registerAppProviders } from './app/providers';
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
registerAppProviders(app);

app.mount('#app');
