
import Frame from 'react-frame-component';
import { Select } from 'antd';
import {
  StyleProvider,
  createCache as createCacheByAntd,
} from "@ant-design/cssinjs";

const { Option } = Select

export const PreviewPage = () => {
  return (
    <div>
      <Frame height={1000} width={1000} >
        <Select
          getPopupContainer={node => node.parentNode}
          style={{ width: 200 }}
        >
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Frame>
    </div>
  )
}