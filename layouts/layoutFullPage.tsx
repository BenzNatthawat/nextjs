import React from 'react'
import { Layout, Typography  } from 'antd'
import Header from '../components/Header'
const { Content } = Layout
const { Title } = Typography

const layoutFullPage = ({ children, title }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Layout className='layout-content'>
          <Title level={3} className='header-content'>{title}</Title>
          <Content className='site-layout-background' >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
}

export default layoutFullPage
