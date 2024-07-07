import React from "react";
import { createReactMaterial } from "@huos/core";
import { AutoComplete, AutoCompleteProps, Segmented } from "antd";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";

export const MUI_Auto = createReactMaterial<AutoCompleteProps>(
  (props: AutoCompleteProps, ref: any) => (
    <div ref={ref} style={{ width: 'max-content', display: 'inline-block' }} >
      <AutoComplete {...props}/>
    </div>
  ),
  {
    displayName: "自动输入",
    props: {
      defaultValue: '默认名称',
      style: {
        minWidth: 300
      }
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="allowClear" label="清除按钮" />
          <BooleanSetter name="autoFocus" label="获取焦点" />
          <BooleanSetter name="disabled" label="禁用选项" />
          <BooleanSetter name="backfill" label="自动输入" />
          <BooleanSetter name="open" label="展开下拉" />
          <BooleanSetter
            initialValue={true}
            name="defaultActiveFirstOption"
            label="默认高亮(首行)"
          />
          <BooleanSetter name="defaultOpen" label="默认展开菜单" />
          <RenderFieldSetter name="status" label="状态">
            <Segmented options={["error", "warning"]} />
          </RenderFieldSetter>
          <StringSetter name="defaultValue" label="默认内容" />
          <StringSetter name="popupClassName" label="下拉className" />
          <StringSetter name="placeholder" label="输入框提示" />
          <NumberSetter name="dropdownMatchSelectWidth" label="下拉宽度" />
          <RenderFieldSetter name="options" label="选项" />
        </React.Fragment>
      ),
      icon: () => (
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBmaWxsPSIjQjJCMkIyIj48cGF0aCBkPSJNNDQuMDc4IDE5LjU5YS44MzMuODMzIDAgMCAxIDEuMTc4IDBsMS4xNzkgMS4xNzhhLjgzMy44MzMgMCAwIDEgMCAxLjE3OGwtLjU5LjU5LTIuMzU2LTIuMzU4LjU4OS0uNTg5Wk00Mi44OTkgMjAuNzY4bDIuMzU3IDIuMzU2LTQuNzE1IDQuNzE1LTIuMzU2LTIuMzU3ek0zNy41OTYgMjYuMDcxbDIuMzU3IDIuMzU3LTIuMzM0LjQ2N2EuNDE3LjQxNyAwIDAgMS0uNDktLjQ5bC40NjctMi4zMzRaIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xNiAyNGgxMiIvPjxwYXRoIGQ9Ik0zLjI1IDIyLjA3NHYtMS4yNzdjMC0uMzAyLjI0NS0uNTQ3LjU0Ny0uNTQ3SDdtMy43NSAxLjgyNHYtMS4yNzdhLjU0Ny41NDcgMCAwIDAtLjU0Ny0uNTQ3SDdtMCAwdjcuNW0wIDBINS4xMW0xLjg5IDBoMi4wNTEiIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcgMTkpIiBkPSJNMCAwaDEwdjEwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+Cg==" />
      ),
    },
  }
);
