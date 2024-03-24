<script setup lang="ts">
import draggable from "vuedraggable";


const styleStore = useStyleStore()
const settingsStore = useSettingsStore();

const whoisStore = useWhoisStore()
const dnsStore = useDnsStore()
const domainStore = useDomainStore()
styleStore.setIsPage(true)

const {
  newsDnsArr,
} = storeToRefs(dnsStore);

const {
  newsDomainArr,
} = storeToRefs(domainStore);

const {
  newsWhoisArr,
} = storeToRefs(whoisStore);

const message = useMessage();
// 恢复默认排序
const restoreDefault = () => {
  newsWhoisArr.value = newsWhoisArr.value.sort((a, b) => a.order - b.order);
  message.success("恢复默认Whois榜单排序成功");
};

const restoreDnsDefault = () => {
  newsDnsArr.value = newsDnsArr.value.sort((a, b) => a.order - b.order);
  message.success("恢复Dns Api榜单排序成功");
};

const restoreDomainDefault = () => {
  newsDomainArr.value = newsDomainArr.value.sort((a, b) => a.order - b.order);
  message.success("恢复Dns Api榜单排序成功");
};

// 将排序结果写入
const saveSoreData = (name = null, open = false) => {
  message.success(
      name ? `${name}Whois榜单已${open ? "开启" : "关闭"}` : "Whois榜单排序成功"
  );
  whoisStore.checkNewsWhoisUpdate()
};

const saveDnsSoreData = (name = null, open = false) => {
  message.success(
      name ? `${name}DnsServer已${open ? "开启" : "关闭"}` : "DnsServer排序成功"
  );
  dnsStore.checkNewsDnsUpdate()
};

const saveSoreDomainData = (name = null, open = false) => {
  message.success(
      name ? `${name}DomainServer已${open ? "开启" : "关闭"}` : "DomainServer排序成功"
  );
  domainStore.checkNewsDomainUpdate()
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
          <n-popconfirm @positive-click="restoreDefault">
            <template #trigger>
              <n-button class="control" size="small"> 恢复默认</n-button>
            </template>
            确认将排序恢复到默认状态？
          </n-popconfirm>
        </div>
        <draggable
            :list="newsWhoisArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveSoreData()"
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
                  @update:value="saveSoreData(element.label, element.show)"
              />
            </n-card>
          </template>
        </draggable>
      </n-card>

      <n-card class="set-item">
        <div class="top">
          <div class="name">
            <n-text class="text">Dns第三方API</n-text>
            <n-text class="tip" depth="3">
              拖拽以排序，开关用以控制在页面中的显示状态
            </n-text>
          </div>
          <n-popconfirm
              @positive-click="restoreDnsDefault"
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
            :list="newsDnsArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveDnsSoreData()"
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
                  @update:value="saveDnsSoreData(element.label, element.show)"
              />
            </n-card>
          </template>
        </draggable>
      </n-card>

      <n-card class="set-item">
        <div class="top">
          <div class="name">
            <n-text class="text">域名第三方API</n-text>
            <n-text class="tip" depth="3">
              拖拽以排序，开关用以控制在页面中的显示状态
            </n-text>
          </div>
          <n-popconfirm @positive-click="restoreDomainDefault">
            <template #trigger>
              <n-button class="control" size="small"> 恢复默认</n-button>
            </template>
            确认将排序恢复到默认状态？
          </n-popconfirm>
        </div>
        <draggable
            :list="newsDomainArr"
            :animation="200"
            class="mews-group"
            item-key="order"
            @end="saveSoreDomainData()"
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
                  @update:value="saveSoreDomainData(element.label, element.show)"
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
