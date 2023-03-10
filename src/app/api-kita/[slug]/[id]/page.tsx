import { notFound } from "next/navigation";
import Products from "./products";
import Quotes from "./quotes";

async function ProdukAPIbyID(paramsID : number) {
    const produk = await fetch('https://dummyjson.com/products/'+paramsID)
    return produk.json()
}

async function QuotesAPI(paramsID:number) {
    let quotes = await fetch('https://dummyjson.com/quotes/'+paramsID)
    return quotes.json()
  }

export default async function Page({params,searchParams} : {
    params : { slug: string ; id : number },
    searchParams?: {[key : string] : string | string[] | undefined} 
}) {
  const produkByID =  await ProdukAPIbyID(params.id)
  let quotesByID =  await QuotesAPI(params.id)
  let {id,title,description,price,rating,stock,brand,category,thumbnail,images} = produkByID
  let {idQuotes,quote,author} = quotesByID
  switch (params.slug) {
      case 'products' :
        break;
      case 'quotes' : 
      break;
      default : 
      notFound()
  }

  function showComponent(){
    switch (params.slug) {
      case 'products' :
        return(
          <>
          <Products ObjData = {{Obj :id,title,description,price,rating,stock,brand,category,thumbnail,images}} />
          </>
        )
      case 'quotes' : 
      return(
        <>
        
        <Quotes ObjData = {{Obj :idQuotes,quote,author}} />
        </>
      )
      
      default : 
      break
  }
  }

  return (
    <>
    {/* {params.slug == 'products' ? : null}
    {params.slug == 'quotes' ? : null} */}
    {showComponent()}
    </>
  )
}
