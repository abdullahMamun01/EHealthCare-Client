import React from "react";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />;
interface SubmitButtonProps {
  loading?: boolean;
  buttonText?: string;
  loadingText?: string;
  disabled?: boolean;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading = false,
  buttonText = "Submit",
  loadingText = "Submitting...",
  disabled = false,
 className="w-full !bg-blue-500 mt-4 hover:!bg-blue-600 !py-5 !text-white"
}) => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={disabled || loading}
      className={className}
    >
      {loading && <Spin indicator={antIcon} size="small"  />}
      {loading ? loadingText : buttonText}
    </Button>
  );
};

export default SubmitButton;
