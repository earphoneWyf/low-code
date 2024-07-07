import React from "react";
import { createReactMaterial } from "@huos/core";
import {
  BooleanSetter,
  RenderFieldSetter,
  StringSetter,
  toOptions,
} from "@huos/setter";
import { Result, ResultProps, Select } from "antd";
import { Element } from '@craftjs/core'
import { MUI_Flex } from "@/layout";

export const MUI_Result = createReactMaterial<ResultProps>(
  (props: ResultProps, ref: any) => (
    <div ref={ref}>
      <Result {...props} extra={<Element canvas id="result-actions" is={MUI_Flex} />} />
    </div>
  ),
  {
    displayName: "结果状态",
    props: {
      status: 'success',
      subTitle: '我是副标题',
      title: '标题',
    },
    custom: {
      hidden: true
    },
    related: {
      settingRender: () => (
        <React.Fragment>
          <RenderFieldSetter name="status" label="结果状态">
            <Select style={{ width: '100%' }} options={toOptions(['success', 'error', 'info', 'warning', '404', '403', '500'])} />
          </RenderFieldSetter>
          <StringSetter name="title" label="标题" />
          <StringSetter name="subTitle" label="副标题" />
        </React.Fragment>
      ),
      icon: () => <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjE5IiB5MT0iOSIgeDI9IjI5IiB5Mj0iOSIgc3Ryb2tlPSIjREVERURFIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMTkiIHkxPSIyNCIgeDI9IjQzIiB5Mj0iMjQiIHN0cm9rZT0iI0RFREVERSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjE5IiB5MT0iMzgiIHgyPSIyOSIgeTI9IjM4IiBzdHJva2U9IiNERURFREUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSI5LjE3MjQxIiBoZWlnaHQ9IjkuMTcyNDEiIHJ4PSI0LjU4NjIxIiBmaWxsPSIjRDU0RDJGIi8+CjxwYXRoIGQ9Ik03Ljc4MDM5IDcuNjcwMTVMMTEuNTUxNiAxMS41NTE2TTcuNjIwNjEgMTEuNTAyMUwxMS4zOTE5IDcuNjIwNjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4zMTAzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNzg1XzEzODMxKSI+CjxyZWN0IHg9IjUiIHk9IjE5LjEzNzciIHdpZHRoPSI5LjE3MjQxIiBoZWlnaHQ9IjkuMTcyNDEiIHJ4PSI0LjU4NjIxIiBmaWxsPSIjMTQ5RjU0Ii8+CjxwYXRoIGQ9Ik04Ljg5NTM0IDI2LjM0NDVMNi45NjU4MiAyNC4wNTE0TDguODk1MzQgMjUuMTk4TDkuOTE0MSAyNC4wNTE0TDEyLjIwNzIgMjEuNzU4M0w4Ljg5NTM0IDI2LjM0NDVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuOTA1NTk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8cmVjdCB4PSI1IiB5PSIzMi45MzEyIiB3aWR0aD0iOS4xNzI0MSIgaGVpZ2h0PSI5LjE3MjQxIiByeD0iNC41ODYyMSIgZmlsbD0iI0VFQ0E4NSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNjMxNTkgMzQuNTk1Mkw4LjkwNzE0IDM4LjA2NDhDOC45MjA2NyAzOC4yMzUxIDkuMDYyODQgMzguMzY2NSA5LjIzMzcgMzguMzY2NUg5LjkzODg1QzEwLjEwOTcgMzguMzY2NSAxMC4yNTE5IDM4LjIzNTEgMTAuMjY1NCAzOC4wNjQ4TDEwLjU0MSAzNC41OTUyQzEwLjU1NjEgMzQuNDA0NyAxMC40MDU1IDM0LjI0MTcgMTAuMjE0NCAzNC4yNDE3TDguOTU4MTQgMzQuMjQxN0M4Ljc2NyAzNC4yNDE3IDguNjE2NDUgMzQuNDA0NyA4LjYzMTU5IDM0LjU5NTJaTTEwLjUyMzEgMzkuODA1NEMxMC41MjMxIDQwLjM0NTMgMTAuMDkzNCA0MC43ODMgOS41NjMyOSA0MC43ODNDOS4wMzMyMiA0MC43ODMgOC42MDM1MiA0MC4zNDUzIDguNjAzNTIgMzkuODA1NEM4LjYwMzUyIDM5LjI2NTYgOS4wMzMyMiAzOC44Mjc5IDkuNTYzMjkgMzguODI3OUMxMC4wOTM0IDM4LjgyNzkgMTAuNTIzMSAzOS4yNjU2IDEwLjUyMzEgMzkuODA1NFoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE3ODVfMTM4MzEiPgo8cmVjdCB4PSI1IiB5PSIxOS4xMzc3IiB3aWR0aD0iOS4xNzI0MSIgaGVpZ2h0PSI5LjE3MjQxIiByeD0iNC41ODYyMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" />
    },
  },
);
