import '../styles/globals.css'
import { AuthProvider } from '../context/authContext'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Growlii Tweet</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link href='https://fonts.googleapis.com/css2?family=Muli:wght@300;500;700&display=swap' rel='stylesheet' />
      </Head>
      <AuthProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthProvider>
    </>
  )
}

export default MyApp
