<template>
  <div class="container">
    <h1 class="title">Quản lý khách hàng</h1>
    <form @submit.prevent="addCustomer" class="form">
      <div class="form-group">
        <label for="name">Tên khách hàng</label>
        <input
          id="name"
          v-model="newCustomer.name"
          placeholder="Nhập tên khách hàng"
          class="input"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="phone">Số điện thoại</label>
        <input
          id="phone"
          v-model="newCustomer.phone"
          placeholder="Nhập số điện thoại"
          class="input"
          type="text"
        />
      </div>
      <button type="submit" class="btn btn-add">Thêm khách hàng</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên khách hàng</th>
          <th>Số điện thoại</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const newCustomer = ref({ name: '', phone: '' })
    const customers = ref([
      { name: 'Nguyễn Văn A', phone: '0901234567' },
      { name: 'Trần Thị B', phone: '0987654321' },
    ])

    const addCustomer = () => {
      if (newCustomer.value.name.trim() && newCustomer.value.phone.trim()) {
        customers.value.push({ ...newCustomer.value })
        newCustomer.value = { name: '', phone: '' }
      } else {
        alert('Vui lòng nhập đầy đủ thông tin khách hàng.')
      }
    }

    return {
      newCustomer,
      customers,
      addCustomer,
    }
  },
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  background-color: #007bff;
  color: #fff;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.btn-add {
  background-color: #28a745;
  color: #fff;
}

.btn-add:hover {
  background-color: #218838;
}
</style>
