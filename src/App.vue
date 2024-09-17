<template>
  <div>
    {{ store.user }}
    <van-button
      @click="
        store.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '2222'
        })
      "
      type="primary"
      >登录</van-button
    >
    <van-button @click="store.delUser" type="primary">退出</van-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'

const store = useUserStore()
</script>

<style scoped lang="scss"></style>
