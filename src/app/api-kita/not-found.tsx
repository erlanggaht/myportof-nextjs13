'use client'
import React from 'react'

export default function PostNotFound() {
  function reset()  {
    window.location.href='/'
  }
    return (
    <div>
       <p>404 notfound</p>
       <button onClick={()=>reset()}>back</button>
    </div>
  )
}
