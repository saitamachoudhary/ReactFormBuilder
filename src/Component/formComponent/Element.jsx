import React from "react";
import { Card, Input, Button, Checkbox, Drawer, Form, Typography, Radio } from "antd";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography;

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
    const DeleteCheckBox = (index) => {
        const ele = checkboxElement.filter((ele, eleindex) => eleindex !== index);
        setcheckboxElement(ele);
    }
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
            <Card.Grid style={{ width: '100%' }}>
                {checkboxElement.map((checkbox, index) => (
                    <div key={index}>
                        <Checkbox onChange={() => handleEditCheckbox(index)}>{checkbox.name}</Checkbox>
                    </div>
                ))}
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Value">
                        <Input value={checkboxValue} onChange={(e) => setcheckboxValue(e.target.value)} />
                        <PlusOutlined onClick={addcheckbox} />
                        {/* <DeleteOutlined style={{marginLeft:'5px'}} /> */}
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
                                        <Button danger onClick={() => DeleteCheckBox(index)}>Delete</Button>
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

export const Headers = () => {
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
                {/* <label htmlFor="">{label}</label> */}
                <Title level={3}>{label}</Title>
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Label Value">
                        <Input value={label} onChange={(e) => setlabel(e.target.value)} />
                    </Form.Item>
                </Form>
            </Drawer>
        </Card>
    )
}

export const RadioButton = () => {
    const [RadioValue, setRadioValue] = React.useState("Radio");
    const [open, setOpen] = React.useState(false);
    const [Radioele, setRadioele] = React.useState([]);
    const [editIndex, setEditIndex] = React.useState(null);
    const [editName, setEditName] = React.useState('');
    const [RadioValueoptions, setRadioValueoptions] = React.useState("A");
    const [RadioeleOptions, setRadioeleOptions] = React.useState([]);
    const [editIndexoptions, setEditIndexoptions] = React.useState(null);
    const [editNameoptions, setEditNameoptions] = React.useState('');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const addRadio = () => {
        if (RadioValue.trim() !== '') {
            setRadioele([...Radioele, { name: RadioValue }]);

            setRadioValue('');
        }
    }
    const handleEditRadio = (index) => {
        setEditIndex(index);
        setEditName(Radioele[index].name);
    };

    const handleSaveEdit = () => {
        if (editName.trim() !== '') {
            const newRadio = [...Radioele];
            newRadio[editIndex].name = editName;
            setRadioele(newRadio);
            setEditIndex(null);
            setEditName('');
        }
    };
    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditName('');
    };
    const DeleteCheckBox = (index) => {
        const ele = Radioele.filter((ele, eleindex) => eleindex !== index);
        setRadioele(ele);
    }

    const addRadioOptions = () => {
        if (RadioValueoptions.trim() !== '') {
            setRadioeleOptions([...RadioeleOptions, { name: RadioValueoptions }]);
        }
    }
    const handleEditRadioOptions = (index) => {
        setEditIndexoptions(index);
        setEditNameoptions(RadioeleOptions[index].name);
    };
    const handleSaveEditOptions = () => {
        if (editNameoptions.trim() !== '') {
            const newRadioOptions = [...RadioeleOptions];
            console.log(newRadioOptions)
            newRadioOptions[editIndexoptions].name = editNameoptions;
            setRadioeleOptions(newRadioOptions);
            setEditIndexoptions(null);
            setEditNameoptions('');
        }
    };
    const handleCancelEditOptions = () => {
        setEditIndexoptions(null);
        setEditNameoptions('');
    };
    const DeleteCheckBoxOptions = (index) => {
        const eleoptions = RadioeleOptions.filter((ele, eleindex) => eleindex !== index);
        setRadioeleOptions(eleoptions);
    }
    return (
        <Card>
            <EditOutlined style={{ fontSize: '20px' }} onClick={showDrawer} />
            <Card.Grid style={{ width: '100%' }}>
                <Form>
                    {Radioele.map((ele) => (
                        <Form.Item label={ele.name}>
                            <Radio.Group>
                                {RadioeleOptions.map((eleoptions, index) => (
                                    <Radio key={index}>{eleoptions.name}</Radio>
                                ))}
                            </Radio.Group>
                        </Form.Item>
                    ))}
                </Form>
            </Card.Grid>
            <Drawer title="Edit Element" onClose={onClose} open={open}>
                <h1>Edit</h1>
                <Form>
                    <Form.Item label="Radio Value">
                        <Input value={RadioValue} onChange={(e) => setRadioValue(e.target.value)} />
                        <PlusOutlined onClick={addRadio} />
                        {Radioele.map((ele, index) =>
                        (
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
                                        <Button onClick={() => handleEditRadio(index)}>Edit</Button>
                                        <Button danger onClick={() => DeleteCheckBox(index)}>Delete</Button>
                                    </div>
                                )}
                            </div>
                        )
                        )}
                    </Form.Item>
                    <Form.Item label="RadioOption Value">
                        <Input value={RadioValueoptions} onChange={(e) => setRadioValueoptions(e.target.value)} />
                        <Button type="primary" style={{ marginLeft: '10px', marginTop: '10px' }} onClick={addRadioOptions}>Add Radio Options</Button>
                        {RadioeleOptions.map((ele,index)=>(
                            <div key={index}>
                            {editIndexoptions === index ? (
                                <div>
                                    <Input
                                        type="text"
                                        value={editNameoptions}
                                        onChange={(e) => setEditNameoptions(e.target.value)}
                                    />
                                    <Button onClick={handleSaveEditOptions}>Save</Button>
                                    <Button onClick={handleCancelEditOptions}>Cancel</Button>
                                </div>
                            ) : (
                                <div>
                                    <Button onClick={() => handleEditRadioOptions(index)}>Edit</Button>
                                    <Button danger onClick={() => DeleteCheckBoxOptions(index)}>Delete</Button>
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