import Footer from '../components/Footer' ;
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/sachin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return( 
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
      </>
  )
}

export default MyApp
