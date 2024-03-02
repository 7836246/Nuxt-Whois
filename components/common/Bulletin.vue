<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <!-- 公告部分 -->
  <div class="bg-gray-200 p-3 rounded-md mb-5 dark:bg-[#5b77af]">
    <div class="flex items-center">
      <i aria-hidden="true" class="icon fas fa-bullhorn mr-3"></i>
    </div>
    <div class="flex-grow">
      <div class="text-sm text-gray-800 dark:text-white">
        {{ text }}
        <slot name="text" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
