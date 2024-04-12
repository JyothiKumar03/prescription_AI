import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";


export default function Tablets() {
	const [inputMessage, setInputMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultJSON, setResultJSON] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleMedicineClick = async (event) => {
    const medicineName = event.target.innerHTML;
    setInputMessage(medicineName);
    await fetchMedicineInformation(medicineName);
  };

  const fetchMedicineInformation = async (medicineName) => {
    setIsGenerating(true);
    setError(null);

    try {
		const options = {
			method: 'GET',
			url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
			params: {drug: 'advil'},
			headers: {
			  'X-RapidAPI-Key': '7f96dc5ba1msh94ae68b142a6c0bp16efe9jsnd018f7a7c32b',
			  'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
			}
		  };
		  

		  const response = await fetch(options.url, {
			method: options.method,
			headers: options.headers
		  });
      const searchData = await response.json();
	  console.log(searchData);
      // Assuming the first result contains the relevant information
      const medicineInformation = searchData.results[0];

      // Update state with the fetched medicine information
      setResultJSON({
        Uses: medicineInformation.uses,
        Dosage: medicineInformation.dosage,
        "Side Effects": medicineInformation.side_effects,
        Route: medicineInformation.route,
        Disclaimer: medicineInformation.disclaimer
      });
    } catch (error) {
      console.error(error);
      setError("Error occurred during API call");
    }

    setIsGenerating(false);
  };
  return (
    <>
			<Nav />

			{/* Hero Section */}
			<div className='w-full flex justify-center items-center flex-col mb-10'>
				<h1 className='head_text'>
					<span className='orange_gradient '>Prescription AI</span>
					<br />
					{/* <span className='description'>Analyze Medical Reports</span> */}
				</h1>
				<h2 className='desc'>
					This tool will tell you about the usage and information of medicines.
				</h2>

				<div className='flex flex-row justify-around mt-5'>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						Aspirin
					</div>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						DOLO 65
					</div>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						Crocin
					</div>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						i-Pill
					</div>
				</div>
				<div className='flex flex-row justify-around mt-5'>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						Combiflame
					</div>
					<div
						
						className='cursor-pointer hover rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'
					>
						Paracetamol
					</div>
					<div className='orange_gradient px-2 pt-1 text-sm'>1M+ Medicines</div>
				</div>
			</div>

			{/* //////Hero Ends */}

			<div className='flex flex-col w-full items-center justify-center'>
				<input
				placeholder='Search for a medicine'
				type='text'
				className='w-full p-5 rounded-full border max-w-2xl '
				value={inputMessage}
				onChange={handleInputChange}
				/>
				<button
				style={{ backgroundColor: isGenerating ? "grey" : "#eb5c0c" }}
				onClick={() => fetchMedicineInformation(inputMessage)}
				className='my-5 border-gray-200 text-white flex h-10 w-full max-w-2xl items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
				disabled={isGenerating}
				>
					<p className='text-sm'>
						SEARCH
					</p>
				</button>
			</div>
			<div>
        {error && <p>{error}</p>}
        {resultJSON && (
          <div className='max-w-2xl'>
            <div className='my-5 p-5 rounded-md border bg-white'>
              <h3 className='font-semibold text-lg mb-1'>Uses:</h3>
              <p>{resultJSON.Uses}</p>
            </div>

            <div className='my-5 p-5 rounded-md border bg-white'>
              <h3 className='font-semibold text-lg mb-1'>Dosage:</h3>
              <p>{resultJSON.Dosage}</p>
            </div>

            <div className='my-5 p-5 rounded-md border bg-white'>
              <h3 className='font-semibold text-lg mb-1'>Side Effects:</h3>
              <p>{resultJSON["Side Effects"]}</p>
            </div>

            <div className='my-5 p-5 rounded-md border bg-white'>
              <h3 className='font-semibold text-lg mb-1'>Route:</h3>
              <p>{resultJSON.Route}</p>
            </div>

            <div className='my-5 p-5 rounded-md border bg-white'>
              <h3 className='font-semibold text-lg mb-1'>Disclaimer:</h3>
              <p>{resultJSON.Disclaimer}</p>
            </div>
          </div>
        )}
      </div>
			<Footer />
    </>
  )
}
