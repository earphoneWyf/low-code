import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { InputNumber, InputNumberProps, Segmented } from "antd";

export const MUI_InputNumber = createReactMaterial<InputNumberProps>(
  (props: InputNumberProps, ref: any) => (
    <div ref={ref} style={{ display: "inline-block" }}>
      <InputNumber {...props} />
    </div>
  ),
  {
    displayName: "数值输入",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="readOnly" label="只读" />
          <BooleanSetter name="stringMode" label="字符模式" />
          <BooleanSetter name="disabled" label="禁用属性" />
          <BooleanSetter name="keyboard" label="键盘快捷键" />
          <BooleanSetter name="autoFocus" label="自动聚焦" />
          <BooleanSetter name="changeOnBlur" label="失焦触发" />
          <BooleanSetter name="changeOnWheel" label="滚动修改" />
          <BooleanSetter name="controls" label="小部件" />
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
          <RenderFieldSetter name="size" label="按钮形状" initialValue="middle">
            <Segmented
              options={[
                {
                  label: "小",
                  value: "small",
                },
                {
                  label: "中",
                  value: "middle",
                },
                {
                  label: "大",
                  value: "large",
                },
              ]}
            />
          </RenderFieldSetter>
          <RenderFieldSetter initialValue="text" name="variant" label="形态">
            <Segmented
              options={[
                {
                  label: "文本",
                  value: "text",
                },
                {
                  label: "实体",
                  value: "outlined",
                },
                {
                  label: "大",
                  value: "contained",
                },
              ]}
            />
          </RenderFieldSetter>
          <StringSetter name="decimalSeparator" label="小数点" />
          <StringSetter name="placeholder" label="占位符" />
          <NumberSetter name="defaultValue" label="默认值" />
          <NumberSetter name="max" label="最大值" />
          <NumberSetter name="min" label="最小值" />
          <NumberSetter name="precision" label="数字精度" />
          <NumberSetter name="step" label="步进大小" initialValue={1} />
          <NumberSetter name="value" label="输入值" initialValue={1} />
          <RenderFieldSetter name="parser" isExpression={false} />
        </React.Fragment>
      ),
      icon: () => (
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMSIgeT0iMTUiIHdpZHRoPSI0NiIgaGVpZ2h0PSIxOCIgcng9IjMiIGZpbGw9IiNGQ0ZDRkMiIHN0cm9rZT0iI0RFREVERSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNNC41IDI2LjA2aDguNTU1TTExLjYyOSAxOS41bC0xLjQyNiA4LjU1NU04LjA2NCAxOS41bC0xLjQyNiA4LjU1NU01LjIxMyAyMi4wNjdIMTMuNSIgc3Ryb2tlPSIjQjJCMkIyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxIDI0aDEyIi8+PHBhdGggZD0iTTM4IDIwaDEuNW0xLjUgMGgtMS41bTAgMHY4bTAgMEgzOG0xLjUgMEg0MSIgc3Ryb2tlPSIjOTQ5NDk0IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+Cg=="
        />
      ),
    },
  }
);
