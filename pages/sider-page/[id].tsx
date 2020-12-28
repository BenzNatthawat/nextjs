import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../layouts/layoutSider'

const show = () => {
  const router = useRouter()
  const { id } = router.query
  const message = 'message'
  return (
    <Layout breadcrumb={['Home', 'List', id]}>
      <h1>
        Sider Page - {message} {id}
      </h1>
    </Layout>
  )
}

export default show
