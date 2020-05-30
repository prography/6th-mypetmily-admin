import React from 'react';
import { Layout } from 'antd';
import Sidebar from 'components/layouts/Sidbar';

const Main: React.FC = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
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
