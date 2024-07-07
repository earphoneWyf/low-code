import React from "react";
import { createReactMaterial } from "@huos/core";
import { Card, CardProps, Segmented } from "antd";
import { BooleanSetter, RenderFieldSetter, StringSetter } from "@huos/setter";
import { Element } from '@craftjs/core'
import { MUI_Flex } from "@/layout";
import { cardIcon } from "@/assets/icon";

export const MUI_Card = createReactMaterial<CardProps>(
  (props: CardProps, ref: any) => (
    <Card ref={ref} {...props} extra={<Element canvas is={MUI_Flex} id="CardExtra" />} >
      <Element canvas is={MUI_Flex} id="CardTitle" />
    </Card>
  ),
  {
    displayName: "卡片",
    props: {
      title: '默认标题'
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="loading" label="加载中" />
          <BooleanSetter name="bordered" label="显示边框" />
          <BooleanSetter name="hoverable" label="可悬浮" />
          <StringSetter name="type" label="卡片类型" />
          <StringSetter name="title" label='标题' />
          <RenderFieldSetter name="size" label="大小">
            <Segmented options={[{
              label: '默认',
              value: 'default',
            }, {
              label: '缩小',
              value: 'small'
            }]} />
          </RenderFieldSetter>
          
        </React.Fragment>
      ),
      icon: () => <img height="100%" width="100%"  src={cardIcon}  />
    },
  }
);
