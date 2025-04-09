'use client';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';

type ConfirmDeleteOptions = {
  title: string;
  content: string;
  onConfirm: () => Promise<void>;
};

const showConfirmDelete = ({ title, content, onConfirm }: ConfirmDeleteOptions) => {
  Modal.confirm({
    title,
    icon: <ExclamationCircleFilled />,
    content,
    okText: 'Yes',
    cancelText: 'No',
    okType: 'danger',
    async onOk() {
      try {
        await onConfirm();
      } catch {
        return Promise.reject(); // keep modal open if deletion fails
      }
    },
  });
};

export default showConfirmDelete;
