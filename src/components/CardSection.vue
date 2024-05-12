<template>
  <div className="w-full px-56 bg-red-600 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 margintop">
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="flex flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/cortes.png" alt="Logo" width={128} height={32} className="mb-4" />
        <div>
        <h1 className="text-xl font-semibold mb-2">Entrecosto De Vitela</h1>
        <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
      <div className="flex flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/beaf.png" alt="Logo" width={128} height={32} className="mb-4" />
        <div>
        <h1 className="text-xl font-semibold mb-2">Lombo De Porco</h1>
        <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
      <div className="flex flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/pork.png" alt="Logo" width={128} height={32} className="mb-4" />
        <div>
        <h1 className="text-xl font-semibold mb-2">Costelas De Boi</h1>
        <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSection'
}
</script>

<style scoped>
.margintopn {
  margin-top: 1250px;
}
</style>