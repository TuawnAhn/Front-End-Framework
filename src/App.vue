<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <ul class="menu">
          <li
            v-for="item in menuItems"
            :key="item.name"
            @click="setActivePage(item.page)"
            :class="{ active: activePage === item.page }"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <component :is="activePage"></component>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import QuanLySanPham from './components/Quanlysanpham.vue'
import QuanLyDonHang from './components/Quanlydonhang.vue'
import QuanLyKhachHang from './components/Quanlykhachhang.vue'
import QuanLyDanhMuc from './components/quanlydanhmuc.vue'
import ThongKe from './components/Thongke.vue'

export default defineComponent({
  components: {
    QuanLySanPham,
    QuanLyDonHang,
    QuanLyKhachHang,
    QuanLyDanhMuc,
    ThongKe,
  },
  setup() {
    const menuItems = ref([
      { name: 'Quản lý sản phẩm', page: 'QuanLySanPham' },
      { name: 'Quản lý đơn hàng', page: 'QuanLyDonHang' },
      { name: 'Quản lý khách hàng', page: 'QuanLyKhachHang' },
      { name: 'Quản lý danh mục', page: 'QuanLyDanhMuc' },
      { name: 'Thống kê', page: 'ThongKe' },
    ])

    const activePage = ref('QuanLySanPham')

    const setActivePage = (page: string) => {
      activePage.value = page
    }

    return { menuItems, activePage, setActivePage }
  },
})
</script>

<style scoped>
/* Header Styles */
.header {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: center;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.menu li {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.menu li:hover {
  background-color: #0056b3;
}

.menu li.active {
  background-color: #0056b3;
  font-weight: bold;
}

/* Main Content */
.content {
  padding: 20px;
}
</style>
