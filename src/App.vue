<script setup lang="ts">
import { ref } from 'vue'

// Import các component
import listUsers from './components/comments/addUsers.vue'
import addUsers from './components/comments/index.vue'
import home from './components/comments/home.vue'

// Theo dõi trạng thái chức năng hiện tại
const currentView = ref('home')

const changeView = (view: string) => {
  currentView.value = view
}
</script>

<template>
  <div class="container-fluid">
    <header class="header">
      <h1 class="header-title">Admin Người Dùng</h1>
    </header>

    <nav class="navbar">
      <button class="nav-button" @click="changeView('home')">Trang chủ</button>
      <button class="nav-button" @click="changeView('listUsers')">
        Thêm người dùng
      </button>
      <button class="nav-button" @click="changeView('addUsers')">
        Xoá người dùng
      </button>
    </nav>

    <main class="main-content">
      <listUsers v-if="currentView === 'listUsers'" />
      <addUsers v-if="currentView === 'addUsers'" />
      <home v-if="currentView === 'home'" />
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fa;
  margin: 0;
  padding: 0;
}

.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background-color: #343a40;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-title {
  text-align: center;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.nav-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.nav-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  max-width: 1000px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}
</style>
