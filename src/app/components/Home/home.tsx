"use client"
import Image from 'next/image'
import imageProfile from '@/app/components/icons/imageProfile.png'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Navbar from '../Navbar/navbar'


export const LoadIng = () => {
 return (
  <div className="lds-roller">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
 )  
}

export default function Home({skills,Works,projects,footer} : any) {

  const router = useRouter()
  const [isLoading,setLoading] : any = useState()
  function linkRout(){
  router.push('/api-kita')
  setLoading(<LoadIng/>)  
}
  
  

  return (
    <>
        <div className='main shadow-md grid grid-cols-1 ' style={{gridTemplateColumns:"auto 1fr"}}>
          <div className='gridleft bg-[#393939] inline-block h-full order-1'>
            <span className='p-8 bg-[#282828] inline-block' style={{ borderRadius: "0px 0px 69% 0" }}></span>
            <div className='line-horizontal text-center'>
              <span className='inline-block h-[280px] bg-slate-100 w-[1px] my-8'></span>
            </div>
            <div className='flex flex-col gap-4 text-md font-extralight text-center'>
              <span>FB</span>
              <span>WA</span>
              <span>IG</span>
              <span>GIT</span>
            </div>
          </div>
          <div className='main-content bg-[#585858]  relative'>
           <Navbar isLoadings = {isLoading} setLoadings ={setLoading} skills={skills} Works={Works} projects={projects} footer={footer}/>
         
            <div className='content-profile mt-28 sm:mt-32'>
              <div className='mx-auto mt-auto text-center overflow-hidden hidden sm:inline'><Image src={imageProfile} alt='imageProfile' width={240} height={280} className='drop-shadow-md w-auto sm:w-auto sm:h-auto ' /></div>
              <div className='textContent-profile relative p-3' >
                <h1 className='text-3xl sm:text-5xl font-[900] px-4 sm:p-0' ><span className='text-neutral-400'>This is </span> Erlanggaht.</h1>
                <p className='w-full sm:w-1/2 p-3 sm:p-0 my-1 sm:my-4 mx-[8px] font-thin text-[14px] sm:text-md sm:font-normal tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maiores modi veritatis at commodi vitae placeat perferendis deserunt molestias ex voluptatem natus, quia nostrum minus quis provident totam ab.</p>
                <div className='text-left pl-3'>

                <button className='outline-none border-0 my-4 mx-[8px] sm:mx-[0px] py-2 px-5 sm:px-12 sm:py-4 bg-[#282828] hover:bg-neutral-700 transition-colors shadow-sm' style={{ fontWeight: "400" }} onClick={() => linkRout()}>API - KITA</button>
                </div>
                <div className='menuCircle  flex-row absolute bottom-0 right-0 bg-[rgba(63,63,63,0.8)] p-24  hidden sm:inline'>
                  <div className=' flex-row bottom-6 right-10 absolute hidden sm:inline'>
                    <div className='circle circle1'></div>
                    <div className='circle circle2'></div>
                    <div className='circle circle3'></div>
                    <div className='circle circle4'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}
