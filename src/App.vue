<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
</script>

<template>
  <main>
    <div class="container">
      <picture>
        <source srcset="@/assets/img/pattern-bg-desktop.png" media="(min-width: 600px)" />
        <img src="@/assets/img/pattern-bg-mobile.png" />
      </picture>

      <div class="user-input">
        <h1 class="title">IP Address Tracker</h1>

        <div class="p-inputgroup">
          <InputText placeholder="Search for any IP address or domain" />
          <Button icon="pi pi-chevron-right" severity="secondary" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.container {
  position: relative;

  img {
    width: 100%;
  }
}

.user-input {
  position: absolute;

  top: 1.7rem;
  left: 50%;
  width: 88%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;

  .title {
    color: var(--neutral-white);
    font-size: var(--biggest-font-size);
    font-weight: var(--font-medium);
    line-height: 1.2;
  }

  .p-inputgroup {
    --button-border-radius: 0.9rem;
    display: flex;
    width: 100%;

    .p-inputtext {
      border-radius: var(--button-border-radius) 0 0 var(--button-border-radius);
      padding: 1rem;
      width: 100%;
      font-size: var(--small-font-size);
    }

    .p-button {
      background-color: var(--primary-black);
      border-color: var(--primary-very-dark-gray);
      border-radius: 0 var(--button-border-radius) var(--button-border-radius) 0;
      flex-basis: 20%;
    }
  }
}
</style>
