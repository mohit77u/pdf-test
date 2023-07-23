import React from 'react'

export default function PdfInclusion({ tripData }) {
    return (
        <>
            <div className="pdf-one-content">
                <div className="cover relative min-h-[180px]">
                    <img src="/tourPackage/top_shape.png" alt="top-shape" className='absolute bottom-0 w-full h-[180px] left-0 z-[-1]' />
                </div>

                <div className="main-content relative mt-10 p-6">
                    <div className="flex justify-between">
                        <div className="w-4/12">
                            <div className='details'>
                                <h4 className="text-gray-900 mb-3 text-lg">Details:</h4>
                                <ul className='list-none pl-0'>
                                    <li className='mb-3 text-primaryBlue font-bold'><span className='font-poppins mr-2 bg-blue-100 w-8 h-8 leading-8 inline-block text-center rounded-full text-primaryBlue text-sm'>1</span>Accomodations</li>
                                    <li className='mb-3 text-primaryBlue font-bold'><span className='font-poppins mr-2 bg-blue-100 w-8 h-8 leading-8 inline-block text-center rounded-full text-primaryBlue text-sm'>2</span>Vehicles</li>
                                    <li className='mb-3 text-primaryBlue font-bold'><span className='font-poppins mr-2 bg-blue-100 w-8 h-8 leading-8 inline-block text-center rounded-full text-primaryBlue text-sm'>3</span>Inclusion</li>
                                    <li className='mb-3 text-primaryBlue font-bold'><span className='font-poppins mr-2 bg-blue-100 w-8 h-8 leading-8 inline-block text-center rounded-full text-primaryBlue text-sm'>4</span>Exclusion</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <div className='bg-blue-100 rounded p-4 font-poppins'>
                                <h5 className="text-gray-500 text-[16px] mb-3">Executive:</h5>
                                <h3 className='text-gray-900 text-2xl mb-3 font-semibold'>Akshay Salve</h3>
                                <p className="text-gray-500 text-[16px] mb-1">Call: {tripData?.tour_company_details?.company_phone}</p>
                                <p className="text-gray-500 text-[16px]">Email: {tripData?.tour_company_details?.company_email}</p>
                                <p className="text-gray-900 text-[16px] mt-3 mb-0 font-semibold">Quotation created on 20 May 2023 | 01:11 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Accomodations */}
                    <div className="summary-details mt-4">
                        <div className="summary-heading bg-primaryBlue text-white font-semibold py-3 px-4 rounded uppercase">Accomodations</div>
                    </div>

                    {/* table */}
                    <table className='w-full mt-2 mb-4 font-poppins'>
                        <tbody>

                            <tr>
                                <th className='py-3 px-3 rounded rounded-r-none'>Home:</th>
                                <td className='py-3 px-3 rounded text-gray-500 text-right uppercase'>
                                    Horizon hues, Outback resort, Coral gardens resorts
                                </td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded-l bg-blue-100'>Room Type:</th>
                                <td className='py-3 px-3 rounded-r bg-blue-100 text-gray-500 text-right uppercase'>
                                    {tripData?.accommodations?.room_type}
                                </td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded'>No of Room:</th>
                                <td className='py-3 px-3 rounded text-gray-500 text-right uppercase'>
                                    {tripData?.accommodations?.no_of_room}
                                </td>
                            </tr>
                            <tr>
                                <th className='py-3 px-3 rounded-l bg-blue-100'>Occupancy:</th>
                                <td className='py-3 px-3 rounded-r bg-blue-100 text-gray-500 text-right uppercase'>{tripData?.accommodations?.occupancy}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Inclusion */}
                    <div className="inclusion-details mt-7">
                        <div className="inclusion-heading bg-primaryBlue text-white font-semibold py-3 px-4 rounded uppercase">Inclusion</div>
                    </div>                    

                    {/* bottom */}
                    <div className="inclusions_exclusions mt-4 rounded font-poppins">
                        <ul>
                            {tripData?.inclusions_exclusions?.map((data, index) => (
                                <>
                                    {data?.status === 'INCLUSION' && 
                                        <li key={index} className='inline-flex gap-2 items-start mb-3'><img src="/tourPackage/right_sign.svg" alt="right_sign" className='mr-2 mt-1' />{data?.body}</li>
                                    }
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
