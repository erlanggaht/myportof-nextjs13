import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Suspense } from "react"

async function QuotesAPI() {

    const quotes = await fetch('https://dummyjson.com/quotes')
    return quotes.json()
    
}

export default async function Quotes() {
        const {quotes} = await QuotesAPI() 
    
    
  return (
    <>
    
    <div id="product-Quote" className="h-full w-full p-3">
    <h1 className="font-[700] text-2xl">Quotes Kita</h1>
    <div className="h-[500px] overflow-y-auto m-3">
      {quotes.map((m: { id: Key | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
        return (
            <Link href={{pathname : "/api-kita/quotes/"+m.id}} key={m.id}><p key={m.id} className="text-lg font-normal my-2 py-2 px-1 hover:bg-[#222] ">{m.id}. {m.author}</p></Link>
        )
      })}
      </div>
   
    </div>
    </>
  )
}

export {QuotesAPI}
