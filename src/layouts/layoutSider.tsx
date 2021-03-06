import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Sider from '../components/Sider'
const { Content } = Layout

const layoutSider = ({ children, breadcrumb }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout className='layout-content'>
          {breadcrumb?.length > 0 &&
            <Breadcrumb separator='>' className='header-content'>
              {breadcrumb.map((bc: string, index: number) => (
                <Breadcrumb.Item key={index}>{bc}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          }
          <Content className='site-layout-background' >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
}

export default layoutSider
