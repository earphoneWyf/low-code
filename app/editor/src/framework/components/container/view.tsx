import React from "react";
import { ReactMaterialViewType } from "@huos/core";
import { ConfigProvider } from "antd";

export const ProviderView: ReactMaterialViewType<
  React.CSSProperties & {
    children: React.ReactNode;
    style: React.CSSProperties;
  }
> = ({ children, style,  ...props }, ref: any) => {

  console.log(props, 'props')

  return (
    <ConfigProvider getPopupContainer={(node) => {
      console.log(node, 'node')
      return document.body
    }} >
      <div ref={ref} style={{ ...props, ...style, boxSizing: 'border-box' }}>
      {children}
    </div>
    </ConfigProvider>
  );
};
