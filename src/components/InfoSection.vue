<template>
    <div class="hero-section bg-cover bg-center h-full lg:h-screen flex items-center justify-center text-center">
        <div class="lg:px-48 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-40 py-12 lg:py-0">
            <div class="lg:w-1/3 flex flex-col justify-center items-center text-black">
                <div class="bg-gray-custom hover:bg-red-600 rounded-full mb-4">
                    <img src="@/assets/Pork1.png" alt="Pork" class="w-64">
                </div>
                <h1 class="text-4xl font-bold mb-2">Round Steak</h1>
                <p class="text-xl lg:px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt nec nulla facilisis accumsan.
                </p>
                <button></button>
            </div>
            <div class="lg:w-1/3 flex flex-col justify-center items-center text-black">
                <div class="bg-red-600 hover:bg-gray-custom rounded-full mb-4">
                    <img src="@/assets/Steak.png" alt="Steak" class="w-64">
                </div>
                <h1 class="text-4xl font-bold mb-2">chuck steak</h1>
                <p class="text-xl lg:px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt nec nulla facilisis accumsan.
                </p>
                <button></button>
            </div>
            <div class="lg:w-1/3 flex flex-col justify-center items-center text-black">
                <div class="bg-gray-custom hover:bg-red-600 rounded-full mb-4">
                    <img src="@/assets/Ribs.png" alt="Ribs" class="w-64">
                </div>
                <h1 class="text-4xl font-bold mb-2">Flank steak</h1>
                <p class="text-xl lg:px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt nec nulla facilisis accumsan.
                </p>
                <button></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoSection'
}
</script>

<style scoped>
.hero-section {
    background-image: url('~@/assets/bg2.png');
}
</style>