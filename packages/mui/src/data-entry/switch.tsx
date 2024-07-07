import React from "react";
import { createReactMaterial } from "@huos/core";
import { Switch, SwitchProps, Segmented } from "antd";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";

export const MUI_Switch = createReactMaterial<SwitchProps>(
  (props: SwitchProps, ref: any) => (
    <div ref={ref} style={{ display: "inline-block" }}>
      <Switch {...props} />
    </div>
  ),
  {
    displayName: "开关",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="autoFocus" label="自动聚焦" />
          <BooleanSetter name="checked" label="当前选中" />
          <BooleanSetter name="defaultChecked" label="默认选中" />
          <BooleanSetter name="disabled" label="是否禁用" />
          <BooleanSetter name="loading" label="加载开关" />

          <NumberSetter name="maxLength" label="最大长度" />
          <RenderFieldSetter name="status" label="状态">
            <Segmented
              options={[
                {
                  label: "错误",
                  value: "error",
                },
                {
                  label: "警告",
                  value: "warning",
                },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter name="size" label="开关大小" initialValue="default">
            <Segmented
              options={[
                {
                  label: "默认",
                  value: "default",
                },
                {
                  label: "小",
                  value: "small",
                },
              ]}
            />
          </RenderFieldSetter>
          <StringSetter name="checkedChildren" label="开启文本" />
          <StringSetter name="unCheckedChildren" label="关闭文本" />
        </React.Fragment>
      ),
      icon: () => (
        <img
         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iNy41IiB5PSIyMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iNyIgcng9IjMuNSIgZmlsbD0iIzMxNzBGOSIgc3Ryb2tlPSIjMzE3MEY5Ii8+PHJlY3QgeD0iMTUiIHk9IjIzIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiByeD0iMiIgZmlsbD0iI2ZmZiIvPjxwYXRoIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yNSAyNWgxNiIvPjwvc3ZnPgo="
        />
      ),
    },
  }
);
