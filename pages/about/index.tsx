import React from 'react'
import fetch from 'isomorphic-unfetch'

const About = ({ file }) => {
  const message = 'message'
  return (
    <>
      <h1>
        About Pages - {message}
      </h1>
      <img width={150} src={file} />
    </>
  )
}

About.getInitialProps = async () => {
  const res = await fetch('https://aws.random.cat/meow')
  const data = await res.json()
  return data
}

export default About