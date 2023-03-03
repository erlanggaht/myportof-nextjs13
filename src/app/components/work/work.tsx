import Image from "next/image"

function Work() {
let Work  = 'https://source.unsplash.com/random/600x700/?work'
let Fruit  = 'https://source.unsplash.com/random/600x700/?fruit'
let Car  = 'https://source.unsplash.com/random/600x700/?car'
let City = 'https://source.unsplash.com/random/600x700/?city'

    return (
        <div id="Work" className="py-10 bg-slate-100 shadow-sm">
            <h1 className="tracking-wider text-xl font-[400] text-center uppercase p-3 text-neutral-700 ">Work</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 text-center gap-4 sm:gap-4 mt-12 my-6 p-3 " >
               <Image data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Work} alt="imageWork1" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Fruit} alt="imageWork2" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Car} alt="imageWork3" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={City} alt="imageWork4" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={City} alt="imageWork5" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Car} alt="imageWork6" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Fruit} alt="imageWork7" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
               <Image  data-aos="zoom-in" data-aos-delay="10" data-aos-offset='0' src={Work} alt="imageWork8" width={200} height={200} className='h-[200px] w-full sm:w-[250px] shadow-md mx-auto rounded-sm hover:grayscale hover:cursor-pointer  transition-all'/>
            </div>
            <div className="flow text-center mt-12 flex justify-center items-center p-3 pr-[35px]">
                <span className="h-[8px] w-[8px] rounded-full bg-neutral-700 inline-block mr-3 shadow-sm "></span>
                <span className="h-2 w-2 rounded-full bg-transparent  border-2 inline-block shadow-sm border-neutral-700"></span><span className="w-8 h-[2px] bg-neutral-700"></span>
                <span className="h-2 w-2 rounded-full bg-transparent border-2 inline-block shadow-lg border-neutral-900"></span><span className="w-8 h-[2px] bg-neutral-700"></span>
                <span className="h-2 w-2 rounded-full bg-transparent  border-2 inline-block shadow-sm border-neutral-700"></span>

            </div>
        </div>
)
}

export default Work
