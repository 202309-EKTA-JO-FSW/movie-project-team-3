import Footer from '@/component/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <Footer/>
  </>
  )}
