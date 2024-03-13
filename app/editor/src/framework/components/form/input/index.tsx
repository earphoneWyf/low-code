import { createReactMaterial } from '@huos/core'
import { InputView } from './view'
import { Panel } from './panel'
import { HuosRemixIcon } from '@huos/icons'

export const __AntInput__ = createReactMaterial(InputView, {
    displayName: '输入框',
    custom: {
        useResize: false,
    },
    related: {
        settingRender: Panel,
        icon: () => <HuosRemixIcon type="icon-input-method-line" />
    }
})
