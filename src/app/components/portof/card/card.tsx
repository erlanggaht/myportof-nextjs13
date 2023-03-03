import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Card({title,created,image,link}:{
  title : string,
  created : string,
  image : any,
  link : string
}) {

const links = ()=> {
  window.open(link,"_blank")
}
 
  return (
    <div  id='containerPortof' className="flex mx-auto shadow-sm" >
 <Link  href={''} onClick={()=>links()} className=' group hover:opacity-90 transition-all' >  <div
    className="flex flex-col bg-neutral-800 shadow-lg  md:max-w-xl md:flex-row">
    <Image
      className="h-auto md:h-auto w-full object-cover md:w-auto "
      src={image}
      alt="img-ytdownloader" width={250} height={300} quality="100"/>
    <div className="flex flex-col justify-start p-8 px-5 relative cards">
      <h5
        className="mb-2 text-xl font-medium text-slate-200">
        {title}
      </h5>
      <p className="mb-4  text-neutral-300 text-sm tracking-wide font-light">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <p className="text-xs text-neutral-400 font-extralight ">
        dibuat {created}
      </p>
           <div className='readmore bg-neutral-900 text-neutral-400 px-4 py-2 absolute bottom-0 right-0 text-thin text-sm tracking-wide mt-5 font-light group-hover:bg-neutral-400 group-hover:text-neutral-900'><span className='font-extralight text-md'>Kunjungi</span></div>
    </div>
  </div>
  </Link>
</div>
)}
