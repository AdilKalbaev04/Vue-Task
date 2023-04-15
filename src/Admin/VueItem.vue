<template>
  <div class="cont">
    <a href="/card">
      <div class="text_cont">
        <h2>ALL TEXT</h2>
      </div>
    </a>
    <a href="/card_img">
      <div class="img_cont"><h2>ALL IMAGES</h2></div>
    </a>
  </div>
</template>

<script setup></script>

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
}
.text_cont,
.img_cont {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  background: rgb(123, 121, 255);
  color: white;
  justify-content: center;
}
</style>
