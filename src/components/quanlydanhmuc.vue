<template>
  <div class="category-manager">
    <h1>Quản lý danh mục</h1>
    <form @submit.prevent="addOrUpdateCategory" class="form">
      <div class="form-group">
        <label for="name">Tên danh mục:</label>
        <input
          id="name"
          v-model="newCategory.name"
          placeholder="Nhập tên danh mục"
          class="input"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ isEdit ? 'Cập nhật danh mục' : '+ Thêm danh mục' }}
      </button>
    </form>

    <ul class="category-list">
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="category-item"
      >
        <span class="category-info">
          {{ category.name }}
        </span>
        <div class="action-buttons">
          <button @click="editCategory(index)" class="btn btn-edit">Sửa</button>
          <button @click="removeCategory(index)" class="btn btn-delete">
            Xóa
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const newCategory = ref({ name: '' })
    const categories = ref<{ name: string }[]>([])
    const isEdit = ref(false)
    const editIndex = ref<number | null>(null)

    const addOrUpdateCategory = () => {
      if (newCategory.value.name.trim()) {
        if (isEdit.value && editIndex.value !== null) {
          categories.value[editIndex.value] = { ...newCategory.value }
        } else {
          categories.value.push({ ...newCategory.value })
        }
        resetForm()
      }
    }

    const resetForm = () => {
      newCategory.value = { name: '' }
      isEdit.value = false
      editIndex.value = null
    }

    const removeCategory = (index: number) => {
      categories.value.splice(index, 1)
    }

    const editCategory = (index: number) => {
      newCategory.value = { ...categories.value[index] }
      isEdit.value = true
      editIndex.value = index
    }

    return {
      newCategory,
      categories,
      addOrUpdateCategory,
      removeCategory,
      editCategory,
      isEdit,
    }
  },
})
</script>

<style scoped>
/* Tổng thể */
/* Tổng thể */
.category-manager {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

/* Form */
.form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Nút thêm danh mục (cập nhật lại kích thước) */
.btn {
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 8px 16px; /* Giảm padding để nút nhỏ hơn */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px; /* Giảm kích thước font */
  text-align: center;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.btn:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.btn-edit {
  background-color: #007bff;
}

.btn-edit:hover {
  background-color: #0056b3;
}

.btn-delete {
  background-color: #dc3545;
}

.btn-delete:hover {
  background-color: #c82333;
}

/* Danh sách danh mục */
.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.category-info {
  font-size: 16px;
  color: #333;
}

.action-buttons button {
  margin-left: 10px;
}
</style>
