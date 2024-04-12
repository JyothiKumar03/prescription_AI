import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import toast from 'react-hot-toast';

export default function Ocr() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleFileChange = (event) => {
    // toast.success("Image uploaded successfully", {id : "messageSend"});
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      toast.success("Image uploaded successfully",{id : "messageSend"});
      console.log('Uploading file...');
      const formData = new FormData();
      formData.append('file', selectedFile);
// debugger;
      const response = await axios.post('https://prescription-ai-server.onrender.com/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Access-Control-Allow-Origin': '*',
        },
      });
// debugger;
      const data = response.data;
      console.log('Server response:', data);

      if (response.status === 200) {
        if (data.message) {
          setExtractedText(data.message);
          // await handleAdditionalData();
        }
      } else {
        console.error('Error uploading file:', data.error);
      }
    } catch (error) {
      toast.error("Failed to upload the image",{id : "messageSend"});
      console.error('Error uploading file:', error);
    }
  };
  // const handleToast = async ()=>{
  //   toast.success("Image loaded successfully!",{id : "msg"});
  // }
  const handleAdditionalData = async () => {
    try {
      setIsLoadingData(true);

      const response = await axios.get('https://prescription-ai-server.onrender.com/image/upload', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      const data = response.data;

      if (response.status === 200) {
        setAdditionalData(data);
      } else {
        console.error('Error retrieving additional data:', data.error);
      }
    } catch (error) {
      console.error('Error retrieving additional data:', error);
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
            onClick={handleUpload}
            className='border-gray-200 text-white flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
          >
            
              <p className='text-sm text-slate-500 font-bold'>Upload Here</p>
              
          </button>

          {extractedText && (
            <div className='mt-4'>
              <h2 className='text-xl font-semibold'>Decoded Prescription</h2>
              <p className='text-sm text-gray-500'>{extractedText}</p>
            </div>
          )}

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

      <Footer />
    </>
  );
}
