<script setup lang="ts">
import { ref } from 'vue'
import KnowledgeCard from './KnowledgeCard.vue'

const list = ref<number[]>([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  // 加载数据
  console.log('loading')
  // 模拟加载更多
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5]
    list.value.push(...data)
    console.log(list)
    // 模拟加载完毕
    if (list.value.length > 20) {
      finished.value = true
    }
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <knowledge-card v-for="(item, i) in list" :key="i"></knowledge-card>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
  padding: 0 15px;
}
</style>
