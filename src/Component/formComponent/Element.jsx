import React from "react";
import { Card, Input, Button, Checkbox, Drawer, Form } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

export const Buttons = () => {
    const [open, setOpen] = React.useState(false);
    const [buttonValue, setbuttonValue] = React.useState("Submit")
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
                <Button type="primary">{buttonValue}</Button>
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item>
                        <Input value={buttonValue} onChange={(e) => setbuttonValue(e.target.value)} />
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const Inputs = () => {
    const [open, setOpen] = React.useState(false);
    const [label, setlabel] = React.useState("");
    const [inputPlaceholder, setinputPlaceholder] = React.useState("");
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
                        <Input placeholder={inputPlaceholder} />
                    </Form.Item>
                </Form>
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item>
                        <h3>label</h3>
                        <Input value={label} onChange={(e) => { setlabel(e.target.value) }} />
                        <h3>placeholder</h3>
                        <Input value={inputPlaceholder} onChange={(e) => setinputPlaceholder(e.target.value)} />
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const CheckBoxs = () => {
    const [checkboxValue, setcheckboxValue] = React.useState("checkbox");
    const [open, setOpen] = React.useState(false);
    const [checkboxElement, setcheckboxElement] = React.useState([]);
    const [editIndex, setEditIndex] = React.useState(null);
    const [editName, setEditName] = React.useState('');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const addcheckbox = () => {
        //  const newElement=<Checkbox key={Date.now()}>{checkboxValue}</Checkbox>;
        //  setcheckboxElement((prev)=>[...prev,newElement]);
        if (checkboxValue.trim() !== '') {
            setcheckboxElement([...checkboxElement, { name: checkboxValue }]);
            setcheckboxValue('');
        }
    }
    const handleEditCheckbox = (index) => {
        setEditIndex(index);
        setEditName(checkboxElement[index].name);
    };

    const handleSaveEdit = () => {
        if (editName.trim() !== '') {
            const newCheckboxes = [...checkboxElement];
            newCheckboxes[editIndex].name = editName;
            setcheckboxElement(newCheckboxes);
            setEditIndex(null);
            setEditName('');
        }
    };
    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditName('');
    };
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
            <Card.Grid style={{ width: '100%' }}>
                {/* {checkboxElement.map((ele, index) => {
                    return (
                        <div key={index}>
                            <Checkbox>{checkboxValue}</Checkbox>
                        </div>
                    )
                })} */}
                {checkboxElement.map((checkbox, index) => (
                           <div key={index}>
                              <Checkbox onChange={()=>handleEditCheckbox(index)}>{checkbox.name}</Checkbox>
                           </div>
                        ))}
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Checkbox Value">
                        <Input value={checkboxValue} onChange={(e) => setcheckboxValue(e.target.value)} />
                        <PlusOutlined onClick={addcheckbox} />
                        {checkboxElement.map((checkbox, index) => (
                            <div key={index}>
                                {editIndex === index ? (
                                    <div>
                                        <Input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                        <Button onClick={handleSaveEdit}>Save</Button>
                                        <Button onClick={handleCancelEdit}>Cancel</Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Button onClick={() => handleEditCheckbox(index)}>Edit</Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const Labels = () => {
    const [open, setOpen] = React.useState(false);
    const [label, setlabel] = React.useState("Label");
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
                        <Input value={label} onChange={(e) => setlabel(e.target.value)} />
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}