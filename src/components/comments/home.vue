<script setup lang="ts">
import { ref, onMounted } from 'vue'
import userApi from '@/service/userApi/userApi'

const Listuser = ref([])
const newUser = ref({ name: '', email: '', hometown: '', date: '' })

// hiển thị ra danh sách user
const getData = async () => {
  try {
    const { data } = await userApi.getListUser()
    Listuser.value = data
  } catch (error) {
    console.error('Lỗi khi lấy danh sách:', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <h2>Quản Lý Người Dùng</h2>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Quê quán</th>
          <th>Ngày sinh</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in Listuser">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.hometown }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
