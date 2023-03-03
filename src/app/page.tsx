'use client'
import './globals.css'
import Home from './components/Home/home'
import Skills from './components/skills/skills'
import Work from './components/work/work'
import Portof from './components/portof/portof'
import Footer from './components/footer/footer'




export default function Page() {

  return (
    <>
      <div id='center-content' className='m-3 sm:m-10 drop-shadow-sm'>
        <Home/>
        <Skills/>
        <Work/>
        <Portof/>
        <Footer/>
      </div>

    </>
  )
};
