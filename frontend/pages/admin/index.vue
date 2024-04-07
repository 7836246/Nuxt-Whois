<template>
  <div class="login-container flex items-center justify-center p-[20px]">
    <div class="login-box w-[960px] h-[560px] md:w-[100%] md:px-[50px] px-[80px] py-[30px]">
      <div class="flex items-center justify-center md:hidden">
        <img :src="LoginPic" alt="login-pic"/>
      </div>
      <div class="flex justify-center w-[360px] md:w-[100%] flex-col items-center space-y-8">
        <div class="space-y-2">
          <div class="flex justify-center items-center space-x-[10px]">
            <n-gradient-text :gradient="gradient" class="text-[24px] p-5">Nuxt Whois 后台管理</n-gradient-text>
          </div>
        </div>
        <n-form
            ref="formRef"
            :model="formModel"
            :rules="formRules"
            label-placement="left"
            size="large"
            class="w-[100%]"
            :show-require-mark="false"
            :show-label="false"
        >
          <n-form-item path="username">
            <n-input v-model:value="formModel.username" round placeholder="请输入用户名">
              <template #prefix>
                <Icon name="mdi:user-outline"/>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="formModel.password" round placeholder="请输入密码">
              <template #prefix>
                <Icon name="material-symbols:lock-outline"/>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <div class="flex justify-between w-[100%] px-[2px]">
              <div class="flex-initial">
                <n-checkbox v-model:checked="autoLogin">自动登录</n-checkbox>
              </div>
              <div class="flex-initial order-last">
                <n-button text type="primary">忘记密码</n-button>
              </div>
            </div>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" size="large" round @click="handleSubmitForm" :loading="submitLoading" block>登录
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
})
import LoginPic from "assets/images/login-pic.png";

const router = useRouter();
const message = useMessage();

const autoLogin = ref(false);
const submitLoading = ref(false);
const formRef = ref(null);
const formModel = reactive({
  username: "",
  password: "",
});

const formRules = {
  username: {required: true, message: "请输入用户名", trigger: "blur"},
  password: {required: true, message: "请输入密码", trigger: "blur"},
};

const gradient = {
  deg: 92.06,
  from: "#33c2ff 0%",
  // to: `${appStore.appTheme} 100%`,
};

const handleSubmitForm = (e) => {

};
</script>

<style lang="less" scoped>
.login-container {
  background: linear-gradient(-135deg, #d765cf, #495fd1);
  min-height: 100%;

  .login-box {
  @apply shadow-md rounded-xl bg-white flex justify-between;
  }
}
</style>
