import React from 'react'
import { useRouter } from 'next/router'

const show = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <h1>
      About Pages - {id}
    </h1>
  )
}

export default show
