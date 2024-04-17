import React, { useRef } from 'react'
import { Layout,Card,Row,Col} from 'antd';
const { Sider } = Layout;
import { form } from "../Data/Data.json";
import Inputs from './listComponent/Input';
import Buttons from './listComponent/Button';
import CheckBoxs from './listComponent/CheckBox';
import Labels from './listComponent/Label';

const Siders = () => {
    return (
        <Sider width={400} style={{ backgroundColor: 'white', padding: '10px' }}>
            <Card title="Drag">
            <Row gutter={16}>
            {form.children.map((item) => {
                    switch (item.key) {
                        case "RsLabel 1":
                            return <Labels id={item.id}/>
                        case "RsInput 1":
                            return <Inputs id={item.id}/>
                        case "RsCheckbox 1":
                            return <CheckBoxs id={item.id}/>
                        case "RsButton 1":
                            return <Buttons id={item.id}/>
                        default:
                            break;
                    }
                })}
                </Row>
            </Card>

        </Sider>
    )
}

export default Siders;