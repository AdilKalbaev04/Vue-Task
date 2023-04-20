<template>
  <div class="cont">
    <RouterLink to="/card">
      <div class="text_cont">
        <h2>ALL TEXT</h2>
      </div>
    </RouterLink>
    <RouterLink to="/card_img">
      <div class="img_cont"><h2>ALL IMAGES</h2></div>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.cont {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 100dvh;
  background: rgb(24, 24, 38);
}
a {
  text-decoration: none;
  color: rgb(165, 165, 186);
}
.text_cont,
.img_cont {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  background: rgb(33, 33, 52);
  color: white;
  justify-content: center;
}
</style>
