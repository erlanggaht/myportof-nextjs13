import { Suspense } from "react";
import Loading from "./loading";
import Phone from "./phone";
import Quotes from "./quotes";

export default  function APIkita() {


  return (
    <div className='container mx-auto bg-[#585858] p-4'>
    <h1 className='text-center font-[600] text-4xl'>API KITA</h1>
    <div className="flex justify-around flex-col sm:flex-row my-6 sm:flex ">
      <Suspense fallback={<Loading/>}>
        
    <Phone/>
    <Quotes/>
    
    </Suspense>
    </div>
      </div>
  )
}

