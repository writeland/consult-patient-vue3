<template>
  <van-nav-bar
    fixed
    left-arrow
    :title="title"
    :right-text="rightText"
    @click-right="onClickRight"
  ></van-nav-bar>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  rightText?: string
}>()

const emit = defineEmits<{
  (e: 'click-right'): void
}>()

const onClickRight = () => {
  emit('click-right')
}
</script>
<style scoped lang="scss">
:deep() {
  .van-nav-bar {
    &__arrow {
      color: var(--cp-text1);
      font-size: 18px;
    }
    &__title {
      font-size: 15px;
    }
  }
}
</style>
