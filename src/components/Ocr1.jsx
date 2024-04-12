// import React from 'react'
// import Nav from './Nav'
// import Footer from './Footer'
// import { useState } from 'react'

// export default function Ocr() {
//     const [selectedFile, setSelectedFile] = useState(null);
// 	const [extractedText, setExtractedText] = useState(null);
// 	const [additionalData, setAdditionalData] = useState(null);
// 	const [isLoading, setIsLoading] = useState(false);
//     // const [isGenerating,setIsGenerating] = useState(false);
//     // const [image, setImage] = useState(null);
// 	// const [text, setText] = useState("");
// 	// const [result, setResult] = useState("");
// 	// const [isLoading, setIsLoading] = useState(false);
// 	// const [responseContent, setResponseContent] = useState("");

//     const handleFileChange = (event) => {
//       setSelectedFile(event.target.files[0]);
//     };
    
//     const handleUpload = async () => {
// 		try {
// 		  console.log("Uploading file...");
// 		  const formData = new FormData();
// 		  formData.append('file', selectedFile);
	  
// 		  const response = await fetch('http://localhost:5000/image/upload', {
// 			method: 'POST',
// 			body: formData,
// 		  });
	  
// 		  const data = await response.json();
// 		  console.log("this is data from server ",data);
// 			if (response.ok) {
// 			if (data.message) {
// 				setExtractedText(data.message);
// 				console.log("this is data - ",data.message)
// 			}
// 			console.log(data); // You can handle the response accordingly
// 			await handleAdditionalData();
// 			setIsLoading(true);
// 			} else {
// 			console.error('Error uploading file:', data.error);
// 			// Optionally display the error to the user
// 			}
// 		} catch (error) {
// 			console.error('Error uploading file:', error);
// 			// Optionally display a generic error to the user
// 		} finally{
// 			setIsLoading(false);
// 		}
		  
// 	  };
// 	  const handleAdditionalData = async () => {
// 		try {
// 		  const response = await fetch('http://localhost:5000/image/upload');
// 		  const data = await response.json();
// 		  if (response.ok) {
// 			// Handle the additional data
// 			setAdditionalData(data);
// 		  } else {
// 			console.error('Error retrieving additional data:', data.error);
// 			// Optionally display the error to the user
// 		  }
// 		} catch (error) {
// 		  console.error('Error retrieving additional data:', error);
// 		  // Optionally display a generic error to the user
// 		}
// 	  };
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Ocr() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

//   const handleUpload = async () => {
//     try {
//       console.log('Uploading file...');
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//     //   setIsLoadingUpload(true);

//       const response = await fetch('http://localhost:5000/image/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       console.log('this is data from server ', data);
//       if (response.ok) {
//         if (data.message) {
//           setExtractedText(data.message);
//           console.log('this is data - ', data.message);
//         }
//         console.log(data); // You can handle the response accordingly
//       } else {
//         console.error('Error uploading file:', data.error);
//         // Optionally display the error to the user
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       // Optionally display a generic error to the user
//     } finally {
//     //   setIsLoadingUpload(false);
//     }
//   };

//   const handleAdditionalData = async () => {
//     try {
//       setIsLoadingData(true);

//       const response = await fetch('http://localhost:5000/image/process');
//       const data = await response.json();
//       if (response.ok) {
//         // Handle the additional data
//         setAdditionalData(data);
//       } else {
//         console.error('Error retrieving additional data:', data.error);
//         // Optionally display the error to the user
//       }
//     } catch (error) {
//       console.error('Error retrieving additional data:', error);
//       // Optionally display a generic error to the user
//     } finally {
//       setIsLoadingData(false);
//     }
//   };

//   useEffect(() => {
//     // Trigger additional data retrieval after file upload
//     if (extractedText) {
//       handleAdditionalData();
//     }
//   }, [extractedText]);

const handleUpload = async () => {
	try {
	  console.log('Uploading file...');
	  const formData = new FormData();
	  formData.append('file', selectedFile);
  
	  setIsLoadingUpload(true);
  
	  const response = await fetch('http://localhost:5000/image/upload', {
		method: 'POST',
		body: formData,
	  });
  
	  const data = await response.json();
	  console.log('this is data from server ', data);
  
	  if (response.ok) {
		if (data.message) {
		  setExtractedText(data.message);
		  console.log('this is data - ', data.message);
  
		  // Call handleAdditionalData here after setting extractedText
		  await handleAdditionalData();
		}
	  } else {
		console.error('Error uploading file:', data.error);
		// Optionally display the error to the user
	  }
	} catch (error) {
	  console.error('Error uploading file:', error);
	  // Optionally display a generic error to the user
	} finally {
	  setIsLoadingUpload(false);
	}
  };
  

const handleAdditionalData = async () => {
    try {
      setIsLoadingData(true);

      const response = await fetch('http://localhost:5000/image/process');
      const data = await response.json();
      if (response.ok) {
        // Update additionalData state
        setAdditionalData(data);
      } else {
        console.error('Error retrieving additional data:', data.error);
        // Optionally display the error to the user
      }
    } catch (error) {
      console.error('Error retrieving additional data:', error);
      // Optionally display a generic error to the user
    } finally {
      setIsLoadingData(false);
    }
  };
  
  
  return (
    <>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div className='flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<form className='grid gap-3 w-full'>
					<div>
						<div className='space-y-1 mb-4'>
							<h2 className='text-xl font-semibold'>Upload a file</h2>
							<p className='text-sm text-gray-500'>
								Accepted formats: .png, .jpg
							</p>
						</div>
						<label
							htmlFor='image-upload'
							className='group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50'
						>
							<div className='absolute z-[5] h-full w-full rounded-md'>
								<div className='absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all bg-white opacity-100 hover:bg-gray-50'>
									<svg
										className='scale-100 h-5 w-5 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'></path>
										<path d='M12 12v9'></path>
										<path d='m16 16-4-4-4 4'></path>
									</svg>
									<p className='mt-2 text-center text-sm text-gray-500'>
										Click to upload.
									</p>
									<p className='mt-2 text-center text-sm text-gray-500'>
										Max file size: 15MB
									</p>
									<span className='sr-only'>Photo upload</span>
								</div>
							</div>
						</label>
						<div className='mt-1 flex rounded-md shadow-sm'>
							<input
								onChange={handleFileChange}
								id='image-upload'
								name='image-upload'
								type='file'
								accept='image/*'
								className='hidden'
							/>
						</div>
					</div>

					<button
						// style={{ backgroundColor: isGenerating ? "grey" : "#eb5c0c" }}
						onClick={handleUpload}
						className='border-gray-200 text-white flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
						// disabled={isGenerating} // Disable the button while generating
					>
						<p className='text-sm color-black'>
                            Upload Here
							{/* {isGenerating ? "Generating..." : "Generate report"} */}
						</p>
					</button>
					{/* Display extracted text */}
					{/* Display extracted text */}
					{extractedText && (
						<div className='mt-4'>
						<h2 className='text-xl font-semibold'>Decoded Prescription</h2>
						<p className='text-sm text-gray-500'>{extractedText}</p>
						</div>
					)}

					{/* Display additional data with loading message */}
					{isLoadingData ? (
						<p className='mt-4'>Wait for a few seconds...</p>
					) : (
						<div className='mt-4'>
						<h2 className='text-xl font-semibold'>Additional Data</h2>
						<p className='text-sm text-gray-500'>{additionalData}</p>
						</div>
					)}
				</form>
			</div>
			<div className='mt-10'>
        <div
          className='flex flex-col items-center w-full max-w-xl py-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'
          style={{ padding: '0' }}
        >
          <div className='mx-20 mb-6'>
            <div className=' mb-4 mt-5 mx-32 w-full'>
              <h2 className='text-xl font-semibold '>Interpreted Report</h2>
              <br />
            </div>
            <div className='stored-result'>
              {/* Display a loading message while the result is being processed */}
              {isLoadingData ? (
                <p>Wait for a few seconds...</p>
              ) : (
                <p style={{ width: '100%', textAlign: 'justify' }}>
                  {additionalData}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
		</>
  )
}
