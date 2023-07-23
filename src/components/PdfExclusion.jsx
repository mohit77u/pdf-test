import React from 'react'

export default function PdfExclusion({ tripData }) {
    return (
        <>
            <div className="pdf-one-content">

                <div className="main-content relative p-6">
                
                    {/* Exclusion */}
                    <div className="exclusion-details mt-7">
                        <div className="exclusion-heading bg-primaryBlue text-white font-semibold py-3 px-4 rounded uppercase">Exclusion</div>
                    </div>                    

                    {/* exclusion list */}
                    <div className="amount mt-4 font-poppins">
                        <ul>
                            {tripData?.inclusions_exclusions?.map((data, index) => (
                                <>
                                    {data?.status === 'EXCLUSION' && 
                                        <li key={index} className='inline-flex gap-2 items-start mb-3'><img src="/tourPackage/cross_icon.svg" alt="cross_icon" className='mr-2 mt-1' />{data?.body}</li>
                                    }
                                </>
                            ))}
                        </ul>
                    </div>

                    {/* Vehicle */}
                    <div className="Vehicle-details mt-7">
                        <div className="Vehicle-heading bg-primaryBlue text-white font-semibold py-3 px-4 rounded uppercase">Vehicle</div>
                    </div>                    

                    {/* Vehicle list */}
                    <div className="mt-4 font-poppins">
                        <table className='w-full mt-2 mb-4 font-poppins'>
                            <tbody>
                                <tr>
                                    <th className='py-3 px-3 rounded rounded-r-none text-left'>Vehicle type:</th>
                                    <td className='py-3 px-3 rounded text-gray-500 text-right uppercase'>
                                        {tripData?.vehicles?.vehicle_type}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
