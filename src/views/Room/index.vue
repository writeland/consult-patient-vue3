<template>
  <div class="room-page">
    <cp-nav-bar title="问诊室" />
    <!-- 状态栏 -->
    <room-status />
    <!-- 问诊情况 -->
    <room-message v-for="item in list" :key="item.id" :item="item" />
    <!-- 操作栏 -->
    <room-action />
  </div>
</template>

<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
import { io, Socket } from 'socket.io-client'
import { onMounted, onUnmounted, ref } from 'vue'
import { baseURL } from '@/utils/request'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import type { Message, TimeMessages } from '@/types/room'
import { MsgType } from '@/enums'
import type { ConsultOrderItem } from '@/types/consult'
import { getConsultOrderDetail } from '@/services/consult'

const consult = ref<ConsultOrderItem>()
const loadConsult = async () => {
  const res = await getConsultOrderDetail(route.query.orderId as string)
  consult.value = res.data
}
const store = useUserStore()
const route = useRoute()
const list = ref<Message[]>([])
let socket: Socket
onMounted(() => {
  loadConsult()
  // 建立连接
  socket = io(baseURL, {
    auth: {
      token: `Bearer ${store.user?.token}`
    },
    query: {
      orderId: route.query.orderId
    }
  })

  socket.on('connect', () => {
    console.log('连接成功！')
  })

  socket.on('disconnect', () => {
    console.log('连接关闭！')
  })

  socket.on('error', () => {
    console.log('发生错误！')
  })
  // 获取聊天记录，如果是第一次获取默认消息
  socket.on('chatMsgList', ({ data }: { data: TimeMessages[] }) => {
    // data 数据 ===> [{createTime}, ...items]
    const arr: Message[] = []
    data.forEach((item) => {
      arr.push({
        msgType: MsgType.Notify,
        msg: {
          content: item.createTime
        },
        createTime: item.createTime,
        id: item.createTime
      })
      arr.push(...item.items)
    })
    list.value.unshift(...arr)
  })
  // console.log(list.value)
  // 监听订单状态的变化
  socket.on('statusChange', () => loadConsult())
})
onUnmounted(() => {
  socket.close()
})
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
