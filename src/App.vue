<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const className = ref('Chào mừng đến với WD19312')
const products = [
  {
    name: 'Sản phẩm 1',
    description: 'Mô tả sản phẩm 1, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
  {
    name: 'Sản phẩm 2',
    description: 'Mô tả sản phẩm 2, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
  {
    name: 'Sản phẩm 3',
    description: 'Mô tả sản phẩm 3, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
  {
    name: 'Sản phẩm 4',
    description: 'Mô tả sản phẩm 4, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
  {
    name: 'Sản phẩm 5',
    description: 'Mô tả sản phẩm 5, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
  {
    name: 'Sản phẩm 6',
    description: 'Mô tả sản phẩm 6, rất chất lượng và đáng mua.',
    price: 500000,
    image:
      'https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6.jpg',
  },
]
</script>

<!-- <template> -->
<!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      {{ className }}
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
<!-- <div class="container my-5">
    <div class="row g-4">
      <div class="col-md-4" v-for="product in products" :key="product.name">
        <div
          class="card h-100 shadow-lg border-0 rounded-lg overflow-hidden position-relative card-hover"
        >
          <div class="card-header bg-primary text-white text-center py-4">
            <h1 class="card-title fw-bold">FPT Shop</h1>
          </div>
          <div class="card-body text-center">
            <div class="product-image">
              <img
                :src="product.image"
                class="img-fluid my-3 rounded-circle border shadow-sm"
                style="width: 150px; height: 150px; object-fit: cover"
              />
            </div>
            <ul class="list-unstyled">
              <li>
                <h2 class="fw-semibold text-dark">{{ product.name }}</h2>
              </li>
              <li class="text-muted">{{ product.description }}</li>
            </ul>
            <div class="price-section">
              <h3 class="text-primary fw-bold">{{ product.price }} VND</h3>
            </div>
            <a href="#" class="btn btn-gradient mt-4 w-100 btn-lg">
              <i class="bi bi-cart"></i> Mua
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->

<!-- <RouterView /> -->
<template>
  <div class="product-list">
    <div v-for="(product, index) in products" :key="product.name">
      <div
        v-if="index % 2 === 0"
        style="display: flex; justify-content: flex-start"
      >
        <img style="width: 300px" :src="product.image" />
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Giá: {{ product.price }} VND</p>
        </div>
      </div>

      <div
        v-else
        style="display: flex; justify-content: flex-end"
        class="product-right"
      >
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Giá: {{ product.price }} VND</p>
        </div>
        <img style="width: 300px" :src="product.image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
