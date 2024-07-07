import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from 'zustand/middleware';

export interface IPageInfoStateType {
  title: string;
}

export interface IPageInfoMethodType {
  onChange: <K extends keyof IPageInfoStateType>(
    key: K,
    value: IPageInfoStateType[K]
  ) => void;
}

export const usePageInfo = create<IPageInfoStateType & IPageInfoMethodType>()(
  devtools(immer((set) => ({
    title: '未命名标题',
    onChange: (key, value) => {
      set({
        [key]: value
      })
    }
  })), {
    name: 'useSettings'
  })
);
