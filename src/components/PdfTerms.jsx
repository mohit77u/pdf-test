import React from 'react'

export default function PdfTerms({ tripData }) {

    const termsAndConditions = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <div className="pdf-one-content">
                <div className="cover h-[350px] relative">
                    <div className='flex justify-between items-center'>
                        <div className="left-top w-7/12 bg-primaryBlue min-h-[300px] pl-7 pt-16 border-b-[18px] border-yellow-400">
                            <h4 className="text-white mb-3">Idbook's</h4>
                            <h1 className="text-white text-4xl leading-[50px] font-semibold">Terms & <br /> Conditions</h1>
                        </div>
                        <div className="right-top">
                            <img src="/tourPackage/terms_banner.svg" alt="terms_banner" className='w-[550px] absolute right-0 top-0' />
                        </div>
                    </div>
                </div>

                <div className="main-content relative pt-[20px] pb-[100px] p-6">
                    <ul className='list-decimal'>
                        {termsAndConditions?.map((data, index) => (
                            <li key={index} className='inline-flex gap-2 items-start mb-3 text-gray-500'><span className='font-bold text-black'>{ index + 1 }.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi, nobis consequuntur iure consectetur quibusdam nihil quis nisi, id hic nulla sapiente maiores voluptas libero tenetur labore quas numquam illum.</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
