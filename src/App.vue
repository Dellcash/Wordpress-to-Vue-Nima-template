<template>
  <TheHeader />
  <RouterView />
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
</style>