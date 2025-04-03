import { ConfigProvider } from "antd";
import { ToastProvider } from "./ToastProvider";
// import zhCN from "antd/es/locale/zh_CN";

export default function AntProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            controlHeightLG: 50,
            controlHeight: 35,
            controlHeightSM: 24,
            paddingInlineLG: 24,
            paddingInline: 16,
            paddingInlineSM: 8,
            borderRadiusLG: 8,
            borderRadius: 6,
            borderRadiusSM: 4,
          },
        },
      }}
    >
      <ToastProvider>{children}</ToastProvider>
    </ConfigProvider>
  );
}
