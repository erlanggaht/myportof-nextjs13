import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from "react"
import {notFound} from 'next/navigation'
import Link from "next/link"
async function PhoneAPI() {
    const phone = await fetch('https://dummyjson.com/products', { method: 'GET' })
    if(phone.status == 404 ) {
        notFound()
    
    }else{
        return phone.json()
    }

}


export default async function Phone() {
    const phone = PhoneAPI()
    const phoneget = await phone
    
    return (
        <>

            <div id="product-phone" className="h-full w-full p-3">
                <h1 className="font-[700] text-2xl ">Produk Kita</h1>
                <div className="h-[500px] overflow-y-auto m-3">
                    {phoneget.products && phoneget.products.map((m: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
                        return (    
                  <Link href={{pathname:'/api-kita/products/'+m.id}}  key={m.id}><p  className="text-lg font-normal my-2 py-2 px-1 hover:bg-[#222]">{m.id}. {m.title}</p> <span id="loading"></span>  </Link>
                        )
                    })}
                </div>

            </div>


        </>
    )
}

export { PhoneAPI }