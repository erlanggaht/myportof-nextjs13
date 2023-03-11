'use client'

export default function Quotes({ ObjData } : any) {
    const { idQuotes, quote, author } = ObjData
    return (
        <>
            <div className="container mx-auto bg-[#585858] h-screen flex items-center">
                <div className="w-full p-4">
                <h1 className="text-center font-bold text-3xl">{author}</h1>
                <div className="description text-thin font-normal text-left my-5">
                <p className="text-center">" {quote} "</p>
                </div>
                </div>
            </div>
        </>
    )
}
