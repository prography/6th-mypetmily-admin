import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useRecoilValue } from 'recoil';
import { UserOutlined, ShopOutlined } from '@ant-design/icons';

import { sidebarToggleState } from 'recoil/sidebar';

const Sidebar = () => {
  const { Sider } = Layout;

  const toggle = useRecoilValue(sidebarToggleState);

  // const parsePathname = location.pathname.split('/')[1];

  return (
    <Sider breakpoint="lg" collapsedWidth="0" collapsed={toggle} trigger={null}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/users">유저 관리</Link>
        </Menu.Item>
        <Menu.Item key="hotels" icon={<ShopOutlined />}>
          <Link to="/hotels">호텔 관리</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
