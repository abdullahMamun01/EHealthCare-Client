'use client'

import {  message } from 'antd';

const Toast= () => {
  const [messageApi] = message.useMessage();

  const success = (message: string) => {
    messageApi.open({
      type: 'success',
      content: message,
    });
  };

  const error = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  const warning = (message: string) => {
    messageApi.open({
      type: 'warning',
      content: message,
    });
  };

  return {
    success,
    error,
    warning
  }
};

export default Toast;