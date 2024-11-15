<script setup lang="ts">
import { ref } from 'vue'

const submitForm = async () => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))

  if (
    sanPhamMoi.value.email === 'anhntph51526@gmail.com' &&
    sanPhamMoi.value.password === '123456'
  ) {
    alert('Đăng nhập thành công')
    users.value.push({ ...sanPhamMoi.value })
    sanPhamMoi.value.email = ''
    sanPhamMoi.value.password = ''
  } else {
    alert('Đăng nhập thất bại')
  }

  isLoading.value = false
}

const sanPhamMoi = ref({
  email: '',
  password: '',
})

const users = ref([])

const deleteUser = key => {
  users.value[key].deleted = true
}
const isLoading = ref(false)
</script>

<template>
  <div class="form-container position-relative">
    <div
      v-if="isLoading"
      class="overlay d-flex justify-content-center align-items-center"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <form
      class="container p-4 bg-light rounded shadow-sm"
      @submit.prevent="submitForm"
      :class="{ 'opacity-50': isLoading }"
    >
      <h1 class="text-center">Đăng nhập</h1>
      <div class="mb-3">
        <label for="username" class="form-label">Tên đăng nhập</label>
        <input
          v-model="sanPhamMoi.email"
          type="email"
          class="form-control"
          id="username"
          :disabled="isLoading"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="sanPhamMoi.password"
          type="password"
          class="form-control"
          id="password"
          :disabled="isLoading"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary shadow-lg text-uppercase fw-bold"
        :disabled="isLoading"
      >
        Submit
      </button>
    </form>
  </div>

  <table class="table" border="1" style="margin-top: 50px">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Tên đăng nhập</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, key) in users"
        :key="key"
        :class="{ 'text-decoration-line-through': user.deleted }"
      >
        <th scope="row">{{ key + 1 }}</th>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td>
          <button
            @click="deleteUser(key)"
            class="btn btn-danger"
            :class="{ 'text-decoration-line-through': user.deleted }"
          >
            Xoá
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
}

.opacity-50 {
  pointer-events: none; /* Vô hiệu hóa các phần tử bên trong */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
