import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Skeleton, SkeletonProps } from "antd";

export const MUI_Skeleton = createReactMaterial<SkeletonProps>(
  (props: SkeletonProps, ref: any) => (
    <div ref={ref}>
      <Skeleton  {...props} />
    </div>
  ),
  {
    displayName: "骨架屏",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="active" label="激活动画" />
          <BooleanSetter name="avatar" label="头像占位" />
          <BooleanSetter name="loading" label="加载状态" />
          <BooleanSetter name="paragraph" label="段落站位" />
          <BooleanSetter name="round" label="显示圆角" />
          <BooleanSetter name="title" label="标题站位" />

        </React.Fragment>
      ),
      icon: () => <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMy4yIiB5PSIzLjIiIHdpZHRoPSI0MS42IiBoZWlnaHQ9IjQxLjYiIHJ4PSI0LjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNOCAxMHY1YTIgMiAwIDAgMCAyIDJoMjhhMiAyIDAgMCAwIDItMnYtNWEyIDIgMCAwIDAtMi0ySDEwYTIgMiAwIDAgMC0yIDJaTTggMjJ2NWEyIDIgMCAwIDAgMiAyaDI4YTIgMiAwIDAgMCAyLTJ2LTVhMiAyIDAgMCAwLTItMkgxMGEyIDIgMCAwIDAtMiAyWk04IDM0djVhMiAyIDAgMCAwIDIgMmgyOGEyIDIgMCAwIDAgMi0ydi01YTIgMiAwIDAgMC0yLTJIMTBhMiAyIDAgMCAwLTIgMloiIGZpbGw9IiNFRUUiLz48L3N2Zz4K" />
    },
  },
  {
    children: "默认按钮",
  }
);
