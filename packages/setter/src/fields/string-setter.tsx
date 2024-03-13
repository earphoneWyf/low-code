import React from 'react';
import { Input, InputProps } from "antd";
import { RenderFieldSetter, SetterProps } from '@/common/render-filed-setter';

export const StringSetter: React.FC<SetterProps<InputProps>> = ({ filedProps, ...props }) => {
    return (
        <RenderFieldSetter {...props} >
            <Input placeholder="请输入" {...filedProps} />
        </RenderFieldSetter>
    )
}