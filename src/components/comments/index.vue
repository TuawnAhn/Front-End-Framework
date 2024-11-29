<script setup lang="ts">
import { ref, onMounted } from 'vue'
import userApi from '@/service/userApi/userApi'

// Danh sách người dùng
const Listuser = ref([])

// Người dùng đang chỉnh sửa
const editingUser = ref({
  id: '',
  name: '',
  hometown: '',
  date: '',
  email: '',
})

// Trạng thái chỉnh sửa
const isEditing = ref(false)

// Lấy danh sách người dùng
const getData = async () => {
  try {
    const { data } = await userApi.getListUser()
    Listuser.value = data
  } catch (error) {
    console.error('Lỗi khi lấy danh sách:', error)
  }
}

// Xóa người dùng
const deleteUser = async (id: string) => {
  if (confirm('Bạn có chắc chắn muốn xóa người dùng này không?')) {
    try {
      await userApi.deleteUser(id)
      Listuser.value = Listuser.value.filter(user => user.id !== id)
      alert('Xóa người dùng thành công!')
    } catch (error) {
      console.error('Lỗi khi xóa người dùng:', error)
    }
  }
}

// Bắt đầu chỉnh sửa người dùng
const startEdit = (user: {
  id: string
  name: string
  hometown: string
  date: string
  email: string
}) => {
  editingUser.value = { ...user } // Gán thông tin người dùng vào form chỉnh sửa
  isEditing.value = true
}

// Lưu chỉnh sửa
const saveEdit = async () => {
  if (
    !editingUser.value.name ||
    !editingUser.value.hometown ||
    !editingUser.value.date ||
    !editingUser.value.email
  ) {
    alert('Vui lòng nhập đầy đủ thông tin!')
    return
  }

  try {
    const { id, ...updatedData } = editingUser.value
    await userApi.updateUser(id, updatedData)
    const index = Listuser.value.findIndex(user => user.id === id)
    if (index !== -1) {
      Listuser.value[index] = { ...editingUser.value } // Cập nhật danh sách hiển thị
    }
    alert('Cập nhật người dùng thành công!')
    cancelEdit()
  } catch (error) {
    console.error('Lỗi khi cập nhật:', error)
    alert('Đã xảy ra lỗi khi cập nhật người dùng.')
  }
}

// Hủy chỉnh sửa
const cancelEdit = () => {
  editingUser.value = {
    id: '',
    name: '',
    hometown: '',
    date: '',
    email: '',
  }
  isEditing.value = false
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <h2>Quản lý Người Dùng</h2>

    <!-- Form chỉnh sửa -->
    <div v-if="isEditing" class="mb-4">
      <h3>Chỉnh sửa Người Dùng</h3>
      <form @submit.prevent="saveEdit">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input
            type="text"
            id="name"
            v-model="editingUser.name"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="hometown">Quê quán:</label>
          <input
            type="text"
            id="hometown"
            v-model="editingUser.hometown"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="date">Ngày sinh:</label>
          <input
            type="date"
            id="date"
            v-model="editingUser.date"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="editingUser.email"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-success mt-2">Lưu</button>
        <button
          type="button"
          class="btn btn-secondary mt-2 ms-2"
          @click="cancelEdit"
        >
          Hủy
        </button>
      </form>
    </div>

    <!-- Danh sách người dùng -->
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Quê quán</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in Listuser" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.hometown }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="startEdit(user)" class="btn btn-warning btn-sm">
              Sửa
            </button>
            <button
              @click="deleteUser(user.id)"
              class="btn btn-danger btn-sm ms-2"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
