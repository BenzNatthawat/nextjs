import React from 'react'
import Layout from '../../layouts/layoutAuth'
import { Form, Input, Button, Checkbox } from 'antd'

const LoginPage = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <Form className='auth' onFinish={(data) => console.log(data)}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
        </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export const getStaticProps = async () => {
  // const resA = await fetch('/api/hello')
  // const resB = await fetch(`${process.env.SERVER}/api/hello`)
  // console.log(resA)
  // console.log(resB)
  return { props: { name: 'getStaticProps' } }
}

export default LoginPage
