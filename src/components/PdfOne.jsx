import React from 'react'
import Moment from 'react-moment'

export default function PdfOne({ tripData }) {
    return (
        <>
            <div className="pdf-one-content">
                <div className="cover py-3 relative min-h-[550px]">
                    <img src="/tourPackage/top_shape.svg" alt="top-shape" className='absolute bottom-0 w-full h-[1260px] rotate-180 left-0 z-[-1]' />
                    <div className='grid grid-cols-2 gap-6 items-center px-6'>
                        <div className="left-top">
                            <img src="/tourPackage/logo.svg" alt="logo" />
                        </div>
                        <div className="right-top text-right">
                            <button className='bg-yellow-500 text-black uppercase rounded-md px-6 py-2.5 font-semibold text-[14px] font-poppins'>DOWNLOAD PDF</button>
                        </div>
                    </div>

                    {/* <img src="/tourPackage/top_shape.png" alt="top-shape" className='absolute bottom-0 w-full h-[180px] left-0 z-[-1]' /> */}

                </div>

                <div className="main-content relative pt-[0] mt-[-120px] pb-[100px]">

                    {/* <img src="/tourPackage/path280.svg" alt="main-right" className='absolute top-0 h-[200px] right-0' />
                    <img src="/tourPackage/path280.svg" alt="main-right" className='absolute top-[-160px] h-[200px] left-0 rotate-[-180deg]' /> */}

                    {/* trip date */}
                    <h2 className="text-center font-poppins my-4 text-gray-400 text-lg">
                        <Moment data={tripData?.tour_packages?.date_of_journey} format='DD MMM YYYY  |  H:MM A' />
                    </h2>

                    {/* trip name */}
                    <h3 className="text-center font-cursive my-4 text-gray-800 text-5xl tracking-wider">
                        {tripData?.tour_packages?.customer_fullname}
                    </h3>

                    {/* trip name */}
                    <h4 className="text-center font-inter font-bold my-4 text-gray-800 text-2xl">
                        {tripData?.tour_packages?.trip_name}
                    </h4>

                    {/* day and night */}
                    <div className="text-center py-4">
                        <p className="inline bg-primaryBlue rounded-full px-4 py-3 text-white font-semibold">
                            {tripData?.tour_packages?.formatted_tour_duration}
                        </p>
                    </div>

                    {/* trip name */}
                    <h4 className="text-center font-inter font-bold my-4 text-gray-800 text-2xl">
                        MAGICAL PORTBLAIR EXPERIENCE
                    </h4>

                    {/* check in check out */}
                    <div className="flex justify-center gap-8 my-5">

                        <div className="check-in">
                            <h6 className='text-gray-500 text-[16px] text-center'>Check in:</h6>
                            <p className='py-2.5 px-4 border-2 text-[16px] border-primaryBlue rounded text-primaryBlue font-semibold'>
                                <Moment data={tripData?.tour_packages?.date_of_journey} format='DD-MM-YYYY' />
                            </p>
                        </div>

                        <div className="check-out">
                            <h6 className='text-gray-500 text-[16px] text-center'>Check out:</h6>
                            <p className='py-2.5 px-4 border-2 text-[16px] border-primaryBlue rounded text-primaryBlue font-semibold'>
                                <Moment data={tripData?.tour_packages?.check_out_date} format='DD-MM-YYYY' />
                            </p>
                        </div>

                    </div>

                </div>

                {/* bottom svgs */}
                <div className="bottom-content">
                    <img src="/tourPackage/page_bottom.svg" alt="page-bottom" className='absolute w-full bottom-0 h-[200px] left-0' />
                    <img src="/tourPackage/page_bottom_right.svg" alt="page-bottom-right" className='absolute bottom-[35px] h-[210px] z-[-1] right-0' />
                    <img src="/tourPackage/bottom_shape.svg" alt="page-bottom-left" className='absolute bottom-0 h-[250px] left-0 z-[-1]' />
                </div>
            </div>
        </>
    )
}
