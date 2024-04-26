import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Layout, Menu, theme } from 'antd';
const { Header} = Layout;
import Siders from './Component/Sider';
import Contents from './Component/Content';
const items = [
  { label: 'Home' },
  { label: 'About' }
];
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <div className="demo-logo" />
          <Menu
            // theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>

        <Layout>
          <Contents/>
          <Siders />
        </Layout>
      </Layout>
    </DndProvider>
  );
};
export default App;