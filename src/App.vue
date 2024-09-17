<template>
  <div>
    <vant-button @click="clickBtn" type="danger">按钮</vant-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button as VantButton } from 'vant'

const clickBtn = () => {
  alert('Click')
}
// a = 21
</script>

<style scoped></style>
