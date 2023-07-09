<script setup>
import Divider from 'primevue/divider'

defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  defaultValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <li>
    <div class="item l-flex">
      <p class="label">{{ label }}</p>
      <p class="value">{{ value || defaultValue }}</p>
    </div>
    <Divider type="solid" layout="vertical" />
  </li>
</template>
