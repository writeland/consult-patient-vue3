<template>
  <div>{{ modelValue }}</div>
  <button @click="$emit('update:modelValue', modelValue + 1)">+1</button>
</template>

<script setup lang="ts">
// 计数器
// 通过v-model 解析成 modelValue @update:modelValue
defineProps<{
  modelValue: number
}>()

defineEmits<{
  (e: 'update:modelValue', count: number): void
}>()
</script>

<style scoped lang="scss"></style>
