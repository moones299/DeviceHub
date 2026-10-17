import Footer from '@/components/footer/Footer';
import Header from '../components/header/header'

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
   <div>
    <Header/>
  
    
    <Component {...pageProps} />
      <Footer/>
   </div>
    </>
  );
}
