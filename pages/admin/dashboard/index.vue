<script setup lang="ts">
definePageMeta({
  layout: 'full',
})
</script>

<template>
  <CommonAppPage show-footer>
    <div class="flex">
      <n-card class="min-w-200 w-30%">
        <div class="flex items-center">
          <!--          <n-avatar round :size="60" :src="userStore.avatar" class="flex-shrink-0" />-->
          <div class="ml-20 flex-col">
            <span class="text-20 opacity-80">
<!--              Hello, {{ userStore.nickName ?? userStore.username }}-->
            </span>
            <!--            <span class="mt-4 opacity-50">当前角色：{{ userStore.currentRole?.name }}</span>-->
          </div>
        </div>

        <p class="mt-28 text-14 opacity-60">一个人几乎可以在任何他怀有无限热忱的事情上成功。</p>
        <p class="mt-12 text-right text-12 opacity-40">—— 查尔斯·史考伯</p>
      </n-card>
      <n-card class="ml-12 w-70%" title="✨ 欢迎使用 Vue Naive Admin 2.0">
        <template #header-extra>
          <a
              class="text-14 text-primary text-highlight hover:underline hover:opacity-80"
              href="https://isme.top"
              target="_blank"
              @click.prevent="useMessage()?.info('官网正在火速开发中...')"
          >
            isme.top
          </a>
        </template>

        <p class="opacity-60">
          这是一款极简风格的后台管理模板，包含前后端解决方案，前端使用 Vite + Vue3 + Pinia +
          Unocss，后端使用 Nestjs + TypeOrm +
          MySql，简单易用，赏心悦目，历经十几次重构和细节打磨，诚意满满！！
        </p>
        <footer class="mt-12 flex items-center justify-end">
          <n-button
              type="primary"
              ghost
              tag="a"
              href="https://docs.isme.top/web/#/624306705/188522224"
              target="__blank"
          >
            开发文档
          </n-button>
          <n-button
              type="primary"
              class="ml-12"
              tag="a"
              href="https://github.com/zclzone/vue-naive-admin/tree/2.x"
              target="__blank"
          >
            代码仓库
          </n-button>
        </footer>
      </n-card>
    </div>
    <div class="mt-12 flex">
      <n-card class="w-50%" title="💯 特性" segmented>
        <template #header-extra>
          <span class="opacity-90 text-highlight">👏 历经十几次重构和细节打磨</span>
        </template>

        <ul class="opacity-90">
          <li class="py-4">
            🆒 使用
            <b>Vue3</b>
            主流技术栈:
            <span class="text-highlight">Vite + Vue3 + Pinia</span>
          </li>
          <li class="py-4">
            🍇 使用
            <b>原子CSS</b>
            框架:
            <span class="text-highlight">Unocss</span>
            ，优雅、轻量、易用
          </li>
          <li class="py-4">
            🤹 使用主流的
            <span class="text-highlight">iconify + unocss</span>
            图标方案，支持自定义图标，支持动态渲染
          </li>
          <li class="py-4">
            🎨 使用 Naive UI，
            <span class="text-highlight">极致简洁的代码风格和清爽的页面设计</span>
            ，审美在线，主题轻松定制
          </li>
          <li class="py-4">
            👏 先进且易于理解的文件结构设计，多个模块之间
            <b>零耦合</b>
            ，单个业务模块删除不影响其他模块
          </li>
          <li class="py-4">
            🚀
            <span class="text-highlight">扁平化路由</span>
            设计，每一个组件都可以是一个页面，告别多级路由 KeepAlive 难实现问题
          </li>

          <li class="py-4">
            🍒
            <span class="text-highlight">基于权限动态生成路由</span>
            ，无需额外定义路由，
            <span class="text-highlight">403和404可区分</span>
            ，而不是无权限也跳404
          </li>
          <li class="py-4">
            🔐 基于Redis集成
            <span class="text-highlight">无感刷新</span>
            ，用户登录态可控，安全与体验缺一不可
          </li>
          <li class="py-4">
            ✨ 基于 Naive UI 封装
            <span class="text-highlight">message</span>
            全局工具方法，支持批量提醒，支持跨页面共享实例
          </li>
          <li class="py-4">
            ⚡️ 基于 Naive UI 封装常用的业务组件，包含
            <span class="text-highlight">Page</span>
            组件、
            <span class="text-highlight">CRUD</span>
            表格组件及
            <span class="text-highlight">Modal</span>
            组件，减少大量重复性工作
          </li>
        </ul>

        <n-divider class="mb-0! mt-12!">
          <p class="text-14 opacity-60">
            👉点击
            <b class="mx-2 transition hover:text-primary">
              <a href="https://isme.top" target="_blank">更多</a>
            </b>
            查看更多实用功能，持续开发中...
          </p>
        </n-divider>
      </n-card>

      <n-card class="ml-12 w-50%" title="🛠️ 技术栈" segmented>
        <!--        <VChart :option="skillOption" autoresize />-->
      </n-card>
    </div>

    <n-card class="mt-12" title="⚡️ 趋势" segmented>
      <!--      <VChart :option="trendOption" :init-options="{ height: 400 }" autoresize />-->
    </n-card>
  </CommonAppPage>
</template>

<style lang="less" scoped>
.viewMount {
  width: 100%;
  height: 300px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06),
  0 5px 12px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid #efeff5;
  .chart-header {
    padding: 0 10px;
    border-bottom: 1px solid #e5e6e7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .left-title {
      display: flex;
      color: #3a4446;
    }
    .right-unit {
      color: #fff;
      padding: 1px 6px;
      border-radius: 2px;
    }
  }
}
</style>
