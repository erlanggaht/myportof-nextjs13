'use client'
import './globals.css'
import Home from './components/Home/home'
import Skills from './components/skills/skills'
import Work from './components/work/work'
import Portof from './components/portof/portof'
import Footer from './components/footer/footer'
import { useRef } from 'react'



export default function Page() {
const footer = useRef<HTMLInputElement>()
const skills = useRef<HTMLInputElement>()
const projects = useRef<HTMLInputElement>()
const Works = useRef<HTMLInputElement>()



  return (
    <>
      <div id='center-content' className='m-3 sm:m-10 drop-shadow-sm'>
        <Home />
        <Skills skills={skills} />
        <Work Works={Works}/>
        <Portof  projects={projects}/>
        <Footer footer={footer}/>
      </div>

    </>
  )
};
