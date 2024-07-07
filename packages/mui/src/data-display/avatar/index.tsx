import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  NumberSetter,
  RenderFieldSetter,
  StringSetter,
  TextAreaSetter,
  toOptions,
} from "@huos/setter";
import { Avatar , AvatarProps, Segmented } from "antd";

export const MUI_Avatar = createReactMaterial<AvatarProps>(
  (props: AvatarProps, ref: any) => (
    <Avatar ref={ref} {...props}>
      {props.children}
    </Avatar>
  ),
  {
    displayName: "头像",
    related: {
      settingRender: () => (
        <React.Fragment>
          <BooleanSetter name="draggable" label="允许拖动" />
          <RenderFieldSetter initialValue="circle" name="shape" label="形状样式" >
            <Segmented options={['circle', 'square']} />
          </RenderFieldSetter>
          <NumberSetter initialValue={4} name="gap" label="间隔距离" />
          <NumberSetter name="size" label="头像大小" />
          <TextAreaSetter name="src" label="图片内容" />
          <StringSetter name="srcSet" label="响应式资源地址" />
          <StringSetter name="$$children" label="文字内容" />
        </React.Fragment>
      ),
      icon: () => <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB4PSI1IiB5PSIxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMi42NjciIGZpbGw9IiNCM0IzQjMiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMTguNjY3QTIuNjY3IDIuNjY3IDAgMDE3LjY2NyAxNmgxMC42NjZBMi42NjcgMi42NjcgMCAwMTIxIDE4LjY2N3YxMC42NjZjMCAuNjk0LS4yNjUgMS4zMjYtLjcgMS44QzE5LjA1IDI4LjY5OCAxNi4yNTIgMjcgMTMgMjdjLTMuMjUxIDAtNi4wNSAxLjY5Ny03LjMgNC4xMzRhMi42NTcgMi42NTcgMCAwMS0uNy0xLjhWMTguNjY2ek0xNyAyMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6IiBmaWxsPSIjRURFREVEIi8+CiAgPHJlY3QgeD0iNCIgeT0iMTUiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjkiIHN0cm9rZT0iI0ZBRkFGQSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBhdGggc3Ryb2tlPSIjREVERURFIiBzdHJva2Utd2lkdGg9IjEuODc5IiBkPSJNMjcgMjIuMDYxaDE1TTI3IDI3LjA2MWgxMCIvPgo8L3N2Zz4K" />
    },
  }
);
