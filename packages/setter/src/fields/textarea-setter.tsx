import React from 'react';
import { Input, InputProps } from "antd";
import { RenderFieldSetter, SetterProps } from "..";
import { TextAreaProps } from 'antd/es/input';

export const TextAreaSetter: React.FC<SetterProps<TextAreaProps>> = ({ filedProps, ...props }) => {
  return (
    <RenderFieldSetter {...props} >
      <Input.TextArea placeholder="请输入" {...filedProps} />
    </RenderFieldSetter>
  )
}