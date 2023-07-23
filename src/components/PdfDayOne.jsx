import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'

export default function PdfDayOne({ tripData }) {
    const [dayOneData, setDayOneData ] = useState({});

    // on load filter day one data
    const filterDayOneData = (dayOneData) => {
        let dayOne = dayOneData?.filter((data) => {
            return data?.title === 'Day 1';
        })
         if(dayOne?.length > 0) {
            setDayOneData(dayOne[0]);
        }
    }

    // on load filter day one data
    useEffect(() => {
        if(tripData) {
            filterDayOneData(tripData?.daily_plans);
        }
    }, [ tripData ])
    return (
        <div>
            <div className="pdf-one-content">
                <div class="cover">
                    <div class="flex items-start">
                        <div class="w-full md:w-1/2 min-h-[300px] pl-8 pb-4 pt-12">
                            <img src="/tourPackage/logo.svg" alt="logo" />
                            <h3 class="text-2xl text-primaryBlue font-bold mt-10">{dayOneData?.title}</h3>
                            <p className='text-[16px] text-gray-500 font-semibold my-5'>
                                <Moment data={dayOneData?.plan_date} format='DD MMM YYYY' />
                            </p>
                            <h1 class="text-[35px] text-gray-900 font-semibold leading-[48px]">
                                {dayOneData?.stay}
                            </h1>
                        </div>
                        <div class="w-full md:w-1/2 relative overflow-hidden">
                            <img src="/tourPackage/stay_banner.png" alt="stay_banner" class="w-full h-[420px]" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="content px-8">
                {/* bottom cover */}
                <div className="mt-[-20px] border border-gray-100 bg-white z-[1] rounded font-poppins w-full mx-auto relative">
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <th className='py-3 px-3 rounded rounded-r-none text-gray-700 text-left font-poppins'>Check In:</th>
                                <th className='py-3 px-3 rounded rounded-r-none text-gray-700 text-left font-poppins'>Check Out:</th>
                            </tr>
                            <tr>
                                <td className='py-3 px-3 text-gray-600 text-md font-semibold uppercase bg-blue-100/50'>
                                    <Moment data={dayOneData?.check_in} format='D MMM, ddd h A' />
                                </td>
                                <td className='py-3 px-3 text-gray-600 text-md font-semibold uppercase bg-blue-100/50'>
                                    <Moment data={dayOneData?.check_out} format='D MMM, ddd h A' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* details */}
                <p className='text-gray-900 text-md my-5 font-semibold leading-8'>{dayOneData?.detailed_plan}</p>

                {/* hr line */}
                <hr className='bg-gray-300 h-[2px] w-full my-5' />

                <h5 className='text-gray-900 text-md pb-1 border-b border-gray-900 inline-block font-bold'>At night Dinner and Overnight stay in Idbook horizon hues at 3* hotel.</h5>

                {/* bottom content */}
                <div className="bottom-content mt-5 pb-5">
                    <div className="flex items-center">
                        <div className='w-4/12'>
                            <img src="/tourPackage/hotel.jpg" alt="hotel" className='rounded w-full' />
                        </div>
                        <div className='w-8/12'>
                            <div className="hotel-detail px-6 font-poppins">
                                <h4 className="text-gray-900 capitalize text-[22px] font-bold mb-2">{tripData?.accommodations?.hotel_name}</h4>
                                <p className="text-gray-400 text-md mb-2">14.2 KM to city centre </p>
                                <h4 className="text-gray-800 capitalize text-[18px] font-semibold mb-2 inline-flex items-center">
                                    <img src="/tourPackage/location_icon.svg" alt="location_icon" className='mr-2' /> Green Avenue Road Plot no 7, Paharganj
                                </h4>
                                <div className="flex justify-between items-center pt-10">
                                    <p className="price text-gray-700">&#8377;3935 <span className='text-gray-300'>night</span></p>
                                    <p className='text-gray-700 inline-flex items-center'>
                                        <img src="/tourPackage/star.png" alt="star" className='w-6 mr-1' />4.3 Good <span className='text-gray-300 ml-1'> (385 Review)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom svgs */}
            <div className="bottom-content pt-[155px]">
                <img src="/tourPackage/page_bottom.svg" alt="page-bottom" className='absolute w-full bottom-0 h-[200px] left-0' />
                <img src="/tourPackage/page_bottom_right.svg" alt="page-bottom-right" className='absolute bottom-[35px] h-[210px] z-[-1] right-0' />
            </div>
        </div>
    )
}
