import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../layouts/layoutSider'

const show = (props: any) => {
  const router = useRouter()
  const { id } = router.query
  const message = 'message'
  return (
    <Layout breadcrumb={['Home', 'List', id]}>
      <h1>
        Sider Page - {message} {id}
      </h1>
      {props.title}
    </Layout>
  )
}

export async function getPostData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  return todos
}

export async function getStaticPaths() {
  const data = await getPostData()
  const paths = data.map((todo: any) => ({
    params: { id: `${todo.id}` },
  }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const todos = await res.json()
  return {
    props: todos
  }
}

export default show
