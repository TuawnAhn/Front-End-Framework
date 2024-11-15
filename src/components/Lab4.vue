<script setup lang="ts">
import { ref } from 'vue'

const sanPhamMoi = ref({
  email: '',
  password: '',
})

const validateEmail = (email: string) => {
  const checkemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
  return checkemail.test(email)
}

const validatePassword = (password: string) => {
  if (password.length < 8) {
    alert('Mật khẩu phải có ít nhất 8 ký tự.')
    return false
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert('Mật khẩu phải chứa ít nhất một ký tự đặc biệt.')
    return false
  }
  if (!/[A-Z]/.test(password)) {
    alert('Mật khẩu phải chứa ít nhất một chữ cái in hoa.')
    return false
  }
  if (!/[a-z]/.test(password)) {
    alert('Mật khẩu phải chứa ít nhất một chữ cái thường.')
    return false
  }
  return true
}

const submitForm = () => {
  const { email, password } = sanPhamMoi.value

  if (!validateEmail(email)) {
    alert('Email không hợp lệ! Vui lòng sử dụng địa chỉ @gmail.com.')
    return
  }

  if (!validatePassword(password)) {
    return
  }

  if (email && password === 'Tuananh123@') {
    alert('Đăng nhập thành công')
    users.value.push({ ...sanPhamMoi.value })
    sanPhamMoi.value.email = ''
    sanPhamMoi.value.password = ''
  } else {
    alert('Đăng nhập thất bại')
  }
}
</script>

<template>
  <div
    class="form-container position-relative d-flex justify-content-center align-items-center vh-100"
  >
    <form class="form-box p-4 rounded shadow-sm" @submit.prevent="submitForm">
      <h1 class="text-center mb-4">Đăng nhập</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>

        <input
          v-model="sanPhamMoi.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Nhập vào email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>

        <input
          v-model="sanPhamMoi.password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button type="submit" class="btn btn-warning w-100 fw-bold">
        Đăng nhập
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  /* background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzC43eJg6NMPQTOpXXpXti8MoFLDWsEJVtFw&s'); */
}

.form-box {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  background: url('https://png.pngtree.com/thumb_back/fh260/background/20210920/pngtree-colorful-rainbow-pattern-background-design-image_904419.png');
}

.form-label {
  font-size: 14px;
  font-weight: 500;
}

input::placeholder {
  font-size: 12px;
  color: #aaa;
}

button {
  margin-top: 10px;
  padding: 10px;
}
.form-control {
  background: url('https://media.istockphoto.com/id/1361472307/vi/anh/n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng-m%E1%BB%9D-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng.jpg?s=612x612&w=0&k=20&c=aiKMTyourj78LkVv45SyykpcL5oneBevrtLdyHvwGIc=');
}
.form-control::placeholder {
  color: black;
}

.vh-100 {
  height: 100vh;
}
</style>
