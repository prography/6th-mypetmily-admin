import React from 'react';
import { useRecoilState } from 'recoil';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sidebar from 'components/layouts/Sidbar';
import { sidebarToggleState } from '../recoil/sidebar';

const Main: React.FC = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  const [toggle, setToggle] = useRecoilState(sidebarToggleState);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <span className="trigger" onClick={() => setToggle(!toggle)}>
              {toggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </Header>
          <Content style={{ margin: '16px' }}>{children}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Main;
