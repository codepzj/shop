<template>
  <div v-if="userData !== null">
    <h1>用户信息</h1>
    <p>用户ID: {{ userData.userId }}</p>
    <p>用户名: {{ userData.userName }}</p>
    <p>年龄: {{ userData.userAge }}</p>
    <p>邮箱: {{ userData.userEmail }}</p>
  </div>
  <div v-else>
    <p>加载中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const userData = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('/api/user')
    console.log(response.data) // 检查数据结构
    userData.value = response.data
  } catch (error) {
    console.error('请求失败:', error)
  }
})
</script>
