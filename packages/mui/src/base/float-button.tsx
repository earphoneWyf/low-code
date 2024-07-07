import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { FloatButton, FloatButtonProps } from "antd";
import { floatBtnIcon } from '@/assets/icon'

export const MUI_FloatButton = createReactMaterial<FloatButtonProps>(
  (props: FloatButtonProps, ref: any) => (
    <FloatButton ref={ref} {...props} />
  ),
  {
    displayName: "悬浮按钮",
    related: {
      settingRender: () => (
        <React.Fragment>
          111
        </React.Fragment>
      ),
      icon: () => <img src={floatBtnIcon} height="100%" width="100%" />
    },
  }
);
