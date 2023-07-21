import React from 'react';
import "./modal.css";

export const ModalwithInfo = () => {
  return (

   <section className=''>
    <div>
      <h2>Wed, 21</h2>
    </div>
 <div className="bg-gray-100 w-full h-screen flex flex-col items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg  shadow-lg p-6">
      <div className="relative rounded-full bg-coreYellow delay-200 animate-ping w-32 h-32 mx-auto mb-4 opacity-75">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Card Title</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>


   </section>
     )
}
