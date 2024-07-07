import React from "react";
import { css } from "@emotion/css";
import { Button, Flex, InputRef, Space, message, theme } from "antd";
import { Publish } from "./toolbar/publish";
import { Priview } from "./toolbar/preview";
import { ToolBar } from "./toolbar";
import { ConfigSettings } from "../common/settings";
import { ProFormText } from "@ant-design/pro-components";
import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import { useBoolean } from "ahooks";
import { usePageInfo } from "../stores/usePageInfo";

export const Header: React.FC = (): React.ReactNode => {
  const inputRef = React.useRef<InputRef>(null)
  const { token } = theme.useToken();
  const [editable, { setTrue, setFalse }] = useBoolean(false);
  const { title, onChange } = usePageInfo (selector =>({
    title: selector.title,
    onChange: selector.onChange
  }))

  const classes = {
    header: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      height: 45,
      border: `1px solid ${token.colorBorderSecondary}`,
      paddingInline: token.paddingXS,
    }),
    notice: css({
      textAlign: "center",
    }),
  };

  return (
    <div className={classes.header}>
      <Flex gap={4} align="center">
        <Space.Compact>
          <ProFormText
            noStyle
            readonly={!editable}
            fieldProps={{
              ref: inputRef,
              allowClear: false,
              style: {
                width: 260,
              },
              defaultValue: title,
              value: editable ? undefined : title
            }}
          />
        </Space.Compact>
        {editable ? (
          <Button icon={<CheckOutlined />} onClick={() => {
            const val = inputRef.current?.input?.value
            onChange('title', val || '- -')
            setFalse()
            message.success("修改标题成功")
          }} />
        ) : (
          <Button
            size="small"
            type="text"
            icon={<EditOutlined />}
            onClick={() => setTrue()}
          />
        )}
      </Flex>
      <ToolBar />
      <Flex gap={6} justify="end" align="center">
        <ConfigSettings />
        <Priview />
        <Publish />
      </Flex>
    </div>
  );
};
