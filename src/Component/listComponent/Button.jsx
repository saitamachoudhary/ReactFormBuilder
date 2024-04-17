import React from 'react'
import { Card,Col} from 'antd';
import { useDrag } from 'react-dnd';
const Buttons = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FormElements',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // return <button ref={drag}>submit</button>
 return(
  <Col span={8}>
  <Card ref={drag}>
  <Card.Grid style={{width:'100%',textAlign:'center'}}>Button</Card.Grid>
</Card>
</Col>
 )
}

export default Buttons;