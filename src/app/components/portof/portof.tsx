import React from 'react'
import Card from './card/card'
import ytdownloader from '../../components/icons/ytdownloader.png'
import webQuran from '../../components/icons/webQuran.png'
import navigasisederhana from '../icons/navigasisederhana.png'

export default function Portof({projects} : any) {
    return (
        <div id='portof'>
            <div className='pt-12 pb-20 bg-slate-100 text-neutral-600 relative'>
                <h1 className="tracking-wider text-2xl font-base text-center uppercase ">Portofolio</h1>
                <div className='bg-neutral-200 h-14 absolute bottom-0 left-0 right-0 opacity-50 '></div>
            </div>
            <div className="container-grid "  ref={projects} >
                <div className="imgleft1 " data-aos='fade-up' data-aos-delay='50'><Card title={'Youtube Downloader'} created={'8 agustus 2022'} image={ytdownloader} link={'https://youtdownloader.vercel.app/'} /></div>
                <div className="img-left2 " data-aos='fade-down' data-aos-delay='70'><Card title={'Web Quran'} created={'4 agustus 2022'} image={webQuran} link={'https://erlanggaht.github.io/webQuran/'}/></div>
                <div className="imgright1 flex items-center justify-end" data-aos='fade-right'  data-aos-offset="-1000" data-aos-delay='170'  ><Card title={'Navigasi Sederhana'} created={'12 juli 2022'} image={navigasisederhana}  link={'https://erlanggaht.github.io/project-testing/Project%20Navigasi/'}/></div>
            </div>
        </div>
    )
}
