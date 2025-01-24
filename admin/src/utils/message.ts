// 对消息组件的封装
import { message } from "ant-design-vue";

const success = (text: string) => {
  message.success({
    content: text,
    class: "message",
    duration: 2,
  });
};
const error = (text: string) => {
  message.error({
    content: text,
    class: "message",
    duration: 2,
  });
};
const warning = (text: string) => {
  message.warning({
    content: text,
    class: "message",
    duration: 2,
  });
};

export default {
  success,
  error,
  warning,
};
