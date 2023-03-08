'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PostNotFound() {
const router = useRouter()
  function reset()  {
    router.back()
  }
    return (
    <div className='text-center container mx-auto'>
       <p className='font-bold text-xl tracking-wide'>Gagal mengambil data error code 404 notfound</p>
       <button onClick={()=>reset()} className="font-[400] text-md tracking-wide text-slate-200 hover:opacity-80">back</button>
    </div>
  )
}
