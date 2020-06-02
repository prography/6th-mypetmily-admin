import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useRecoilValue } from 'recoil';
import { UserOutlined, ShopOutlined } from '@ant-design/icons';

import { sidebarToggleState } from 'recoil/sidebar';

const Sidebar = ({ location }: any) => {
  const { Sider } = Layout;

  const toggle = useRecoilValue(sidebarToggleState);

  const parsePathname = location.pathname.split('/')[1];

  return (
    <Sider breakpoint="lg" collapsedWidth="0" collapsed={toggle} trigger={null}>
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
