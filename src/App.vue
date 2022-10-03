<script setup>
import { useMainStore } from './stores/main';

const mainStore = useMainStore()

mainStore.getData()
</script>

<template>
  <div v-if="mainStore.mainLoading" text-5xl>Loading</div>
  <div v-else>
    <TheHeader />
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: "IRANSans";
  src: url("./fonts/FontsFree-Net-ir_sans.ttf");
}

* {
  font-family: "IRANSans";
}

body {
  background-color: rgb(245, 245, 245);
  color: #616161
}

button:focus {
  outline: none;
}
</style>