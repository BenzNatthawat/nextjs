import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Sider from '../components/Sider'
const { Content } = Layout

const layoutSider = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout className='layout-content'>
          <Breadcrumb className='header-content'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className='site-layout-background' >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
}

export default layoutSider
