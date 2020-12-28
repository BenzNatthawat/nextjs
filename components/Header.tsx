import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className='header'>

      <div className='logo'>
        <img height={50} src='/next-logo.png' />
      </div>

      {/* <div className='logo' /> */}
      <Menu theme='dark' mode='horizontal'>
        <Menu.Item key='1'><Link href='/full-page' >Full Page</Link></Menu.Item>
        <Menu.Item key='2'><Link href='/sider-page' >Sider Page</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderComponent
