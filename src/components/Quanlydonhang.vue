<template>
  <div class="container">
    <h1 class="title">Quản lý đơn hàng</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Người dùng</th>
          <th>Họ tên người nhận</th>
          <th>Số điện thoại</th>
          <th>Trạng thái</th>
          <th>Tổng tiền</th>
          <th>Phương thức thanh toán</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <!-- Danh sách đơn hàng -->
        <tr v-for="(order, index) in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.userId }}</td>
          <td>{{ order.recipientName }}</td>
          <td>{{ order.phoneNumber }}</td>
          <td>
            <select v-model="order.status" class="select">
              <option value="Chờ xác nhận">Chờ xác nhận</option>
              <option value="Đang giao">Đang giao</option>
              <option value="Hoàn thành">Hoàn thành</option>
            </select>
          </td>
          <td>{{ order.totalAmount.toLocaleString('vi-VN') }} đ</td>
          <td>{{ order.paymentMethod }}</td>
          <td>
            <button class="btn btn-update" @click="updateStatus(index)">
              Cập nhật
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
    // Danh sách đơn hàng
    const orders = ref([
      {
        id: 1,
        userId: 101,
        recipientName: 'Nguyễn Văn A',
        phoneNumber: '0901234567',
        status: 'Chờ xác nhận',
        totalAmount: 150000,
        paymentMethod: 'Thanh toán khi nhận hàng',
      },
      {
        id: 2,
        userId: 102,
        recipientName: 'Trần Thị B',
        phoneNumber: '0912345678',
        status: 'Đang giao',
        totalAmount: 200000,
        paymentMethod: 'Chuyển khoản ngân hàng',
      },
    ])

    // Cập nhật trạng thái đơn hàng
    const updateStatus = (index: number) => {
      alert(
        `Đơn hàng #${orders.value[index].id} được cập nhật trạng thái: ${orders.value[index].status}`,
      )
    }

    return {
      orders,
      updateStatus,
    }
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 25px;
  position: relative;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #3498db;
}

table {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

thead {
  background-color: #3498db;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
}

tbody tr {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

tbody tr:hover {
  background-color: #f7f9fc;
}

.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #f8f9fa;
  font-size: 14px;
  transition: all 0.3s ease;
}

.select:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-update {
  background-color: #3498db;
  color: white;
}

.btn-update:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .container {
    padding: 15px;
    margin: 15px;
  }

  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 10px;
  }
}
</style>
