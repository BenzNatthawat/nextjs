import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../../layouts/layoutSider'
import Link from 'next/link'

const SiderPage = ({ todos }: any) => {
  const message = 'message'
  return (
    <Layout breadcrumb={['Home', 'List']}>
      <h1>
        Sider Page - {message}
      </h1>
      <div>
        {todos.map((todo: any) => {
          return <Link href={`/sider-page/[id]`} as={`/sider-page/${todo.id}`} ><div>{todo.id} {todo.title}</div></Link>
        })}
      </div>
    </Layout>
  )
}

export async function getPostData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  return todos
}

export async function getStaticProps() {
  const data = await getPostData()
  return {
    props: {
      todos: data
    }
  }
}

export default SiderPage
