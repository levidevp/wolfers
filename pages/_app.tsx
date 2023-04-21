import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from '@/components/header/Header.jsx';


export default function App({ Component, pageProps }:AppProps) {

  return (
    <Provider store={store}>
     <Header/>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}
