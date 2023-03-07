'use client'

import { useEffect } from "react"

export default function Error({error,reset}:{error:Error,reset:()=>void}) {
    useEffect(()=>console.log(error, 'error cuys'),[error])
  return (
         <div>
       <p>Uh oh! This post could not be found.</p>
       <p>404 notfound</p>
       <button onClick={()=>reset}>reset</button>
    </div>
  )
}
