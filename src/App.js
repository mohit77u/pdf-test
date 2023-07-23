import axios from "axios";
import { useEffect, useState } from "react";
import PdfOne from "./components/PdfOne.jsx";
import PdfTerms from "./components/PdfTerms.jsx";
import PdfSummary from "./components/PdfSummary.jsx";
import PdfInclusion from "./components/PdfInclusion.jsx";
import PdfExclusion from "./components/PdfExclusion.jsx";
import PdfDayOne from "./components/PdfDayOne.jsx";
import PdfDayTwo from "./components/PdfDayTwo.jsx";
import PdfDayThree from "./components/PdfDayThree.jsx";

function App() {

    const [step, setStep ] = useState(1);
    const [tripData, setTripData ] = useState({});

    // get trip data
    const getTripData = () => {
        axios.get('http://139.59.15.128/api/v1/tour-package-detail/21')
        .then((response) => {
            setTripData(response?.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    // load page on load component
    useEffect(() => {
        getTripData();
    }, [])

    // Function to add CSS file to the print document
    const addCssFileToPrintDocument = (url, pri) => {
        const linkElement = pri.document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = url;
    
        pri.document.head.appendChild(linkElement);
    };

    // print data
    const printData = (e) => {

        window.print();
    }
    
    // step
    const handleStep = () => {
        if(step !== 8) {
            setStep(step + 1);
        }
    }
    return (
        <div className="app my-5">
            <iframe title="iframe" id="ifmcontentstoprint" style={{height: '0px',width: '0px', position: 'absolute'}}></iframe>
            <div id="main-pdf-data">
                <div className="container min-h-[90vh] relative xl:w-6/12 lg:w-8/12 md:w-10/12 w-full border border-gray-200 rounded p-0 overflow-hidden">

                    {/* pdf 1 */}
                    {step === 1 && (
                        <PdfSummary tripData={tripData} />
                    )}

                    {/* pdf 2 */}
                    {step === 2 && (
                        <PdfOne tripData={tripData} />
                    )}

                    {/* pdf 3 */}
                    {step === 3 && (
                        <PdfTerms tripData={tripData} />
                    )}

                    {/* pdf 4 */}
                    {step === 4 && (
                        <PdfInclusion tripData={tripData} />
                    )}

                    {/* pdf 5 */}
                    {step === 5 && (
                        <PdfExclusion tripData={tripData} />
                    )}

                    {/* pdf 6 */}
                    {step === 6 && (
                        <PdfDayOne tripData={tripData} />
                    )}

                    {/* pdf 7 */}
                    {step === 7 && (
                        <PdfDayTwo tripData={tripData} />
                    )}

                    {/* pdf 8 */}
                    {step === 8 && (
                        <PdfDayThree tripData={tripData} />
                    )}

                </div>
            </div>

            <div className="text-center mt-6">
                <button className="text-primaryBlue bg-blue-100 px-4 py-2 text-center rounded mb-3 block mx-auto font-semibold" onClick={printData}>Print</button>
                <button className="text-white bg-primaryBlue px-4 py-2  text-center rounded mb-3 block mx-auto font-semibold" onClick={handleStep}>Next PDF</button>
            </div>
        </div>
    );
}

export default App;
