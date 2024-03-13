import React from 'react';
import { Switch, SwitchProps } from "antd";
import { RenderFieldSetter, SetterProps } from '@/common/render-filed-setter';

export const BooleanSetter: React.FC<SetterProps<SwitchProps>> = ({ filedProps, ...props }) => {
    return (
        <RenderFieldSetter {...props} >
            <Switch  {...filedProps} />
        </RenderFieldSetter>
    )
}