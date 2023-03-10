import { Suspense } from "react";
import Navbar from "./components/navbar";
import Loading from "./loading";
import Phone from "./phone";
import Quotes from "./quotes";

export default  function APIkita() {


  return (
    <div className='container mx-auto bg-[#585858] px-4 pt-2'>
      <Navbar/>
    <h1 className='text-center font-[600] text-4xl mt-5'>API KITA</h1>
    <div className="flex justify-around flex-col sm:flex-row my-6 sm:flex gap-6 sm:gap-0 ">
      <Suspense fallback={<Loading/>}>
        
    <Phone/>
    <Quotes/>
    
    </Suspense>
    </div>
      </div>
  )
}

