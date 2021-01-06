import React from 'react'
import Layout from '../../layouts/layoutAuth'
import { Form, Input, Button, Checkbox } from 'antd'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const router = useRouter()
  const login = (data: any) => {
    console.log(data)
  }
  return (
    <Layout>
      <Form className='auth' onFinish={login}>
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
        <Form.Item>
          <span onClick={() => router.back()}>Click here to go back</span>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default LoginPage
