<template>
    <div class="container mx-auto py-8">
      <h2 class="text-3xl font-semibold text-center mb-8">Nossos Produtos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(product, index) in products" :key="index" class="bg-white p-4 shadow-md rounded-lg">
          <img :src="product.image" alt="Produto" class="w-full h-40 object-cover mb-4">
          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductSection',
    data() {
      return {
        products: [
          {
            name: 'Produto 1',
            description: 'Descrição do Produto 1',
            image: '@/assets/product1.jpg'
          },
          {
            name: 'Produto 2',
            description: 'Descrição do Produto 2',
            image: '@/assets/product2.jpg'
          },
          {
            name: 'Produto 3',
            description: 'Descrição do Produto 3',
            image: '@/assets/product3.jpg'
          },
          {
            name: 'Produto 4',
            description: 'Descrição do Produto 4',
            image: '@/assets/product4.jpg'
          }
        ]
      };
    }
  }
  </script>

<style scoped>
</style>