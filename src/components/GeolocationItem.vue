<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String
  },
  defaultValue: {
    type: String
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

<style scoped lang="scss">
.item {
  row-gap: 0.5rem;

  .label {
    text-transform: uppercase;
    font-weight: var(--font-bold);
    font-size: var(--smaller-font-size);
    letter-spacing: 2px;
    color: var(--primary-dark-gray);
  }

  .value {
    font-weight: var(--font-medium);
    font-size: var(--h2-font-size);
    text-align: center;
  }
}

.p-divider-solid.p-divider-vertical {
  display: none;
}
</style>
