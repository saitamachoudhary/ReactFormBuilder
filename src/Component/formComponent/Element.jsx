import React from "react";
import { Card, Input, Button, Checkbox, Drawer,Form} from "antd";
import { EditOutlined } from "@ant-design/icons";

export const Buttons = () => {
    const [open, setOpen] = React.useState(false);
    const [buttonValue,setbuttonValue]=React.useState("Submit")
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        // <Card.Grid style={{width:'100%'}}>
        //    <Button type="primary">Submit</Button>
        // </Card.Grid>
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
            <Card.Grid style={{ width: '100%' }}>
                <Button type="primary">{buttonValue}</Button>
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item>
                        <Input value={buttonValue} onChange={(e)=>setbuttonValue(e.target.value)}/>
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const Inputs = () => {
    const [open, setOpen] = React.useState(false);
    const [label,setlabel]=React.useState("");
    const [inputPlaceholder,setinputPlaceholder]=React.useState("");
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
        <Card.Grid style={{ width: '100%' }}>
            <Form>
                <Form.Item label={label}>
                    <Input placeholder={inputPlaceholder}/>
                </Form.Item>
            </Form>
        </Card.Grid>
        <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item
                    >
                        <h3>label</h3>
                      <Input value={label} onChange={(e)=>{setlabel(e.target.value)}}/>
                      <h3>placeholder</h3>
                      <Input value={inputPlaceholder} onChange={(e)=>setinputPlaceholder(e.target.value)}/>
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const CheckBoxs = () => {
    const [checkboxValue,setcheckboxValue]=React.useState("CheckBox");
    const [open, setOpen] = React.useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
        <Card.Grid style={{ width: '100%' }}>
            <Checkbox>{checkboxValue}</Checkbox>
        </Card.Grid>
        <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Checkbox Value"
                    >
                        <Input value={checkboxValue} onChange={(e)=>setcheckboxValue(e.target.value)}/>
                    </Form.Item>

                </Form>
            </Drawer>
        </Card>
    )
}

export const Labels = () => {
    const [open, setOpen] = React.useState(false);
    const [label,setlabel]=React.useState("Label");
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
        <Card.Grid style={{ width: '100%' }}>
            <label htmlFor="">{label}</label>
        </Card.Grid>
        <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Label Value"
                    >
                        <Input value={label} onChange={(e)=>setlabel(e.target.value)}/>
                    </Form.Item>

                </Form>
            </Drawer>
        </Card>
    )
}