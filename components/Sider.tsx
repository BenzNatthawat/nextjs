import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { SettingOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
const { SubMenu } = Menu
const { Sider } = Layout

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href='/sider-page' >Project</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
          <Menu.Item key="5">option5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
          <Menu.Item key="9">option9</Menu.Item>
        </SubMenu>
        <Menu.Item key="10" icon={<SettingOutlined />}>Setting</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderComponent
