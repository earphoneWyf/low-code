import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
} from "@huos/setter";
import { Alert, AlertProps, Select } from "antd";

export const MUI_Alert = createReactMaterial<AlertProps>(
  (props: AlertProps, ref: any) => (
    <div ref={ref} style={{ display: 'inline-block' }} >
      <Alert {...props}/>
    </div>
  ),
  {
    displayName: "警告提示",
    props: {
      message: 'Message Text',
      description: 'Description Text'
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name='showIcon' label="显示图标" />
          <BooleanSetter name='banner' label="公告模式" />
          <BooleanSetter name='closable' label="关闭配置" />
          <StringSetter name="description" label="提示描述"/>
          <StringSetter name="message" label="提示内容"/>
          <RenderFieldSetter name="type" label="提示类型" >
            <Select style={{ width: '100%' }} options={[
              {
                label: '成功',
                value: 'success'
              },
              {
                label: '信息',
                value: 'info'
              },
              {
                label: '警告',
                value: 'warning'
              },{
                label: '错误',
                value: 'error'
              }
            ]} />
          </RenderFieldSetter>
          
        </React.Fragment>
      ),
      icon: () => <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMy4yIiB5PSIxNC4yIiB3aWR0aD0iNDIuNiIgaGVpZ2h0PSIyMC42IiByeD0iNC44IiBmaWxsPSIjZmZmIiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIyNCIgcj0iNiIgZmlsbD0iI0ZCRURDOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMjgiIHI9IjEiIGZpbGw9IiNDMDg4MTEiLz48cGF0aCBkPSJNMTIgMjB2NiIgc3Ryb2tlPSIjQzA4ODExIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBzdHJva2U9IiM4RThFOEUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIyIDIyaDExIi8+PHBhdGggc3Ryb2tlPSIjREVERURFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMiAyN2gxOSIvPjwvc3ZnPgo=' />
    },
  },
);
