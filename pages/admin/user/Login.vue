<template>
  <div class="login-container flex items-center justify-center p-[20px]">
    <div class="login-box w-[960px] h-[560px] md:w-[100%] md:px-[50px] px-[80px] py-[30px]">
      <div class="flex items-center justify-center md:hidden">
        <img :src="LoginPic" alt="login-pic" />
      </div>
      <div class="flex justify-center w-[360px] md:w-[100%] flex-col items-center space-y-8">
        <div class="space-y-2">
          <div class="flex justify-center items-center space-x-[10px]">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45">
              <path
                  d="M228.364788 380.401625c0-20.948412 11.370167-40.019574 29.20405-49.277834l235.061667-136.228678 2.346563-1.237279c14.079381-6.762369 30.292002-6.719705 46.525955 1.322608l235.168329 137.103307c18.559184 9.044936 30.398664 28.500081 30.398664 49.832476l0.426648 272.905337c0 21.033742-11.476829 40.232898-28.436084 48.851186l-242.165354 135.290053a50.643107 50.643107 0 0 1-42.792786 1.621262l-3.178527-1.535933L99.239798 624.572225C80.445957 615.697948 68.222494 596.072144 68.222494 574.249104l0.959958-294.643048c0-21.417725 11.903477-40.894202 28.436084-48.851186L492.395848 5.058124c14.100713-6.869031 30.377331-6.869031 46.611285 1.130617l387.609628 223.499509c18.559184 9.023603 30.441329 28.500081 30.441328 49.917806v452.374781c0 21.183069-11.647488 40.467554-28.286756 48.765856l-392.004102 223.563506a50.643107 50.643107 0 0 1-43.048774 1.215946l-2.858541-1.407938-237.57889-130.767585-100.262259 89.638727c-21.076407 20.905748-54.397609 20.052452-74.450061-1.919916A56.424186 56.424186 0 0 1 64.020012 923.033772V754.145196c0-20.137781 15.593981-36.435732 34.835802-36.435732s34.835802 16.29795 34.835802 36.435732v130.340937l81.063104-72.48748a51.005758 51.005758 0 0 1 56.530848-10.900855l2.837209 1.386606 239.754794 131.962199 373.530247-213.025302V290.165591L514.666869 75.284371 138.811391 290.165591l-0.89596 273.331985 90.449357 49.51249V380.401625z m86.716188 173.752362h47.54991l73.511435 93.585219a42.046152 42.046152 0 0 0 60.648001 6.399719c6.954361-5.866409 11.946142-13.823392 14.33537-22.804331l46.077974-173.795027 57.87479 96.635752h95.398473c17.215243 0 31.16663-14.506029 31.16663-32.339911 0-17.876548-13.951387-32.339912-31.145298-32.339912h-60.775995l-62.78124-104.827392a43.304763 43.304763 0 0 0-25.193559-19.519142c-22.953658-6.549045-46.675282 7.466338-52.989671 31.273292l-47.848563 180.472067-68.690314-87.398825H315.102309c-17.215243 0-31.16663 14.463364-31.16663 32.339912 0 17.855215 13.951387 32.318579 31.145297 32.318579z"

              ></path>
            </svg>
            <n-gradient-text :gradient="gradient" class="text-[24px]">Admin Pro</n-gradient-text>
          </div>
          <div class="text-[#5a6f7e]">Admin Pro 中后台前端/设计解决方案</div>
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
                <Icon name="mdi:user-outline"  />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="formModel.password" round placeholder="请输入密码">
              <template #prefix>
                <Icon name="material-symbols:lock-outline"  />
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
            <n-button type="primary" size="large" round @click="handleSubmitForm" :loading="submitLoading" block>登录</n-button>
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
import LoginPic from "@/assets/images/login-pic.png";

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
  username: { required: true, message: "请输入用户名", trigger: "blur" },
  password: { required: true, message: "请输入密码", trigger: "blur" },
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
  @apply shadow-md rounded-xl bg-white  flex justify-between;
  }
}
</style>
