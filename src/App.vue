<script setup></script>

<template>
  <main>
    <div class="container">
      <picture>
        <source srcset="@/assets/img/pattern-bg-desktop.png" media="(min-width: 600px)" />
        <img src="@/assets/img/pattern-bg-mobile.png" />
      </picture>

      <div class="user-input">
        <h1 class="title">IP Address Tracker</h1>
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

  .user-input {
    position: absolute;

    top: 1.7rem;
    left: 50%;
    width: 100%;
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
  }
}
</style>
