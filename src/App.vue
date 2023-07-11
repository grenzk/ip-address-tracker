<script setup>
import { onBeforeMount, ref } from 'vue'
import { useForm } from 'vee-validate'
import { useToast } from 'primevue/usetoast'
import Axios from 'axios'
import * as Yup from 'yup'

import { API_KEY, API_ENDPOINT } from '@/config'

import { MapView, GeolocationItem } from '@/components'

const toast = useToast()
const geolocationData = ref(null)

const schema = Yup.object({ ipAddress: Yup.string().trim().required().label('IP address') })
const { defineComponentBinds, handleSubmit, resetForm } = useForm({
  validationSchema: schema
})
const ipAddress = defineComponentBinds('ipAddress')

const showMessage = (message) => {
  const newMessage = message.replace(' or IPv6', '')

  toast.add({ severity: 'error', summary: 'Error', detail: newMessage, life: 3000 })
}

onBeforeMount(() => {
  const cachedResponse = localStorage.getItem('cachedResponse')

  if (cachedResponse) {
    geolocationData.value = JSON.parse(cachedResponse)
  }
})

const fetchGeolocationData = async (input) => {
  try {
    const response = await Axios.get(API_ENDPOINT, {
      params: {
        apiKey: API_KEY,
        ipAddress: input
      }
    })
    geolocationData.value = response.data
    localStorage.setItem('cachedResponse', JSON.stringify(response.data))
  } catch (error) {
    showMessage(error.response.data.messages)
  }
}

const onSubmit = handleSubmit((values) => {
  fetchGeolocationData(values.ipAddress)
  resetForm()
})
</script>

<template>
  <Toast position="bottom-center" />
  <main>
    <div class="container">
      <div class="user-input l-flex">
        <h1 class="title">IP Address Tracker</h1>

        <form @submit="onSubmit">
          <div class="p-inputgroup">
            <InputText
              v-bind="ipAddress"
              aria-describedby="ipAddress-help"
              placeholder="Search for any IP address or domain"
            />
            <Button icon="pi pi-chevron-right" severity="secondary" type="submit" />
          </div>
        </form>
      </div>

      <ul class="network-info l-flex" role="list">
        <GeolocationItem
          label="IP Address"
          :value="geolocationData?.ip"
          default-value="192.212.174.101"
        />
        <GeolocationItem
          label="Location"
          :value="
            geolocationData
              ? `${geolocationData.location.region}, ${geolocationData.location.city}`
              : ''
          "
          default-value="Brooklyn, NY 10001"
        />
        <GeolocationItem
          label="Timezone"
          :value="geolocationData ? `UTC${geolocationData.location.timezone}` : ''"
          default-value="UTC-05:00"
        />
        <GeolocationItem
          label="ISP"
          :value="geolocationData?.isp"
          default-value="SpaceX Starlink"
        />
      </ul>
    </div>
    <MapView :location="geolocationData?.location" />
  </main>
</template>

<style lang="scss">
.container {
  position: relative;
  background-image: url('./assets/img/pattern-bg-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: hsla(240, 5%, 41%, 0.4) 0rem 0.4375rem 1.8125rem 0rem;
  height: 18.7rem;
  z-index: 1;
}

@media (min-width: 600px) {
  .container {
    background-image: url('./assets/img/pattern-bg-desktop.png');
  }
}

.p-toast {
  width: 22rem !important;

  .p-toast-icon-close {
    border: none;
  }
}

.user-input,
.network-info {
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
}

form {
  width: 100%;
}

.user-input {
  top: 1.7rem;
  left: 50%;
  width: 88%;
  max-width: 45rem;
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
  bottom: -55%;
  left: 50%;
  background-color: var(--neutral-white);
  box-shadow: hsla(240, 5%, 41%, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 88%;
  max-width: 100rem;
  row-gap: 1.5rem;
}
</style>
