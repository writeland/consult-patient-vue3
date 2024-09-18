<template>
  <van-nav-bar fixed left-arrow title="登录" right-text="注册"></van-nav-bar>
</template>

<script setup lang="ts"></script>

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
