import React from 'react';
import { Layout, theme, Card, Divider,} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDrop } from 'react-dnd';
import { form } from "../Data/Data.json";
import { Buttons, Inputs, CheckBoxs, Headers,RadioButton} from './formComponent/Element';
const { Content } = Layout;
const Contents = () => {
    const [dropElements, setdropElements] = React.useState([]);
    // console.log(dropElements)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'FormElements',
        drop: (item) => addToDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const Delete = (id) => {
        const updateDropElements = dropElements.filter((ele) => ele.id !== id);
        setdropElements(updateDropElements);
    }

    const addToDrop = (id) => {
        const dropItem = form.children.filter((item) => item.id === id);
        const modifyiedItem=dropItem.map((item)=>{
            return {...item,id:Date.now()}
        })
        setdropElements((prev) => [...prev,modifyiedItem[0]]);
    }
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content
            style={{
                padding: '0 48px',
            }}
        >
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    // padding: 24,
                    // borderRadius: borderRadiusLG,
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
                ref={drop}
            >
                <h1>Drop</h1>
                <Card
                    // title="Form"
                    style={{
                        width: 1000,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {dropElements.map((item) => {
                        switch (item.key) {
                            case "RsLabel 1":
                                return <div style={{ width: '100%',}}>
                                    <div>
                                        <DeleteOutlined onClick={()=>Delete(item.id)} style={{fontSize:'20px'}}/>
                                    </div>
                                    <Headers />
                                </div>
                            case "RsInput 1":
                                return (
                                    <div style={{ width: '100%',}}>
                                        <DeleteOutlined onClick={()=>Delete(item.id)} />
                                        <Inputs />
                                    </div>
                                )
                            case "RsCheckbox 1":
                                return (
                                    <div style={{ width: '100%',}}>
                                        <DeleteOutlined onClick={()=>Delete(item.id)} />
                                        <CheckBoxs />
                                    </div>
                                )
                            case "RsButton 1":
                                return (
                                    <div style={{ width: '100%',}}>
                                        <DeleteOutlined onClick={()=>Delete(item.id)} />
                                        <Buttons />
                                    </div>
                                )
                            case "RsRadioGroup 1":
                                return (
                                    <div style={{width:'100%'}}>
                                         <DeleteOutlined onClick={()=>Delete(item.id)} />
                                         <RadioButton/>
                                    </div>
                                )    
                            default:
                                break;
                        }
                    })}
                </Card>
            </div>
        </Content>
    )
}

export default Contents;