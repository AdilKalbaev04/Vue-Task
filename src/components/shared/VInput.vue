<template>
  <div>
    <textarea
      v-model="value"
      class="input"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
    ></textarea>
    <input
      v-else
      v-model="value"
      class="input"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    validator(value) {
      const types = ['email', 'search', 'password', 'textarea']
      if (types.includes(value)) {
        return value
      }
      return 'text'
    },
    default: 'text'
  }
})

const emits = defineEmits(['updata:modelValue'])
const value = ref(props.modelValue)

watch(value, () => {
  emits('updata:modelValue', value)
})
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
