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

        <ul class="network-info" role="list">
          <li>
            <div class="item">
              <p class="label">IP Address</p>
              <p class="value">192.212.174.101</p>
            </div>
          </li>
          <li>
            <div class="item">
              <p class="label">Location</p>
              <p class="value">Brooklyn NY, 10001</p>
            </div>
          </li>
          <li>
            <div class="item">
              <p class="label">Timezone</p>
              <p class="value">UTC-05:00</p>
            </div>
          </li>
          <li>
            <div class="item">
              <p class="label">ISP</p>
              <p class="value">SpaceX Starlink</p>
            </div>
          </li>
        </ul>
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
    --button-border-radius: 1rem;
    display: flex;
    width: 100%;

    .p-inputtext {
      font-family: var(--body-font);
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

      &-icon {
        font-size: 0.8rem;
        font-weight: var(--font-bold);
      }
    }
  }
}

.network-info {
  background-color: var(--neutral-white);
  box-shadow: hsla(240, 5%, 41%, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  row-gap: 1rem;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;

    .label {
      text-transform: uppercase;
      font-weight: var(--font-bold);
      font-size: var(--smaller-font-size);
      letter-spacing: 1.7px;
      color: var(--primary-dark-gray);
    }

    .value {
      font-weight: var(--font-medium);
      font-size: var(--h2-font-size);
    }
  }
}
</style>
