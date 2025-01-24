import Mock from "mockjs";

// 确保 Mock.js 只在客户端启用

// 模拟数据
Mock.mock("/api/user", "get", {
  code: 200,
  message: "success",
  data: {
    userId: "@id",
    userName: "@name",
    userAge: "@integer(18, 60)",
    userEmail: "@email",
  },
});

console.log("Mock.js 插件已加载并启动");

export default defineNuxtPlugin((nuxtApp) => {
  // 仅在客户端初始化 Mock.js
});
