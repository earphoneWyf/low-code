import React from "react";
import { Badge, Card, Flex, Typography, theme } from "antd";
import { css } from "@emotion/css";

export interface MaterialRecordProps {
  icon: React.ReactNode;
  name: string;
}

const classes = {
  card: css({
    width: "100%",
    height: 67,
    cursor: "grab",
    position: 'relative',
    transition: '.15s ease-in-out',
    transitionProperty: 'transform',
    willChange: 'transform',
    borderRadius: 8,
    background: '#f9f9f9',
    overflow: 'hidden',
    border: `1px solid ${theme.getDesignToken().colorBorderSecondary}`,
    '&:hover': {
      border: `1px solid ${theme.getDesignToken().colorPrimary}`,
      img: {
        transform: 'scale(1.2)',
        transition: 'all 0.5s'
      }
    },
    'img': {
      height: '100%',
      width: '100%',
      objectFit: 'none'
    }
  }),
};

export const MaterialRecord = React.forwardRef<
  HTMLDivElement,
  MaterialRecordProps
>((props, ref) => {
  return (
    <Flex ref={ref} vertical align="center" gap={8} wrap="wrap">
      <Flex justify="center" align="center" className={classes.card}>
      {props.icon}
      </Flex>
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
          tooltip: true,
        }}
        type="secondary"
        style={{ fontSize: 12, maxWidth: "6em" }}
      >
        {props.name}
      </Typography.Paragraph>
    </Flex>
  );
});
