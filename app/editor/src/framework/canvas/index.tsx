import { theme, Drawer, Button } from "antd";
import { css } from "@emotion/css";
import { IFrame as RenderViewSanBox } from "./iframe";
import { DocumentNodes } from "./document";
import { useEditorKeyPress } from "../hooks/use-keyword-panel";
import { Devtools } from "./devtools";
import React from "react";
import { useBoolean } from "ahooks";
import { CloseOutlined } from "@ant-design/icons";

export const Canvas = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { token } = theme.useToken();
    const [open, { toggle }] = useBoolean(true)

    useEditorKeyPress();

    const classes = {
        main: css({
            borderLeft: `1px solid ${token.colorBorderSecondary}`,
            borderRight: `1px solid ${token.colorBorderSecondary}`,
            background: "#f9fafb",
            height: "100%",
            padding: token.paddingSM,
            position: 'relative'
        }),
        canvas: css({
            height: "100%",
            width: "100%",
            padding: token.paddingSM,
        }),
    };

    return (
        <div ref={ref} className={classes.main}>
            <Devtools />
            {/* <ToolBar /> */}
            <RenderViewSanBox>
                <DocumentNodes />
            </RenderViewSanBox>
        </div>
    );
};
