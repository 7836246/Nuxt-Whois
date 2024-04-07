<script setup lang="ts">

definePageMeta({
  stylePage: true,
})

const settingsStore = useSettingsStore()
const {t} = useI18n()
const {isObj} = storeToRefs(settingsStore)


const handleReset = async () => {

}

const styleStore = useStyleStore();
const localCommon = ref({...styleStore.common});
const modalVisible = ref(false)
const swatches = ['#FFFFFF', '#18A058', '#2080F0', '#F0A020', 'rgba(208, 48, 80, 1)'];
const updateColors = () => {
  styleStore.updatePrimaryColor(localCommon.value);
};

</script>

<template>
  <ClientOnly>
    <div class="setting mt-8 settings-grid">
      <n-h6 prefix="bar"> 基础设置</n-h6>
      <n-card class="set-item">
        <div class="top grid grid-cols-2 gap-4">
          <div class="name">
            <n-text class="text">{{ t('settings.title') }}</n-text>
            <n-text class="tip" depth="3">{{ t('settings.history') }}</n-text>
          </div>
          <n-switch v-model:value="isObj.isHistory" :round="false"/>

          <div class="name">
            <n-text class="text">公告设置</n-text>
            <n-text class="tip" depth="3">是否开启首页公告功能</n-text>
          </div>
          <n-switch v-model:value="isObj.isBulletin" :round="false"/>

          <div class="name">
            <n-text class="text">支持列表</n-text>
            <n-text class="tip" depth="3">是否开启支持列表功能</n-text>
          </div>
          <n-switch v-model:value="isObj.isDomainList" :round="false"/>

          <div class="name">
            <n-text class="text">支持列表</n-text>
            <n-text class="tip" depth="3">是否显示 Logo</n-text>
          </div>
          <n-switch v-model:value="isObj.isLogo" :round="false"/>

        </div>
      </n-card>

      <n-modal v-model:show="modalVisible" title="颜色设置" :style="{ width: '480px' }">
        <div class="p-8">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div class="text-sm font-semibold mb-2">Primary Color</div>
                <n-color-picker v-model:value="localCommon.primaryColor" :swatches="swatches"/>
              </div>
              <div>
                <div class="text-sm font-semibold mb-2">Info Color</div>
                <n-color-picker v-model:value="localCommon.infoColor" :swatches="swatches"/>
              </div>
              <!-- 重复上述结构以添加更多颜色选择器 -->
              <div>
                <div class="text-sm font-semibold mb-2">Success Color</div>
                <n-color-picker v-model:value="localCommon.successColor" :swatches="swatches"/>
              </div>
              <div>
                <div class="text-sm font-semibold mb-2">Warning Color</div>
                <n-color-picker v-model:value="localCommon.warningColor" :swatches="swatches"/>
              </div>
              <div>
                <div class="text-sm font-semibold mb-2">Error Color</div>
                <n-color-picker v-model:value="localCommon.errorColor" :swatches="swatches"/>
              </div>
            </div>
            <n-button @click="updateColors" class="mt-6">Update Colors</n-button>
          </div>
        </div>
      </n-modal>

      <div class="mx-auto mt-10">
        <n-h6 class="mb-4 text-lg font-bold text-gray-800" prefix="bar">颜色设置</n-h6>
        <n-card class="set-item p-4 shadow-lg">
          <div class="top flex justify-between items-center">
            <div class="name">
              <n-text class="text text-gray-600">自定义所有颜色</n-text>
            </div>
            <n-button type="warning" @click="modalVisible = true" class="bg-orange-500 hover:bg-orange-600">确认
            </n-button>
          </div>
        </n-card>
      </div>

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
  </ClientOnly>
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
