import React from 'react'
import { Card,Col} from 'antd';
import { useDrag } from 'react-dnd';
const CheckBoxs = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FormElements',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // return <input type="checkbox" placeholder='Checkbox' ref={drag} />
  return (
<Col span={8}>
    <Card ref={drag}>
      <Card.Grid style={{width:'100%',textAlign:'center'}}>CheckBox</Card.Grid>
    </Card>
    </Col>
  );
}

export default CheckBoxs;