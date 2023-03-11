'use client'
import Image from 'next/image'
import React from 'react'

export default function Products({ObjData} : any) {
    const {id,title,description,price,rating,stock,brand,category,thumbnail,images} = ObjData
  return (
    <>
      <div className="container mx-auto p-6 bg-[#585858]">
    <h1 className="text-center font-bold text-3xl">{title}</h1>
     <div className="flex justify-center my-4 ">
      <Image src={thumbnail} width={150} height={150} alt="productgambar" className='rounded-md h-auto w-auto text-center hover:drop-shadow-lg hover:rounded-sm'/>
      </div>
      <div className="description text-thin font-normal text-left my-5">
      <p className="text-center">{description}</p>
      <p className="text-center"> {price} Ribu</p>
      <div className="descLeft my-6">
      <p>Brand - {brand}</p>
      <p>stok - {stock} unit</p>
      <p>Kategori - {category}</p>
      </div>
      <p className="text-center ">Rating {rating}</p>
      </div>
    </div>
    </>
  )
}
