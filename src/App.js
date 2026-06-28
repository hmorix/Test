// frontend/src/App.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './styles/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
```

```javascript
// frontend/src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

```javascript
// frontend/src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

createApp(App).mount('#app')
```

```javascript
// frontend/src/styles/main.css

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #00BCD4;
}

a:hover {
  color: #00ACC1;
}

button {
  background-color: #00BCD4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #00ACC1;
}

.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  background-color: #00BCD4;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.footer {
  background-color: #00BCD4;
  color: #fff;
  padding: 20px;
  text-align: center;
  clear: both;
}

.footer p {
  margin: 0;
}
```

```javascript
// frontend/src/views/Home.vue

<template>
  <div class="container">
    <h1>Welcome to Fitness Pro</h1>
    <p>This is the home page.</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

```javascript
// frontend/src/views/About.vue

<template>
  <div class="container">
    <h1>About Us</h1>
    <p>This is the about page.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
```

```javascript
// frontend/src/views/Products.vue

<template>
  <div class="container">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
      ]
    }
  }
}
</script>
```

```javascript
// frontend/src/views/ProductDetails.vue

<template>
  <div class="container">
    <h1>Product Details</h1>
    <p>Product ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails'
}
</script>
```

```javascript
// frontend/src/views/NotFound.vue

<template>
  <div class="container">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>