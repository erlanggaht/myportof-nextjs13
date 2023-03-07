import Image from "next/image";
import indoMaps from '../icons/indonesiaHigh.png'

export default function Footer({footer} : any) {

    return (
        <div id='footer' className="shadow-sm" ref={footer}>
          <div className='pt-6 pb-8 bg-slate-100 text-neutral-600 relative'>
                <h1 className="tracking-wider text-2xl font-base text-center uppercase ">Contact</h1>
                <div className='bg-neutral-200 h-3 absolute bottom-0 left-0 right-0 opacity-50 '></div>
            </div>

            <div className="flex flex-col-reverse my-12 sm:flex-row  items-center">
                <div id='form' className="form w-full sm:m-12 p-6 mt-12 sm:mt-0">
                    <p className="font-thin">To</p>
                    <p className="font-normal text-lg hover:text-neutral-300 cursor-pointer">hi@erlanggaht.com</p>
                    <div className="form-input flex flex-col gap-2 mt-2">
                        <input type={'text'} className='input-class w-full sm:w-1/2 bg-transparent' placeholder="Hello Beyaz" />
                        <input type={'text'} className='input-class w-full sm:w-1/2 bg-transparent' />
                        <input type={'text'} className='input-class w-full sm:w-1/2 bg-transparent' />
                    </div>
                </div>

                <div className="footer-maps relative w-full flex  items-center justify-center p-6 sm:p-0">
                    <Image src={indoMaps} alt='indonesia maps' width={'300'} height={'300'} className='w-auto h-auto ' />
                    <div className="text-xl font-extralight absolute top-4 left-[170px] drop-shadow-xl"><p className="pl-1">I Live in</p><span className="rounded-full bg-red-900 h-3 w-3 inline-block border-dashed opacity-70 filter blur-sm"></span> <span className=" font-normal tracking-wide ">Indonesia</span></div>
                </div>

            </div>
        </div>

    )
}