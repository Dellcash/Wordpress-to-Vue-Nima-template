<script setup>
import { useMainStore } from './stores/main';

const mainStore = useMainStore()

mainStore.getData()
</script>

<template>
  <Spinner v-if="mainStore.mainLoading" class="spinner " />
  <div v-else>
    <TheHeader />
    <!-- <RouterView /> -->
    <TheFooter />
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

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
}
</style>