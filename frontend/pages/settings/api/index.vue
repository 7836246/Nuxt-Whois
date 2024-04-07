<script setup lang="ts">
import draggable from "vuedraggable";

definePageMeta({
  stylePage: true,
})

const message = useMessage();
const configStore = useConfigStore()
const {configServer} = storeToRefs(configStore)

// 恢复默认排序
const restoreDefault = (arr: any, name: string) => {
  arr.sort((a, b) => a.order - b.order);
  message.success(`恢复默认${name}榜单排序成功`);

  if (name === 'whois') {
    updateConfigWithFirstVisibleItem(arr, 'Whois');
  } else if (name === 'dns') {
    updateConfigWithFirstVisibleItem(arr, 'Dns');
  } else if (name === 'domain') {
    updateConfigWithFirstVisibleItem(arr, 'Domain');
  }
};

const updateConfigWithFirstVisibleItem = (arr, configKey) => {
  const visibleItems = arr.filter(item => item.show);
  const firstItemName = visibleItems.length > 0 ? visibleItems[0].name : '';
  configStore[`setCurrentServer${configKey}`](firstItemName);
};

// 将排序结果写入
const saveSoreData = (name = null, open = false, rank = "whois") => {
  message.success(
      name ? `${name}${rank}榜单已${open ? "开启" : "关闭"}` : `${rank}榜单排序成功`
  );
  switch (rank) {
    case 'whois':
      updateConfigWithFirstVisibleItem(configServer.value.whoisArr, 'Whois');
      break;
    case 'dns':
      updateConfigWithFirstVisibleItem(configServer.value.dnsArr, 'Dns');
      break;
  }
};
</script>

<template>
  <ClientOnly>
    <div class="setting mt-5">
      <n-card class="set-item">
        <div class="top">
          <div class="name">
            <n-text class="text">Whois第三方API</n-text>
            <n-text class="tip" depth="3">
              拖拽以排序，开关用以控制在页面中的显示状态
            </n-text>
          </div>
          <n-popconfirm @positive-click="restoreDefault(configServer.whoisArr,'whois')">
            <template #trigger>
              <n-button class="control" size="small"> 恢复默认</n-button>
            </template>
            确认将排序恢复到默认状态？
          </n-popconfirm>
        </div>
        <draggable
            :list="configServer.whoisArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveSoreData(null,false,'whois')"
        >
          <template #item="{ element }">
            <n-card
                class="item"
                embedded
                :content-style="{ display: 'flex', alignItems: 'center' }"
            >
              <div class="desc" :style="{ opacity: element.show ? null : 0.6 }">
                <img class="logo" :src="`/logo/${element.name}.png`" alt="logo"/>
                <n-text class="news-name" v-html="element.label"/>
              </div>
              <n-switch
                  class="switch"
                  :round="false"
                  :disabled="element.disabled"
                  v-model:value="element.show"
                  @update:value="saveSoreData(element.label, element.show,'whois')"
              />
            </n-card>
          </template>
        </draggable>
      </n-card>

      <n-card class="set-item">
        <div class="top">
          <div class="name">
            <n-text class="text">Dns第三方API</n-text>
          </div>
          <n-popconfirm
              @positive-click="restoreDefault(configServer.dnsArr,'dns')"
              negative-text="取消"
              positive-text="确认"
          >
            <template #trigger>
              <n-button class="control" size="small"> 恢复默认</n-button>
            </template>
            确认将Dns排序恢复到默认状态？
          </n-popconfirm>
        </div>
        <draggable
            :list="configServer.dnsArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveSoreData(null,false,'dns')"
        >
          <template #item="{ element }">
            <n-card
                class="item"
                embedded
                :content-style="{ display: 'flex', alignItems: 'center' }"
            >
              <div class="desc" :style="{ opacity: element.show ? null : 0.6 }">
                <img class="logo" :src="`/logo/${element.name}.png`" alt="logo"/>
                <n-text class="news-name" v-html="element.label"/>
              </div>
              <n-switch
                  class="switch"
                  :disabled="element.disabled"
                  :round="false"
                  v-model:value="element.show"
                  @update:value="saveSoreData(element.label, element.show,'dns')"
              />
            </n-card>
          </template>
        </draggable>
      </n-card>

      <n-card class="set-item">
        <div class="top">
          <div class="name">
            <n-text class="text">Domain第三方API</n-text>
          </div>
          <n-popconfirm
              @positive-click="restoreDefault(configServer.domainArr,'domain')"
              negative-text="取消"
              positive-text="确认"
          >
            <template #trigger>
              <n-button class="control" size="small"> 恢复默认</n-button>
            </template>
            确认将Domain排序恢复到默认状态？
          </n-popconfirm>
        </div>
        <draggable
            :list="configServer.domainArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveSoreData(null,false,'domain')"
        >
          <template #item="{ element }">
            <n-card
                class="item"
                embedded
                :content-style="{ display: 'flex', alignItems: 'center' }"
            >
              <div class="desc" :style="{ opacity: element.show ? null : 0.6 }">
                <img class="logo" :src="`/logo/${element.name}.png`" alt="logo"/>
                <n-text class="news-name" v-html="element.label"/>
              </div>
              <n-switch
                  class="switch"
                  :disabled="element.disabled"
                  :round="false"
                  v-model:value="element.show"
                  @update:value="saveSoreData(element.label, element.show,'domain')"
              />
            </n-card>
          </template>
        </draggable>
      </n-card>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
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
