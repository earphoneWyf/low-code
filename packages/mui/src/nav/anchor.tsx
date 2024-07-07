import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Anchor, AnchorProps } from '@mantine/core'
import { Segmented, Select } from "antd";

export const Mant_Anchor = createReactMaterial<AnchorProps>(
  (props: AnchorProps, ref: any) => (
    <Anchor ref={ref} {...props} />
  ),
  {
    displayName: "按钮",
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          111
        </React.Fragment>
      ),
      icon: () => <img height={30} width={30} src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original" />
    },
  },
  {
    children: "默认按钮",
  }
);
