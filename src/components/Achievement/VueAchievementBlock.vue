<template>
  <div class="block_4_text_1">
    <img :src="img" alt="" />
    <span class="title">{{ message }}</span>
    <p class="text">
      {{ text }}
    </p>
    <a class="link" href="#">MORE</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  message: String,
  text: String,
  img: String
})
</script>

<style scoped>
.block_4_text_1 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 33px;
}

.title {
  text-transform: uppercase;
  color: #e84a90 !important;
  word-wrap: break-word;
  letter-spacing: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
}

.text {
  font-style: italic;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: #4c615a !important;
  word-wrap: break-word;
}
.link {
  color: #111111 !important;
  border-width: 1px;
  border-style: none none solid;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
}
</style>
