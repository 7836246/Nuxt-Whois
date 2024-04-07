<script setup lang="ts">
const props = defineProps({
  data:{
    type: Object,
    required: true
  }
});

const {t} = useI18n()
</script>

<template>
  <div class="flex bg-gray-100 p-8">
  <div class="w-full mx-auto">
    <div class="bg-white shadow-lg rounded-lg p-6 mb-4" v-for="item in data.Answer">
      <h2 class="text-xl font-bold">{{ item.name }}</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold">Type</p>
          <p>{{ item.type }}</p>
        </div>
        <div>
          <p class="font-semibold">TTL</p>
          <p>{{ item.TTL }}</p>
        </div>
        <div class="col-span-2">
          <p class="font-semibold">Data</p>
          <p>{{ item.data }}</p>
        </div>
      </div>
      <div class="flex space-x-2 mt-4">
        <span class="bg-green-200 text-green-800 px-2 py-1 rounded">RD: {{ data.RD }}</span>
        <span class="bg-green-200 text-green-800 px-2 py-1 rounded">RA: {{ data.RA }}</span>
        <span class="bg-red-200 text-red-800 px-2 py-1 rounded">TC: {{ data.TC }}</span>
        <span class="bg-red-200 text-red-800 px-2 py-1 rounded">AD: {{ data.AD }}</span>
        <span class="bg-red-200 text-red-800 px-2 py-1 rounded">CD: {{ data.CD }}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>
