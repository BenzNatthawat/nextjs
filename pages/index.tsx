import Layout from '../layouts/layoutFullPage'

const home = (props: any) => {
  console.log(props)
  return (
    <Layout title='Home'>
      Home
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  console.log('getStaticProps')
  return { props: { name: 'getStaticProps' } }
}

export default home
