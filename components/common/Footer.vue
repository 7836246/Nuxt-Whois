<template>
  <footer class="text-gray-800 h-[10vh] bg-[#F1F3F4] dark:text-white  dark:bg-[#5b77af]">
    <div class="max-w-4xl mx-auto py-4 px-4 flex justify-between items-center">
      <div class="text-sm">
        © 2024 Whois查询. All rights reserved.
      </div>
      <div class="flex items-center space-x-4">
        <NuxtLink to="/api.html" class="hover:underline">API文档</NuxtLink>
        <NuxtLink to="https://github.com/7836246/Nuxt-Whois" class="hover:underline">
          <Icon name="ant-design:github-outlined" class="h-6 w-6" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
