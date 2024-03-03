<script setup lang="ts">
import {useStyleStore} from "~/stores/style";
import {useSettingsStore} from "~/stores/settings";

const styleStore = useStyleStore()
const settingsStore = useSettingsStore()
const {t} = useI18n()
const timeStore = useTimeStore()
styleStore.setIsPage(true)

const {isHistory} = storeToRefs(settingsStore)
const isOpen = ref(false)


const handleReset = async () => {
  settingsStore.setHistory(true)
  settingsStore.setLinkOpenType('currentWindow')
  styleStore.setHistory([])
  timeStore.setTimeZones('UTC+8')
  timeStore.setDnsServer('')
  await refreshNuxtData()
  isOpen.value = false
}

</script>

<template>
  <div class="setting">
    <div class="text-2xl font-bold mt-[30px] mb-[20px]">{{ t('settings.title') }}</div>
    <UCard>
       <div class="flex justify-between items-center">
          <div class="text-base	">{{ t('settings.history') }}</div>
          <div>
            <UToggle v-model="isHistory" />
          </div>
        </div>
    </UCard>
  </div>

  <div class="setting">
    <div class="text-2xl font-bold mt-[30px] mb-[20px]">{{ t('settings.linkOpenType') }}</div>
    <UCard>
      <div class="flex justify-between items-center">
        <div class="text-base		"> {{ t('settings.linkOpenTypeDesc') }} </div>
        <div>
          <ClientOnly>
          <CommonLinkChange />
          </ClientOnly>
        </div>
      </div>
    </UCard>
  </div>

  <div class="setting">
    <div class="text-2xl font-bold mt-[30px] mb-[20px]"> {{ t('settings.miscellaneous') }} </div>
    <u-card class="set-item">
      <div class="flex justify-between items-center">
        <div class="text-base">{{ t('settings.reset') }} </div>
        <div class="text-sm			" >
          {{ t('settings.resetDesc') }}
        </div>
        <div>
          <u-button type="warning"
                    @click="isOpen = true"
          > {{ t('common.actions.reset') }} </u-button>
        </div>
      </div>

        <UModal
            v-model="isOpen"
        >
          <UCard
              :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  Modal
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
              </div>
            </template>

            <div class="p-4 m-auto text-center">
              {{ t('settings.resetConfirm') }}
            </div>
            <div class="flex justify-end">
              <UButton
                  @click="handleReset"
                  class="my-1">
                {{ t('common.actions.confirm') }}
              </UButton>
            </div>
          </UCard>
        </UModal>
    </u-card>
  </div>
</template>

<style scoped>

</style>
