import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShopOutlined } from '@ant-design/icons';

const Sidebar = ({ location }: any) => {
  const { Sider } = Layout;

  const [collapsed, setCollapse] = useState(false);

  const parsePathname = location.pathname.split('/')[1];

  console.log(parsePathname);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapse(!collapsed)}
    >
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[parsePathname]} mode="inline" multiple>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <NavLink to="/users">유저 관리</NavLink>
        </Menu.Item>
        <Menu.Item key="hotels" icon={<ShopOutlined />}>
          <NavLink to="/hotels">호텔 관리</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(Sidebar);
