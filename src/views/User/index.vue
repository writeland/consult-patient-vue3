<template>
  <div class="user-page">user</div>
</template>

<script setup lang="ts">
import type { UserInfo } from '@/types/user'
import { ref } from 'vue'
const userInfo = ref<UserInfo>()
</script>

<style scoped></style>
