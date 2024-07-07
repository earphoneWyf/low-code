import { MaterialList } from '@/framework/left/materials/list'
import { PlusOutlined } from '@ant-design/icons'
import { ModalForm } from '@ant-design/pro-components'
import { Button } from 'antd'

export const InsertComponentModal = () => {
  return (
    <ModalForm title="添加组件" trigger={<Button
      size="small"
      type="text"
      icon={<PlusOutlined style={{ color: "#FFF" }} />}
    />} modalProps={{
      getContainer:() => document.body,
      styles: {
        body: {
          height: 300,
          overflow: 'auto'
        }
      }
    }} >
      添加组件
    </ModalForm>
  )
}
