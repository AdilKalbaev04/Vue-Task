<template>
  <button :class="{ btn_default: isActive }">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue'
const isActive = ref(true)
</script>

<style scoped>
.btn_default {
  color: #ffffff;
  cursor: pointer;
  background-color: #e84a90;
  border-radius: 50px;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  border-style: none;
  padding: 14px 32px 15px;
}
</style>
