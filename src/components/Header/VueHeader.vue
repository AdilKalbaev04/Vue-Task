<template>
  <header class="container">
    <div class="logo_cont">
      <img class="logo" src="../icons/logo.png" alt="" />
      <div class="icons_cont">
        <a href="#">
          <img class="icons" src="../icons/facebook.png" alt="" />
        </a>
        <a href="#">
          <img class="icons" src="../icons/twitter.png" alt="" />
        </a>
        <a href="#">
          <img class="icons" src="../icons/instagram.png" alt="" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
// import { defineProps, toRefs } from 'vue'
// const props = defineProps({
//   text: String
// })

// const { text } = toRefs(props)
</script>

<style scoped>
.container {
  max-width: 1506px;
  margin: 0 auto;
}
.icons {
  height: 26px;
  width: 26px;
}
.logo_cont {
  display: flex;
  max-width: 1152px;
  align-items: center;
  padding: 25px;
  margin: 0 auto;
  justify-content: space-between;
}
.icons_cont {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
