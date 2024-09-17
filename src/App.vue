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

    <van-button @click="getUser">获取用户信息</van-button>
    <van-button @click="login">接口登录</van-button>
  </div>
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue'
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import { request } from './utils/request'
import type { User } from './types/user'

const store = useUserStore()

const getUser = async () => {
  request('/patient/myUser', 'get', { test: 1 })
  // console.log(res)
}

const login = async () => {
  let res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    password: 'abc12345'
  })
  console.log(res)
}
</script>

<style scoped lang="scss"></style>
