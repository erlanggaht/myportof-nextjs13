'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LoadIng } from '@/app/components/Home/home'
import humanTarget from '../../../app/components/icons/human-target.svg'
export default function Navbar() {

    const router = useRouter()
    const [isLoading,setLoading] : any = useState()
    function HandleLink(e: any)  {
            router.back()
            setLoading(<LoadIng/>)
      } 

    
  return (
    <>
       <div className='Navbar sm:items-center flex flex-col sm:flex-row m-8'>
              <div className='line-vertical flex flex-col items-center w-full sm:w-1/2  sm:m-0'><span className='w-full h-[1px] mx-8 bg-slate-100 inline-block '></span></div>
                <ul className='grid grid-cols-3 sm:flex sm:flex-row sm:items-center  md:flex-nowrap text-sm font-[300]  tracking-wider gap-4 sm:gap-0 mt-2 sm:mt-0 '>
               <li className='listNav mx-0 sm:mx-7 group hover:text-neutral-800 transition-colors cursor-pointer relative'
                 id='home' onClick={(e) => HandleLink(e)}>Home</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors '
                  id='skills'>Skills</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors '
                 id="projects" >Projects</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors '
                   id='Works' >Works</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors '
                  id='contact'>Contact</li>
                  {!isLoading ? <Image src={humanTarget} alt='humanTarget' width={200} height={200} className='  hover:bg-neutral-800 rounded-full transition-all w-6 h-6 sm:w-8 sm:h-8 ' /> : <LoadIng/>} 
              </ul>
              </div>
    </>
  )
}
