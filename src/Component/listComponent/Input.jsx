import React from 'react'
import { Card,Col} from 'antd';
import { useDrag } from 'react-dnd';
const Inputs = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FormElements',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // return <input type="text" ref={drag} />
  return (
    <Col span={8}>
    <Card ref={drag}>
    <Card.Grid style={{width:'100%',textAlign:'center'}}>Input</Card.Grid>
  </Card>
  </Col>
  )
}

export default Inputs;

