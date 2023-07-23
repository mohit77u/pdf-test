import React from 'react'
import Moment from 'react-moment'

export default function PdfSummary({ tripData }) {
    return (
        <>
            <div className="pdf-one-content p-6">
                <div className="cover relative">
                    <div className='grid grid-cols-2 gap-6 items-center'>
                        <div className="left-top">
                            <img src="/tourPackage/logo.svg" alt="logo" />
                        </div>
                        <div className="right-top text-right">
                            <button className='bg-yellow-500 text-black uppercase rounded-md px-6 py-2.5 font-semibold text-[14px] font-poppins'>DOWNLOAD PDF</button>
                        </div>
                    </div>
                </div>

                <div className="main-content relative mt-10">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Date of Journey</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold'>
                                <Moment data={tripData?.tour_packages?.date_of_journey} format='DD-MM-YYYY' />
                            </p>
                        </div>
                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Trip Id</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold'>
                                {tripData?.tour_packages?.trip_id}
                            </p>
                        </div>
                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Tour Company</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold'>
                                {tripData?.tour_company_details?.company_name}
                            </p>
                        </div>

                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Executive</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold capitalize'>
                                Akshay Salve
                            </p>
                        </div>
                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Company Location</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold capitalize'>
                                {tripData?.tour_packages?.tour_start_city}
                            </p>
                        </div>
                        <div className="summary-data">
                            <h6 className='text-gray-500 text-[16px] mb-2'>Phone</h6>
                            <p className='py-2.5 px-4 text-[16px] bg-blue-100 rounded text-primaryBlue font-semibold'>
                                {tripData?.tour_company_details?.company_phone}
                            </p>
                        </div>
                    </div>

                    {/* summary */}
                    <div className="summary-details mt-4">
                        <div className="summary-heading bg-primaryBlue text-white font-semibold py-3 px-4 rounded uppercase">Summary</div>
                    </div>

                    {/* table */}
                    <table className='w-full mt-2 mb-4 font-poppins'>
                        <tbody>

                            <tr>
                                <th className='py-3 px-3 rounded text-left'>Tour Duration:</th>
                                <td className='py-3 px-3 rounded text-gray-500 text-right uppercase'>{tripData?.tour_packages?.formatted_tour_duration_full}</td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded-l bg-blue-100 text-left'>Adults:</th>
                                <td className='py-3 px-3 rounded-r bg-blue-100 text-gray-500 text-right uppercase'>{tripData?.tour_packages?.adults} Adults</td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded text-left'>Tour Start Date:</th>
                                <td className='py-3 px-3 rounded text-gray-500 text-right uppercase'>
                                    <Moment data={tripData?.tour_packages?.date_of_journey} format='DD-MM-YYYY' />
                                </td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded-l bg-blue-100 text-left'>Tour Start City:</th>
                                <td className='py-3 px-3 rounded-r bg-blue-100 text-gray-500 text-right uppercase'>{tripData?.tour_packages?.tour_start_city}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* main summary */}
                    <div className='px-3 py-3 bg-primaryBlue rounded'>
                        <p className='text-white text-[18px]'>Dear  
                            <span className="text-center font-cursive my-4 text-white text-3xl tracking-wider ml-2">
                                {tripData?.tour_packages?.customer_fullname}
                            </span>
                        </p>
                        <p className='text-white text-[18px]'>Greetings from idbookshotes.com</p>
                        <p className='text-white mt-2 text-[18px] leading-[31px]'>Idbooks hotels designed below holiday packages for your requested trip. If you need any modification in travel package you can contact Idbook contact no- {tripData?.tour_company_details?.company_phone} keep your Trip Id-{tripData?.tour_packages?.trip_id} as a referenece while contacting with executive.</p>
                    </div>

                    {/* bottom */}
                    <div className="amount mt-4 border border-gray-100 rounded font-poppins">
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <th className='py-3 px-3 rounded rounded-r-none text-left'>Total Booking Amount:</th>
                                    <td className='py-3 px-3 rounded text-primaryBlue text-3xl font-semibold text-right uppercase'>Rs. {tripData?.tour_packages?.total_booking_amount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='mb-0 py-3 px-3 text-center text-gray-500 bg-blue-100 text-[16x]'>Advanced amount to pay for the trip confirmation: 70% of total amount</p>
                    </div>
                </div>
            </div>
        </>
    )
}
