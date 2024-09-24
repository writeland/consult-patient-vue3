<template>
  <div class="room-page">
    <cp-nav-bar title="问诊室" />
    <!-- 状态栏 -->
    <room-status />
    <!-- 问诊情况 -->
    <room-message />
    <!-- 操作栏 -->
    <room-action />
  </div>
</template>

<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
</script>

<style scoped lang="scss">
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>
