import Image from "next/image"
import mobileButton from '../icons/mobile-app.svg'
import frontendIcon from '../icons/frontend-icon.svg'
import backendIcon from '../icons/backend-icon.svg'
import mobileSofware from '../icons/mobile-sofware.svg'
export default function Skills({skills} : any) {
    return (
        <>
            <div  className="p-10 flex flex-col items-center shadow-md"><p className="text-center text-lg tracking-wide font-normal"  data-aos='fade-in' data-aos-easing="ease-in" data-aos-offset='1'>"Don't blame distractions, improve your focus."</p><br /><span className="text-right inline-block w-full sm:w-1/2 text-sm  font-extralight tracking-wider"  data-aos='fade-in' data-aos-easing="ease-in" data-aos-offset='1'>Erlangga <span className="font-[400] text-md">Hidayatullah</span></span>
            </div>
            <div className="skill shadow-md px-12 py-20">
                <h1 className="tracking-wider text-xl font-extralight text-center uppercase ">Skills</h1>
                <div ref={skills}   className="skiil-menu flex  flex-row justify-center my-24">
                    <div className="flex justify-center items-center content-center flex-row flex-wrap md:flex-nowrap gap-9 " data-aos='fade-up' 
                        data-aos-easing="ease-in-back" 
                        data-aos-offset='120' 
                        data-aos-duration='700'>
                        <div  className=" flex flex-col justify-center items-center w-full sm:w-1/2    " ><Image src={mobileSofware} alt='iconMobileButton' width={110} height={110} className='rounded-full p-4 bg-[#3D3B3C]'  />
                            <br /><span className="desain mt-2 text-center inline-block uppercase w-full tracking-wide text-xl ">Mobile</span><span className="font-thin text-md tracking-wide text-center text-[#ccc] inline-block w-full h-[40px] max-[60px]">
                                mobile sofware problem solving
                            </span>
                        </div>
                        <div className=" flex flex-col justify-center items-center w-full sm:w-1/2  "><Image src={frontendIcon} alt='iconMobileButton' width={110} height={110} className='rounded-full p-4 bg-[#3D3B3C]' />
                            <br /><span className="desain mt-2 text-center inline-block uppercase w-full tracking-wide text-xl ">Frontend</span><span className="font-thin text-md tracking-wide text-center text-[#ccc] inline-block w-full h-[40px] max-[60px]">
                                webDevs design responsive
                            </span>
                        </div>
                        <div className=" flex flex-col justify-center items-center w-full sm:w-1/2  "><Image src={backendIcon} alt='iconMobileButton' width={110} height={110} className='rounded-full p-4 bg-[#3D3B3C]' />
                            <br /><span className="desain mt-2 text-center inline-block uppercase w-full tracking-wide text-xl ">Backend</span><span className="font-thin text-md tracking-wide text-center text-[#ccc] inline-block w-full h-[40px] max-[60px]">
                                side server webDevs & algorithm
                            </span>
                        </div>
                        <div className=" flex flex-col justify-center items-center w-full sm:w-1/2  "><Image src={mobileButton} alt='iconMobileButton' width={110} height={110} className='rounded-full p-4 bg-[#3D3B3C]' />
                            <br /><span className="desain mt-2 text-center inline-block uppercase w-full tracking-wide text-xl ">Mobile App</span><span className="font-thin text-md tracking-wide text-center text-[#ccc] inline-block w-full h-[40px] max-[60px] ">
                                mobile apps develovers
                            </span>
                        </div>

                    </div>

                </div>
                <div><h1 className="tracking-wide text-sm sm:text-lg text-center text-[#aaa] font-extralight">Quick Works of Happy <span className="border-b-2 border-slate-200 border-solid text-[#F3F3F3] font-normal">Clients</span></h1></div>
            </div>
        </>
    )
};
