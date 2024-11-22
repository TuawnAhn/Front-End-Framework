<template>
  <div class="product-manager">
    <h1>Quản lý sản phẩm</h1>

    <button @click="toggleForm" class="btn">
      {{ showForm ? 'Đóng biểu mẫu' : '+ Thêm sản phẩm mới' }}
    </button>

    <form v-if="showForm" @submit.prevent="addOrUpdateProduct" class="form">
      <div class="form-group">
        <label for="name">Tên sản phẩm:</label>
        <input
          id="name"
          v-model="newProduct.name"
          placeholder="Tên sản phẩm"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="price">Giá:</label>
        <input
          id="price"
          v-model.number="newProduct.price"
          placeholder="Giá sản phẩm"
          type="number"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="image">Ảnh sản phẩm:</label>
        <input
          id="image"
          type="file"
          @change="handleImageUpload"
          class="input"
        />
      </div>
      <button type="submit" class="btn">
        {{ isEdit ? 'Cập nhật' : 'Thêm sản phẩm' }}
      </button>
    </form>

    <table class="product-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Giá (đ)</th>
          <th>Ảnh</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price.toLocaleString('vi-VN') }}</td>
          <td>
            <img
              :src="product.image"
              alt="Product Image"
              width="50"
              height="50"
            />
          </td>
          <td>
            <button @click="editProduct(index)" class="btn btn-edit">
              Sửa
            </button>
            <button @click="removeProduct(index)" class="btn btn-delete">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const newProduct = ref({ name: '', price: 0, image: '' })
    const products = ref<{ name: string; price: number; image: string }[]>([])
    const isEdit = ref(false)
    const editIndex = ref<number | null>(null)
    const showForm = ref(false)

    const toggleForm = () => {
      showForm.value = !showForm.value
      if (!showForm.value) resetForm()
    }

    const handleImageUpload = (event: Event) => {
      const fileInput = event.target as HTMLInputElement
      const file = fileInput?.files ? fileInput.files[0] : null
      if (file) {
        // You can handle the file upload here and set the file path or URL
        newProduct.value.image = URL.createObjectURL(file)
      }
    }

    const addOrUpdateProduct = () => {
      if (newProduct.value.name && newProduct.value.price > 0) {
        if (isEdit.value && editIndex.value !== null) {
          products.value[editIndex.value] = { ...newProduct.value }
        } else {
          products.value.push({ ...newProduct.value })
        }
        resetForm()
      }
    }

    const removeProduct = (index: number) => {
      products.value.splice(index, 1)
    }

    const editProduct = (index: number) => {
      newProduct.value = { ...products.value[index] }
      isEdit.value = true
      editIndex.value = index
      showForm.value = true
    }

    const resetForm = () => {
      newProduct.value = { name: '', price: 0, image: '' }
      isEdit.value = false
      editIndex.value = null
    }

    return {
      newProduct,
      products,
      addOrUpdateProduct,
      removeProduct,
      editProduct,
      toggleForm,
      showForm,
      isEdit,
      handleImageUpload,
    }
  },
})
</script>

<style scoped>
.product-manager {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
  border-radius: 16px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.05),
    0 4px 10px rgba(0, 0, 0, 0.02);
  border: 1px solid #eaeaea;
}

h1 {
  text-align: center;
  font-size: 36px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 30px;
  position: relative;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #4caf50, #2196f3);
  border-radius: 4px;
}

.form {
  margin-bottom: 30px;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.05),
    0 2px 5px rgba(0, 0, 0, 0.02);
  border: 1px solid #e0e0e0;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
  outline: none;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.btn:focus {
  outline: none;
}

.btn-update {
  background-color: #4caf50;
  color: #fff;
}

.btn-update:hover {
  background-color: #45a049;
}

.btn-edit {
  background-color: #2196f3;
  color: white;
}

.btn-edit:hover {
  background-color: #1976d2;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.btn-delete:hover {
  background-color: #d32f2f;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
}

thead {
  background: linear-gradient(45deg, #4caf50, #2196f3);
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

tbody tr {
  transition: all 0.3s ease;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

@media screen and (max-width: 768px) {
  .product-manager {
    padding: 15px;
  }

  .form {
    padding: 15px;
  }

  .product-table {
    font-size: 14px;
  }

  th,
  td {
    padding: 10px;
  }
}
</style>
