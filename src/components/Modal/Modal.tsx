"use client";

import { Modal as AntdModal } from "antd";

interface ReusableModalProps {
  title: string;
  content: string | React.ReactNode;
  onOk: () => void;
  confirmLoading: boolean;
  children: React.ReactNode;
  cancelText?: string;
  okText?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Modal: React.FC<ReusableModalProps> = ({
  title,
  content,
  onOk,
  confirmLoading,
  children,
  cancelText,
  okText,
  open,
  onOpenChange

}) => {
//   const [open, setOpen] = useState(false);

  const showModal = () => {
    onOpenChange(true);
  };

  const handleCancel = () => {
    onOpenChange(false);

  };

  return (
    <>
      <button onClick={showModal}>{children}</button>
      <AntdModal
        title={<div className="border-b pb-3 border-gray-200">{title}</div>}
        open={open}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={cancelText}
        okText={okText}
      >
        <p className="py-2">{content}</p>
      </AntdModal>
    </>
  );
};

export default Modal;
