<script setup lang="ts">

const emit = defineEmits(['action'])

const handleClick = () => {
  const urlParam = 'dns' // 这里是你想传递给handleAction方法的参数
  emit('action', urlParam)
}
</script>

<template>
  <div>
    <div title="Change Color">
      <div
          class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
          @click="handleClick"
      >
        <Icon name="eos-icons:dns" class=" text-lg dark:text-white" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
