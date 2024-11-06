<template>
  <div>
    <table class="container">
      <thead>
        <tr>
          <th scope="col">Stt</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <img :src="product.image" alt="" style="width: 120px" />
          </td>
          <td>
            <button class="btn btn-primary" @click="editProduct(index)">
              Sửa
            </button>
            <button class="btn btn-warning" @click="deleteProduct(index)">
              Xoá
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      products: [
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
      ],
    }
  },
  methods: {
    deleteProduct(index) {
      if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
        this.products.splice(index, 1)
      }
    },
    editProduct(index) {
      alert(`Sửa sản phẩm ${this.products[index].name}`)
    },
  },
}
</script>
<!-- <template>
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
          <button
            type="submit"
            class="btn btn-primary"
            onclick="confirm('Hello World!')"
          >
            Sửa
          </button>
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
          <button
            type="submit"
            class="btn btn-danger"
            onclick="confirm('Hello World!')"
          >
            Sửa
          </button>
        </div>
        <img style="width: 300px" :src="product.image" />
      </div>
    </div>
  </div>
</template> -->

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
