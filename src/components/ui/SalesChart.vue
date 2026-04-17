<script setup lang="ts">
import { ref } from 'vue'

const chartOption = ref({
  title: {
    text: 'Weekly Sales',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Sales',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      itemStyle: {
        color: '#3b82f6'
      }
    }
  ]
})
</script>

<template>
  <div class="h-80 w-full">
    <v-chart class="chart" :option="chartOption" autoresize />
  </div>
</template>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
