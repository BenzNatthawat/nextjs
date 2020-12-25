import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Sider from '../components/Sider'
import 'antd/dist/antd.css'
const { Content } = Layout

const LayoutComponent = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout className='layout-content' style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
