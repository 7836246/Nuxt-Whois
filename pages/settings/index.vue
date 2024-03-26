<script setup lang="ts">
import {useStyleStore} from "~/stores/style";
import {useSettingsStore} from "~/stores/settings";
import {useModal} from 'naive-ui';

const styleStore = useStyleStore()
const settingsStore = useSettingsStore()
const {t} = useI18n()
const timeStore = useTimeStore()
styleStore.setIsPage(true)

const {isHistory, isBulletin, isDomainList} = storeToRefs(settingsStore)
const isOpen = ref(false)

const isEditDomainOpen = ref(false)

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
  <div class="setting mt-8 settings-grid">
    <n-h6 prefix="bar"> 基础设置</n-h6>
    <n-card class="set-item">
      <div class="top grid grid-cols-2 gap-4">
        <div class="name">
          <n-text class="text">{{ t('settings.title') }}</n-text>
          <n-text class="tip" depth="3">{{ t('settings.history') }}</n-text>
        </div>
        <n-switch v-model:value="isHistory" :round="false"/>

        <div class="name">
          <n-text class="text">公告设置</n-text>
          <n-text class="tip" depth="3">是否开启首页公告功能</n-text>
        </div>
        <n-switch v-model:value="isBulletin" :round="false"/>

        <div class="name">
          <n-text class="text">支持列表</n-text>
          <n-text class="tip" depth="3">是否开启支持列表功能</n-text>
        </div>
        <n-switch v-model:value="isDomainList" :round="false"/>
      </div>
    </n-card>

    <n-h6 prefix="bar"> 杂项设置</n-h6>
    <n-card class="set-item">
      <div class="top">
        <div class="name">
          <n-text class="text">重置所有数据</n-text>
          <n-text class="tip" depth="3">
            重置所有数据，你的自定义设置都将会丢失
          </n-text>
        </div>
        <n-popconfirm
            @positive-click="handleReset"
            :negative-text="t('common.actions.cancel')"
            :positive-text="t('common.actions.confirm')"
        >
          <template #trigger>
            <n-button type="warning"> {{ t('common.actions.reset') }}</n-button>
          </template>
          确认重置所有数据？你的自定义设置都将会丢失！
        </n-popconfirm>
      </div>
    </n-card>
  </div>

  <!--  <div class="setting">-->
  <!--    <div class="text-2xl font-bold mt-[30px] mb-[20px]"> {{ t('settings.suffixSetting') }} </div>-->
  <!--    <u-card class="set-item">-->
  <!--      <div class="flex justify-between items-center">-->
  <!--        <div class="text-base"> {{ t('settings.customSuffix') }} </div>-->
  <!--        <div class="text-sm			" >-->
  <!--          {{ t('settings.suffixDesc') }}-->
  <!--        </div>-->
  <!--        <div>-->
  <!--          <u-button type="warning"-->
  <!--                    @click="isEditDomainOpen = true"-->
  <!--          > {{ t('settings.manage') }} </u-button>-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <UModal-->
  <!--          v-model="isEditDomainOpen"-->
  <!--      >-->
  <!--        <UCard-->
  <!--            :ui="{-->
  <!--          base: 'h-full flex flex-col',-->
  <!--          rounded: '10',-->
  <!--          divide: 'divide-y divide-gray-100 dark:divide-gray-800',-->
  <!--          body: {-->
  <!--            base: 'grow'-->
  <!--          }-->
  <!--        }"-->
  <!--        >-->
  <!--          <template #header>-->
  <!--            <div class="flex items-center justify-between">-->
  <!--              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">-->
  <!--                {{ t('settings.suffixManage') }}-->
  <!--              </h3>-->
  <!--              <UButton-->
  <!--                  color="gray"-->
  <!--                  variant="ghost"-->
  <!--                  icon="i-heroicons-x-mark-20-solid"-->
  <!--                  class="-my-1"-->
  <!--                  type="button"-->
  <!--                  @click="isEditDomainOpen = false" />-->
  <!--            </div>-->
  <!--          </template>-->
  <!--          <div class="mx-auto">-->
  <!--            <DomainEditor />-->
  <!--          </div>-->
  <!--        </UCard>-->
  <!--      </UModal>-->
  <!--    </u-card>-->
  <!--  </div>-->

  <!--  <div class="setting">-->
  <!--    <div class="text-2xl font-bold mt-[30px] mb-[20px]">{{ t('settings.linkOpenType') }}</div>-->
  <!--    <UCard>-->
  <!--      <div class="flex justify-between items-center">-->
  <!--        <div class="text-base	"> {{ t('settings.linkOpenTypeDesc') }} </div>-->
  <!--        <div>-->
  <!--          <ClientOnly>-->
  <!--          <CommonLinkChange />-->
  <!--          </ClientOnly>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </UCard>-->
  <!--  </div>-->


  <!--  <div class="setting">-->
  <!--    <div class="text-2xl font-bold mt-[30px] mb-[20px]"> {{ t('settings.miscellaneous') }} </div>-->
  <!--    <u-card class="set-item">-->
  <!--      <div class="flex justify-between items-center">-->
  <!--        <div class="text-base">{{ t('settings.reset') }} </div>-->
  <!--        <div class="text-sm			" >-->
  <!--          {{ t('settings.resetDesc') }}-->
  <!--        </div>-->
  <!--        <div>-->
  <!--          <u-button type="warning"-->
  <!--                    @click="isOpen = true"-->
  <!--          > {{ t('common.actions.reset') }} </u-button>-->
  <!--        </div>-->
  <!--      </div>-->

  <!--        <UModal-->
  <!--            v-model="isOpen"-->
  <!--        >-->
  <!--          <UCard-->
  <!--              :ui="{-->
  <!--          base: 'h-full flex flex-col',-->
  <!--          rounded: '',-->
  <!--          divide: 'divide-y divide-gray-100 dark:divide-gray-800',-->
  <!--          body: {-->
  <!--            base: 'grow'-->
  <!--          }-->
  <!--        }"-->
  <!--          >-->
  <!--            <template #header>-->
  <!--              <div class="flex items-center justify-between">-->
  <!--                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">-->
  <!--                  Modal-->
  <!--                </h3>-->
  <!--                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />-->
  <!--              </div>-->
  <!--            </template>-->

  <!--            <div class="p-4 m-auto text-center">-->
  <!--              {{ t('settings.resetConfirm') }}-->
  <!--            </div>-->
  <!--            <div class="flex justify-end">-->
  <!--              <UButton-->
  <!--                  @click="handleReset"-->
  <!--                  class="my-1">-->
  <!--                {{ t('common.actions.confirm') }}-->
  <!--              </UButton>-->
  <!--            </div>-->
  <!--          </UCard>-->
  <!--        </UModal>-->
  <!--    </u-card>-->
  <!--  </div>-->
</template>

<style scoped>
.setting {
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bold;
  }

  .n-h {
    padding-left: 16px;
    font-size: 20px;
    margin-left: 4px;
  }

  .set-item {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-size: 18px;
        display: flex;
        flex-direction: column;

        .tip {
          font-size: 12px;
          border-radius: 8px;
        }
      }

      .set {
        max-width: 200px;
      }
    }

    .mews-group {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(5, minmax(0px, 1fr));
      gap: 24px;

      @media (max-width: 1666px) {
        grid-template-columns: repeat(4, minmax(0px, 1fr));
      }

      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0px, 1fr));
      }

      @media (max-width: 890px) {
        grid-template-columns: repeat(2, minmax(0px, 1fr));
      }

      @media (max-width: 620px) {
        grid-template-columns: repeat(1, minmax(0px, 1fr));
      }

      .item {
        cursor: pointer;

        .desc {
          display: flex;
          align-items: center;
          width: 100%;
          transition: all 0.3s;

          .logo {
            width: 40px;
            height: 40px;
            margin-right: 12px;
          }

          .news-name {
            font-size: 16px;
          }
        }

        .switch {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
