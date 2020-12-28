import Layout from '../layouts/layoutFullPage'

const home = (props: any) => {
  console.log(props)
  return (
    <Layout>
      Home
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('getStaticProps')
  return { props: { name: 'getStaticProps' } }
}

export default home
