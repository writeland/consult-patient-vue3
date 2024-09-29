<script setup lang="ts">
import type { ConsultType } from '@/enums'
import { getConsultOrderList } from '@/services/consult'
import type { ConsultOrderItem, ConsultOrderListParams } from '@/types/consult'
import ConsultItem from '@/views/User/components/ConsultItem.vue'
import { ref } from 'vue'

const props = defineProps<{
  type: ConsultType
}>()
const list = ref<ConsultOrderItem[]>([])
const loading = ref(false)
const finished = ref(false)
const params = ref<ConsultOrderListParams>({
  type: props.type,
  current: 1,
  pageSize: 5
})

const onLoad = async () => {
  const res = await getConsultOrderList(params.value)
  list.value.push(...res.data.rows)
  if (params.value.current < res.data.pageTotal) {
    params.value.current++
  } else {
    finished.value = true
  }
  loading.value = false
}
</script>

<template>
  <div class="consult-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <consult-item
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></consult-item>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.consult-list {
  padding: 10px 15px;
}
</style>
