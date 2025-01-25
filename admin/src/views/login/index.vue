<template>
  <div class="w-full flex h-screen items-center justify-center login-background">
    <div class="w-0 flex flex-col justify-start items-center md:w-1/2">
      <div class="text-4xl font-bold text-blue-600 hidden md:block">星河购物管理后台</div>
    </div>
    <div class="md:w-5/12">
      <a-card class="login-card shadow-md">
        <a-form
          :model="loginForm"
          class="w-full mx-auto px-4 pt-4"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名' }]"
          >
            <a-input v-model:value="loginForm.username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input-password v-model:value="loginForm.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="loginForm.remember"
                >记住我</a-checkbox
              >
            </a-form-item>
            <span class="float-right w-32 space-x-4">
              <a href="">忘记密码</a>
              <a href="">立即注册</a>
            </span>
          </a-form-item>

          <a-form-item class="flex justify-center">
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="w-48"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
    <div class="w-0 md:w-1/12"></div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { LoginForm } from "@/api/interfaces/user";
import SystemMessage from "@/utils/message";

const loginForm: LoginForm = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: LoginForm) => {
  SystemMessage.success("登录成功");
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.error("登录失败", errorInfo);
  SystemMessage.error("登录失败，请重试");
};
const disabled = computed(() => {
  return !(loginForm.username && loginForm.password);
});
</script>
<style lang="scss" scoped>
.login-background{
    background-image: url("@/assets/login/login-background.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.login-card {
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 28rem;
  min-width: 22rem;
  height: 20rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-card-body {
    width: 100%;
  }
}
</style>
