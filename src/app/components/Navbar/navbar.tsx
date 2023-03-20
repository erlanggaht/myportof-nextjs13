'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LoadIng } from '../Home/home'
import humanTarget from '../icons/human-target.svg'
export default function Navbar({footer,skills,projects,Works,isLoadings,setLoadings} : any) {

    const router = useRouter()
    function linkRout(){
    router.push('/api-kita')
    setLoadings(<LoadIng/>)  
  }
    function HandleLink(e: any, ref: { offsetTop: number } )  {
        const innerSkills = e.target as HTMLInputElement 
        const scroll = () => {
          window.scrollTo({
            top: ref.offsetTop - 200,
            left: 0,
            behavior: "smooth",
          });
        } 
        innerSkills.id && scroll()
      }

    
  return (
    <>
       <div className='Navbar sm:items-center flex flex-col sm:flex-row m-8'>
              <div className='line-vertical flex flex-col items-center w-full sm:w-1/2  sm:m-0'><span className='w-full h-[1px] mx-8 bg-slate-100 inline-block '></span></div>
                <ul className='grid grid-cols-3 sm:flex sm:flex-row sm:items-center  md:flex-nowrap text-sm font-[300]  tracking-wider gap-4 sm:gap-0 mt-2 sm:mt-0 '>
                <Link href ="/"><li className='listNav mx-0 sm:mx-7 group hover:text-neutral-800 transition-colors cursor-pointer relative'
                 id='home'>Home</li></Link>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors cursor-pointer'
                  onClick={(e) => HandleLink(e,skills.current)} id='skills'>Skills</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors cursor-pointer'
                  onClick={(e) => HandleLink(e,projects.current)} id="projects" >Projects</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors cursor-pointer'
                  onClick={(e) => HandleLink(e,Works.current)} id='Works' >Works</li>
                <li className='listNav mx-0 sm:mx-7 hover:text-neutral-800 transition-colors cursor-pointer'
                  onClick={(e) => HandleLink(e,footer.current)} id='contact'>Contact</li>
                  {!isLoadings ? <Image src={humanTarget} alt='humanTarget' width={200} height={200} className=' cursor-pointer hover:bg-neutral-800 rounded-full transition-all w-6 h-6 sm:w-8 sm:h-8 ' onClick={() => linkRout()
} /> : isLoadings} 
              </ul>
              </div>
    </>
  )
}
