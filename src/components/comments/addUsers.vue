<script setup lang="ts">
import { ref } from 'vue'
import userApi from '@/service/userApi/userApi'

// State
const newUser = ref({ name: '', email: '', hometown: '', date: '' })

// Hàm thêm người dùng
const addUser = async () => {
  // Kiểm tra thông tin nhập
  if (
    !newUser.value.name ||
    !newUser.value.email ||
    !newUser.value.hometown ||
    !newUser.value.date
  ) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  // Kiểm tra định dạng email
  if (!newUser.value.email.includes('@')) {
    alert('Email không hợp lệ! Vui lòng nhập email có ký tự "@"')
    return
  }

  try {
    // Lấy danh sách người dùng để kiểm tra email trùng
    const { data: users } = await userApi.getListUser()
    const emailExists = users.some(user => user.email === newUser.value.email)

    if (emailExists) {
      alert('Email đã tồn tại trong hệ thống, vui lòng sử dụng email khác.')
      return
    }

    // Thêm người dùng mới
    const { data } = await userApi.addUser(newUser.value)
    alert('Đã thêm người dùng thành công!')

    // Reset form
    newUser.value = { name: '', email: '', hometown: '', date: '' }

    // Phát sự kiện để cập nhật danh sách
    emit('user-added', data)
  } catch (error) {
    console.error('Lỗi:', error)
    alert('Đã xảy ra lỗi, vui lòng thử lại.')
  }
}
</script>

<template>
  <div class="mb-3">
    <h3>Thêm Người Dùng</h3>
    <input v-model="newUser.name" placeholder="Tên" class="form-control mb-2" />
    <input
      v-model="newUser.email"
      placeholder="Email"
      class="form-control mb-2"
    />
    <input
      v-model="newUser.hometown"
      placeholder="Quê quán"
      class="form-control mb-2"
    />
    <input
      v-model="newUser.date"
      type="date"
      placeholder="Ngày sinh"
      class="form-control mb-2"
    />
    <button @click="addUser" class="btn btn-success">Thêm</button>
  </div>
</template>
