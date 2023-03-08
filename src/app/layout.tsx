"use client"
import './globals.css'
import { Poppins } from '@next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const poppins = Poppins({
  weight : ['300','400','700'],
  subsets : ['latin'],
  preload: false
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(()=>{
    setTimeout(()=>{
      AOS.init({
        animatedClassName: 'aos-animate',
        debounceDelay: 900,
      });
    },0)
  },[])
  
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        
        {children}
        
        </body>
    </html>
  )
}
