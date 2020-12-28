import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Sider from '../components/Sider'
const { Content } = Layout

const LayoutComponent = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout className='layout-content'>
          <Breadcrumb style={{
            margin: '16px 0',
            paddingBottom: '6px',
            borderBottom: '1.2px solid rgba(0, 0, 0, 22%)'
          }}>
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

export default LayoutComponent
