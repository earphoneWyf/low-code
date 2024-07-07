import React from "react";
import { ColorPicker, ColorPickerProps, Input, InputProps } from "antd";
import { RenderFieldSetter, SetterProps } from "..";

export const ColorPickerSetter: React.FC<SetterProps<ColorPickerProps>> = ({
  filedProps,
  ...props
}) => {
  return (
    <RenderFieldSetter
      getValueFromEvent={(_, color) => color}
      initialValue="#00000000"
      {...props}
    >
      <ColorPicker
        placement="bottomRight"
        format="rgb"
        showText
        {...filedProps}
      />
    </RenderFieldSetter>
  );
};
