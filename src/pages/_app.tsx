import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { MainLayout } from "@/layouts/main-layout";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=> {
    AOS.init();
  },[])

  return <MainLayout><Component {...pageProps} /></MainLayout>
 ;
}
