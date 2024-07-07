import React from "react";
import { createReactMaterial } from "@huos/core";
import { Segmented, Select, Space, SpaceProps } from "antd";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { ProFormDependency } from "@ant-design/pro-components";
import { spaceIcon } from "@/assets/icon";

export const MUI_Space = createReactMaterial<
  SpaceProps & {
    componentType: "Compact" | "Space";
  }
>(
  (
    {
      componentType,
      ...props
    }: SpaceProps & {
      componentType: "Compact" | "Space";
    },
    ref: any
  ) => {
    const SpaceComponent = componentType === "Compact" ? Space.Compact : Space;

    return (
      <div ref={ref} style={{ display: "inline-block" }}>
        <SpaceComponent style={{ width: "100%" }} {...(props as any)}>
          {props.children}
        </SpaceComponent>
      </div>
    );
  },
  {
    displayName: "间距",
    props: {
      style: {
        width: "100%",
      },
    },
    custom: {
      useCanvas: true,
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter
            isExpression={false}
            name="componentType"
            label="组件模式"
            initialValue="Space"
          >
            <Segmented
              options={[
                {
                  label: "默认",
                  value: "Space",
                },
                {
                  label: "紧凑",
                  value: "Compact",
                },
              ]}
            />
          </RenderFieldSetter>
          <BooleanSetter name="wrap" label="自动换行" />
          <RenderFieldSetter name="direction" label="方向">
            <Segmented
              options={[
                {
                  label: "水平",
                  value: "horizontal",
                },
                {
                  label: "垂直",
                  value: "vertical",
                },
              ]}
            ></Segmented>
          </RenderFieldSetter>
          <StringSetter name="size" label="间距大小" />
          <ProFormDependency name={["componentType"]}>
            {({ componentType }) => {
              console.log(componentType, "componentType");
              if (componentType === "Compact") {
                return (
                  <React.Fragment>
                    <BooleanSetter name="block" label="块级元素" />
                  </React.Fragment>
                );
              }
            }}
          </ProFormDependency>
          <RenderFieldSetter name="align" label="对齐方式">
            <Select
              style={{
                width: "100%",
              }}
              options={toOptions(["start", "end", "center", "baseline"])}
            />
          </RenderFieldSetter>
        </React.Fragment>
      ),
      icon: () => <img src={spaceIcon} />,
    },
  }
);
