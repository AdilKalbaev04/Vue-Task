<template>
  <div>
    <!-- <textarea
      v-model="value"
      class="input"
      :placeholder="placeholder"
      type ='textarea'
      :name="name"
    ></textarea> -->
    <input
      :type="type"
      class="input"
      @input="onInput"
      :value="modelValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  color: #111111;
  background-color: #f2f2f2;
  background-clip: padding-box;
  border: none;
  border-radius: 3px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: inherit;
  height: auto;
}
</style>
