<template>
    <div
        class="bg-gray-custom w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:mt-24 px-12">
        <div class="w-full lg:w-1/2 pl-0 lg:pl-8 flex justify-center">
            <img src="@/assets/banner.png" alt="Imagem de Missão" class="tamanho" />
        </div>
        <div class="w-full lg:w-1/2 pl-2 lg:pl-8">
            <p class="text-red-600 font-bold">About Us</p>
            <h2 class="text-4xl text-white font-bold mb-4">Sobre Nossas Empresas</h2>
            <p class="text-gray-400 mb-4 pr-0 lg:pr-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt nec nulla facilisis accumsan.
                Curabitur tempus, nisl quis rhoncus aliquet, enim ligula porta eros, laoreet interdum ex dui vel odio.
                Aenean commodo dictum dapibus.
            </p>
            <div class="flex">
                <div>
                    <div class="bg-transparent p-4 flex items-center">
                        <img src="@/assets/quest.png" alt="Card 1" class="w-16 h-16 mr-4 object-cover">
                        <h4 class="text-white text-xl font-semibold">Expert Customer</h4>
                    </div>
                    <div class="bg-transparent p-4 flex items-center">
                        <img src="@/assets/caminhao.png" alt="Card 2" class="w-16 h-16 mr-4 object-cover">
                        <h4 class="text-white text-xl font-semibold">Free Shipping</h4>
                    </div>
                </div>
                <div>
                    <div class="bg-transparent p-4 flex items-center">
                        <img src="@/assets/pergunta.png" alt="Card 3" class="w-16 h-16 mr-4 object-cover">
                        <h4 class="text-white text-xl font-semibold">Free Return</h4>
                    </div>
                    <div class="bg-transparent p-4 flex items-center">
                        <img src="@/assets/like.png" alt="Card 4" class="w-16 h-16 mr-4 object-cover">
                        <h4 class="text-white text-xl font-semibold">Amazing deals</h4>
                    </div>
                </div>
            </div>
            <hr class="border-b-2 border-gray-400 mt-4 mb-8 mr-80" />
            <button class="border border-red-700 text-white font-bold py-2 px-4 mt-6">
                View All
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutSection'
}
</script>

<style scoped>
.tamanho {
    width: 70%;
}
</style>