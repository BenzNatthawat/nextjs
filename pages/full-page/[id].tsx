import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../layouts/layoutFullPage'

const show = () => {
  const router = useRouter()
  const { id } = router.query
  const message = 'message'
  return (
    <Layout title='Full Pages'>
      <h1>
        Full Pages - {message} {id}
      </h1>
    </Layout>
  )
}

export default show
