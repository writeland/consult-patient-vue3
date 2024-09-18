<template>
  <cp-nav-bar title="登录" rightText="注册" @click-right="fn"></cp-nav-bar>
  <van-button>登录</van-button>
  <van-checkbox>付现款</van-checkbox>
</template>

<script setup lang="ts">
const fn = () => {
  alert(111)
}
</script>

<style scoped></style>
