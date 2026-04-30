import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import DatePicker from 'vue3-persian-datetime-picker';
import 'primeicons/primeicons.css';

export function registerAppProviders(app: App): void {
  app.use(PrimeVue, {
    unstyled: false
  });

  app.component('DatePicker', DatePicker);
}
