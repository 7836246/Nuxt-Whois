<template>
  <div class="px-4 space-y-4">
    <div class="flex gap-2 items-center">
      <UInput v-model="newDomainSuffix" @input="searchSuffix" :placeholder="t('settings.suffixPlaceholder')" class="flex-grow rounded shadow transition duration-200 ease-in-out" />
      <UInput v-model="newWhoisServer" :placeholder="t('settings.whoisPlaceholder')" class="flex-grow border-gray-300 rounded shadow transition duration-200 ease-in-out" />
      <UButton @click="addSuffix" type="button" :disabled="suffixExists" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 shadow disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 ease-in-out">
        {{ t('common.actions.add') }}</UButton>
    </div>
    <div class="text-sm" v-if="suffixExists">
      <span class="text-red-500">{{ t('common.actions.suffixExist') }}</span>
    </div>
    <div class="overflow-auto h-64 mt-4 bg-gray-50 rounded shadow">
      <div v-for="(server, suffix) in domainStore.SupportedTLDs" :key="suffix" class="flex items-center justify-between p-2 border-b border-gray-200 last:border-b-0">
        <div>{{ suffix }}: {{ server }}</div>
        <UButton @click="removeSuffix(suffix)" type="button" class="bg-red-500 hover:bg-red-700 text-white p-1 rounded shadow transition duration-200 ease-in-out">
          {{ t('common.actions.delete') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const domainStore = useDomainStore();
const newDomainSuffix = ref('');
const newWhoisServer = ref('');
const suffixExists = computed(() => newDomainSuffix.value in domainStore.SupportedTLDs);

const toast = useToast()
const {t} = useI18n();

const addSuffix = async () => {
  if (newDomainSuffix.value && newWhoisServer.value && !suffixExists.value) {
    await domainStore.addSuffix(newDomainSuffix.value, newWhoisServer.value);
    newDomainSuffix.value = '';
    newWhoisServer.value = '';
    toast.add(
        { title: '`添加成功`' }
    );
  }
};

const removeSuffix = async (suffix: string) => {
  await domainStore.removeSuffix(suffix);
  toast.add(
      { title: '删除成功',
      }
  );
};

const searchSuffix = () => {
  // 这个方法被@input事件触发，用于即时反馈，但实际逻辑已由suffixExists处理
};
</script>
<style scoped>

</style>
