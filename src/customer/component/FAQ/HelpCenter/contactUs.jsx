import React from 'react';

const contactUs = () => {
  return (
    <div className="bg-yellow-100 text-black  py-44">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-0 lg:w-1/3">
            <div className="bg-teal-500 p-4 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5c0 .828-.672 1.5-1.5 1.5S12 11.328 12 10.5s.672-1.5 1.5-1.5S15 9.672 15 10.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15.75V12h3.75"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold mb-4">Address</h3>
            <p className="text-2xl ">Deepanshi Web Team PVT. LTD.</p>
            <p className="text-xl font-extrabold">Gellatly Street</p>
            <p className="text-xl ">Dundee, CO 80112</p>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-0 lg:w-1/3">
            <div className="bg-teal-500 p-4 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75A2.25 2.25 0 016 1.5h12a2.25 2.25 0 012.25 2.25v18L12 14.25l-8.25 7.5V3.75z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold mb-4">Phone</h3>
            <p className=" text-2xl">Main Office</p>
            <p className='font-extrabold text-xl'>(123) 456-7890</p>
            <p className="mt-4 text-2xl">Customer Support</p>
            <p className='font-extrabold text-xl'>(123) 456-7891</p>
            <p className='font-extrabold text-xl'>(Then press 0 for emergency calls)</p>
            <p className="mt-4 text-2xl">Sales Department</p>
            <p className='font-extrabold text-xl'>(123) 456-7892</p>
            <p className='font-extrabold text-2xl'>(Mon-Fri, 9am-5pm)</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <div className="bg-teal-500 p-4 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 3.75L12 10.875 2.25 3.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3.75v16.5h19.5V3.75"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold mb-4">Email</h3>
            <p className=" text-2xl">Transaction Related Issue</p>
            <p className='font-extrabold text-xl'>deepanshimann96@gmail.com.com</p>
            <p className="mt-4 text-2xl">Orders Related Issue</p>
            <p className='font-extrabold text-xl'>abhisheklather19@gmail.com.com</p>
            <p className="mt-4 text-2xl">Trade Related Issue</p>
            <p className='font-extrabold text-xl'>mannnikki96@gmail.com.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
