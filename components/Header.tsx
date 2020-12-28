import React from 'react'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className='header'>
      <div className='logo'><img height={50} src='/next-logo.png' /></div>
      {/* <div className='logo' /> */}
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>nav 1</Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderComponent
