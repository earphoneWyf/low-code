import React from "react";
import { createReactMaterial } from "@huos/core";
import { Input, InputProps, Segmented } from "antd";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";

export const MUI_Input = createReactMaterial<InputProps>(
  (props: InputProps, ref: any) => (
    <div ref={ref} style={{ display: "inline-block" }}>
      <Input {...props} />
    </div>
  ),
  {
    displayName: "输入框",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="disabled" label="禁用组件" />
          <BooleanSetter name="showCount" label="展示字数" />
          <BooleanSetter name="allowClear" label="清除内容" />

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
          <StringSetter name="defaultValue" label="默认值" />
          <StringSetter name="id" label="组件ID" />
          <StringSetter name="type" label="输入类型" initialValue="text" />
          <StringSetter name="value" label="输入内容" initialValue="hello..." />
        </React.Fragment>
      ),
      icon: () => (
        <img
        src="data:image/svg+xml;base64,Cgo8c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIzIiB5PSI2IiB3aWR0aD0iNDIiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjRkNGQ0ZDIiBzdHJva2U9IiNERURFREUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHBhdGggc3Ryb2tlPSIjRURFREVEIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTkgMjdoMzBNOSAzMmgzME05IDIyaDMwIi8+PHBhdGggc3Ryb2tlPSIjMzE3MEY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTE1IDIyaDUiLz48cGF0aCBzdHJva2U9IiNFN0I2RTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjQgMjdoOCIvPjxwYXRoIHN0cm9rZT0iIzMxNzBGOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xNCAzMmg4Ii8+PHBhdGggc3Ryb2tlPSIjRURFREVEIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTkgMzdoMTUiLz48cGF0aCBkPSJNMTAuMjQgMTAuMTg2YTEgMSAwIDAgMSAuNTgtLjE4Nmg2LjY4YTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxaC02LjY4YTEgMSAwIDAgMS0uNTgtLjE4NmwtMi4xLTEuNWExIDEgMCAwIDEgMC0xLjYyOGwyLjEtMS41WiIgZmlsbD0iI0U3QjZFNCIvPjxwYXRoIGQ9Ik0yMy4yNCAxMC4xODZhMSAxIDAgMCAxIC41OC0uMTg2aDYuNjhhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTYuNjhhMSAxIDAgMCAxLS41OC0uMTg2bC0yLjEtMS41YTEgMSAwIDAgMSAwLTEuNjI4bDIuMS0xLjVaIiBmaWxsPSIjMzE3MEY5Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMi41IiByPSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMjQiIGN5PSIxMi41IiByPSIxIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg=="
        />
      ),
    },
  }
);
