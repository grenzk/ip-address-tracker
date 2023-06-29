<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Divider from 'primevue/divider'
</script>

<template>
  <main>
    <div class="container">
      <div class="user-input l-flex">
        <h1 class="title">IP Address Tracker</h1>

        <div class="p-inputgroup">
          <InputText placeholder="Search for any IP address or domain" />
          <Button icon="pi pi-chevron-right" severity="secondary" />
        </div>
      </div>

      <ul class="network-info l-flex" role="list">
        <li>
          <div class="item l-flex">
            <p class="label">IP Address</p>
            <p class="value">192.212.174.101</p>
          </div>
          <Divider type="solid" layout="vertical" />
        </li>

        <li>
          <div class="item l-flex">
            <p class="label">Location</p>
            <p class="value">Brooklyn, NY 10001</p>
          </div>
          <Divider type="solid" layout="vertical" />
        </li>

        <li>
          <div class="item l-flex">
            <p class="label">Timezone</p>
            <p class="value">UTC-05:00</p>
          </div>
          <Divider type="solid" layout="vertical" />
        </li>

        <li>
          <div class="item l-flex">
            <p class="label">ISP</p>
            <p class="value">SpaceX Starlink</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss">
.container {
  position: relative;
  background-image: url('./assets/img/pattern-bg-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: hsla(240, 5%, 41%, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
  height: 18.7rem;

  img {
    width: 100%;
  }
}

@media (min-width: 600px) {
  .container {
    background-image: url('./assets/img/pattern-bg-desktop.png');
  }
}

.user-input {
  position: absolute;
  top: 1.7rem;
  left: 50%;
  width: 88%;
  max-width: 45rem;
  transform: translateX(-50%);
  row-gap: 1.7rem;

  .title {
    color: var(--neutral-white);
    font-size: var(--biggest-font-size);
    font-weight: var(--font-medium);
    line-height: 1.2;
  }

  .p-inputgroup {
    --input-button-br: 1rem;
    display: flex;
    width: 100%;

    .p-inputtext {
      font-family: var(--body-font);
      border-radius: var(--input-button-br) 0 0 var(--input-button-br);
      padding: 1.2rem;
      width: 100%;
      font-size: var(--small-font-size);
    }

    .p-button {
      background-color: var(--primary-black);
      border-color: var(--primary-very-dark-gray);
      border-radius: 0 var(--input-button-br) var(--input-button-br) 0;
      width: 4rem;

      &-icon {
        font-size: 0.8rem;
        font-weight: var(--font-bold);
      }
    }
  }
}

.network-info {
  position: absolute;
  bottom: -55%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--neutral-white);
  box-shadow: hsla(240, 5%, 41%, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 88%;
  row-gap: 1.5rem;

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
    }
  }

  .p-divider-solid.p-divider-vertical {
    display: none;
  }
}
</style>
