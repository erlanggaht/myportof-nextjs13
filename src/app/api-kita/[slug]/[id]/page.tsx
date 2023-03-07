import Image from "next/image";

async function ProdukAPIbyID(paramsID : any) {
    const produk = await fetch('https://dummyjson.com/products/'+paramsID)
    return produk.json()
}


export default async function Page({params,searchParams} : {
    params : { slug: string; id : number },
    searchParams?: {[key : string] : string | string[] | undefined} 
}) {
  const produkByID = await ProdukAPIbyID(params.id)
  const {id,title,description,price,rating,stock,brand,category,thumbnail,images} = produkByID
  return (
    <div className="container mx-auto p-6 bg-[#585858]">
    <h1 className="text-center font-bold text-3xl">{title}</h1>
     <p className="text-thin font-normal text-center my-2">{description}</p>
     <div className="flex justify-center">
      <Image src={thumbnail} width={150} height={150} alt="productgambar" className='h-auto w-auto text-center hover:drop-shadow-lg hover:rounded-sm'/>
     </div>
    </div>
  )
}
