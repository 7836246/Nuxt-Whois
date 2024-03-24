<script lang="ts" setup>
const localePath = useLocalePath()
const router = useRouter();
</script>

<template>
        <div
            class="cursor-pointer flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
            @click="router.push(localePath('/settings/api'))"
        >
          <Icon name="i-eos-icons:api-outlined" class=" text-lg dark:text-white" />
        </div>
</template>
