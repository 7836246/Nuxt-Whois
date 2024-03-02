<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})
const localePath = useLocalePath()
const {t} = useI18n()
useHead({
  title: t('api.title'),
  meta: [
    {
      name: 'description',
      content: t('api.description')
    },{
      name: 'keywords',
      content: t('api.keywords')
    }
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="overflow-hidden shadow-md rounded-lg">
      <div class="px-6 py-4 bg-red-500 text-white font-bold uppercase">
        <div class="flex items-center justify-between">
          <NuxtLink :to="localePath('/')" class="hover:text-white">
            <Icon name="ic:outline-home" class="h-6 w-6" /> <!-- 调整图标大小 -->
          </NuxtLink>
          <span>{{ t('api.h1') }}</span>
          <span></span> <!-- 占位符以保持标题居中 -->
        </div>
      </div>

    <div class="p-6">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="font-semibold">{{ t('api.url') }}</div>
          <div class="col-span-2">/api/whois</div>
        </div>
<!--        <div class="grid grid-cols-3 gap-4 mb-4">-->
<!--          <div class="font-semibold">累计调用</div>-->
<!--          <div class="col-span-2"><span class="count">156</span> 次</div>-->
<!--        </div>-->
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="font-semibold">{{ t('api.method') }}</div>
          <div class="col-span-2">POST</div>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="font-semibold">{{ t('api.params') }}</div>
          <div class="col-span-2">String</div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="font-bold mb-2">{{ t('api.input') }}</div>
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="font-semibold">{{ t('api.name') }}</div>
          <div class="font-semibold">{{ t('api.type') }}</div>
          <div class="font-semibold">{{ t('api.desc') }}</div>
        </div>
        <!-- 参数列表 -->
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div>domain</div>
          <div>string</div>
          <div>({{ t('api.required') }}) {{ t('api.domain') }}</div>
        </div>
<!--        <div class="grid grid-cols-3 gap-4 mb-4">-->
<!--          <div>whois</div>-->
<!--          <div>string</div>-->
<!--          <div>(必选) 域名的whois信息</div>-->
<!--        </div>-->
<!--        <div class="grid grid-cols-3 gap-4">-->
<!--          <div>lang</div>-->
<!--          <div>string</div>-->
<!--          <div>(可选) 语言代码 ISO 639-1，例: "zh"、"en"</div>-->
<!--        </div>-->
<!--        <div class="grid grid-cols-3 gap-4 mb-4">-->
<!--          <div>time_zone</div>-->
<!--          <div>string</div>-->
<!--          <div>(可选) 时区，例: "8"、"-3"</div>-->
<!--        </div>-->
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="font-bold">{{ t('api.output') }}</div>
        <div class="mt-2">{{ t('api.whois') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
