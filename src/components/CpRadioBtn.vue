<!-- <template>
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

<style scoped lang="scss"></style> -->

<script setup lang="ts">
defineProps<{
  options: {
    label: string
    value: number | string
  }[]
  modelValue: number | string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
const toggleItem = (value: string | number) => {
  // 触发自定义事件把数据给父组件
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="cp-radio-btn">
    <a
      class="item"
      href="javascript:;"
      v-for="item in options"
      :key="item.value"
      :class="{ active: modelValue === item.value }"
      @click="toggleItem(item.value)"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.cp-radio-btn {
  display: flex;
  flex-wrap: wrap;
  .item {
    height: 32px;
    min-width: 60px;
    line-height: 30px;
    padding: 0 14px;
    text-align: center;
    border: 1px solid var(--cp-bg);
    background-color: var(--cp-bg);
    margin-right: 10px;
    box-sizing: border-box;
    color: var(--cp-text2);
    margin-bottom: 10px;
    border-radius: 4px;
    transition: all 0.3s;
    &.active {
      border-color: var(--cp-primary);
      background-color: var(--cp-plain);
    }
  }
}
</style>
