<script setup lang="ts">
import Card from 'primevue/card';
import { ref, computed } from 'vue';
import { formatGregorianFromJalali, formatJalali } from '@/shared/utils/date/persianDate';

const selectedJalali = ref('1405/02/10');

const todayJalali = computed(() => formatJalali(new Date()));
const asGregorian = computed(() => formatGregorianFromJalali(selectedJalali.value));
</script>

<template>
  <Card>
    <template #title>Persian Calendar Ready</template>
    <template #content>
      <div class="space-y-4">
        <p>Today in Jalali: <strong>{{ todayJalali }}</strong></p>
        <DatePicker v-model="selectedJalali" format="jYYYY/jMM/jDD" display-format="jYYYY/jMM/jDD" />
        <p>Gregorian output: <strong>{{ asGregorian }}</strong></p>
      </div>
    </template>
  </Card>
</template>
