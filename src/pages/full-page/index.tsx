import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../../layouts/layoutFullPage'
import Link from 'next/link'

const FullPages = ({ file }) => {
  const message = 'message'
  return (
    <Layout title='Full Pages'>
      <h1>
        Full Pages - {message}
      </h1>
      <div>
        <img width={150} src={file} />
      </div>
      <div>
        <Link href={`/full-page/${Math.floor(Math.random() * 100)}`} >Full Page</Link>
      </div>
    </Layout>
  )
}

FullPages.getInitialProps = async () => {
  const res = await fetch('https://aws.random.cat/meow')
  const data = await res.json()
  return data
}

export default FullPages
