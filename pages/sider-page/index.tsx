import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../../layouts/layoutSider'
import Link from 'next/link'

const SiderPage = ({ file }) => {
  const message = 'message'
  return (
    <Layout breadcrumb={['Home', 'List']}>
      <h1>
        Sider Page - {message}
      </h1>
      <div>
        <img width={150} src={file} />
      </div>
      <div>
        <Link href={`/sider-page/${Math.floor(Math.random() * 100)}`} >Sider Page</Link>
      </div>
    </Layout>
  )
}

SiderPage.getInitialProps = async () => {
  const res = await fetch('https://aws.random.cat/meow')
  const data = await res.json()
  return data
}

export default SiderPage
