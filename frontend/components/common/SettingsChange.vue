<script setup lang="ts">
const localePath = useLocalePath()
const router = useRouter();
</script>

<template>
  <div>
  <div title="Change Color">
    <div
        class="cursor-pointer	flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
        @click="router.push(localePath('/settings'))"
    >
      <Icon name="uil:setting" class=" text-lg dark:text-white" />
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>
