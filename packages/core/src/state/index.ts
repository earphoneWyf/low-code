import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import _ from 'lodash';

export interface EditorGlobalState {
  data: Record<string, any>;
  refs: Record<string, any>;
}

export interface EditorGlobalMethods {
  onChange: (value: any) => void;
  onMountRefs: (id: string, ref: any) => void;
}

// 定义 Store 的类型
type EditorStore = EditorGlobalState & EditorGlobalMethods;

export const useCreateStore = create()(
  immer((set) => ({
    data: {},
    refs: {},
    onChange: (newData) => {
      set({
        data: newData,
      });
    },
    onMountRefs: (nodeId, ref) => {
      set((state) => {
        state.refs[nodeId] = ref;
      });
    },
  }))
);