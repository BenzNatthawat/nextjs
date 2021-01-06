import React from 'react'

const index = ({ me }) => {
  return (
    <div>
      {me}
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  console.log(req.headers)
  if (!req.headers.cookie) {
    res.writeHead(302, { Location: '/' })
    res.end()
  } else {
    return {
      props: {
        me: 'Your dasbord'
      }
    }
  }
}

export default index
