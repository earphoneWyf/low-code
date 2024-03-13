import { ExperimentOutlined } from '@ant-design/icons'
import { ModalForm } from '@ant-design/pro-components'
import { Button } from 'antd'

export const SchemaModal = () => {
    return (
        <ModalForm title="页面内容" trigger={<Button type='text' size="large" icon={<ExperimentOutlined />} ></Button>} >
            页面内容
        </ModalForm>
    )
}