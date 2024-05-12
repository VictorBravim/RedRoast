<template>
    <div class="bg-gray-custom h-full lg:h-screen flex justify-center items-center flex-col py-8">
        <h2 class="text-white text-5xl font-semibold text-center mb-12">Nossos Produtos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-12">
            <div v-for="(product, index) in products" :key="index"
                class="flex flex-col justify-center items-center bg-gray-custom2 p-4 px-8 shadow-md">
                <img :src="product.image" alt="Produto" class="w-full h-full mb-4">
                <h3 class="text-white text-2xl font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-300 text-lg mb-4">{{ product.description }}</p>
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-12">
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
          name: 'Tomahawk',
          description: 'Steak on old wooden board',
          image: require('@/assets/tomahawk.png'), // Importe a imagem usando require()
        },
        {
          name: 'Grilled Sirloin',
          description: 'Marbled perfection juicy',
          image: require('@/assets/grilledsirloin.png'),
        },
        {
          name: 'Raw Pork',
          description: 'Chop steak',
          image: require('@/assets/rawpork.png'),
        },
        {
          name: 'Fresh Raw',
          description: 'Red meats green garlics',
          image: require('@/assets/freshraw.png'),
        }
      ]
    };
  }
}
</script>

<style scoped></style>