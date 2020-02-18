import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
        <Head>
            <title>Anasayfa</title>
        </Head>
      <h1>Welcome to Next.js!</h1>
      <style jsx>{`
       h1 {
         background-color: blue;
         color: white;
       }
      `}</style>
      <style global jsx>{`
        body {
          background: yellow;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
