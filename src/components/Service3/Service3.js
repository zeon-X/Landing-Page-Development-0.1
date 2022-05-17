import React from 'react';
import './Service3.css'

const Service3 = () => {
    return (
        <div className='_container'>
            <div className='_content_grid3'>

                <div className='service3_Card shadow-lg'>

                    <div
                        style={{
                            color: "#0b0b45",
                            borderBottom: "1px solid white"
                        }}
                        className='flex justify-between items-start p-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className='ml-5 text-3xl font-semibold'>
                            অনলাইনে সিরিয়াল দিতে চান ?
                        </p>
                    </div>
                    <div className='p-10 text-center'>
                        <p>

                            অনলাইনে সিরিয়াল দিতে আপনার নাম, ডাক্তার, মোবাইল নাম্বার, তারিখ দিয়ে সাবমিট করুন
                        </p>
                        <button style={{ borderBottom: "dashed 1px black" }} className='mt-10'>
                            সিরিয়াল দিন
                        </button>
                    </div>

                </div>

                <div className='service3_Card shadow-lg'>

                    <div
                        style={{
                            color: "#0b0b45",
                            borderBottom: "1px solid white"
                        }}
                        className='flex justify-between items-start p-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className='ml-5 text-3xl font-semibold'>
                            ঠিকানা বা ম্যাপ দেখতে চান ?
                        </p>
                    </div>
                    <div className='p-10 text-center'>
                        <p>
                            আমাদের ঠিকানা পুরাতন বাসস্ট্যান্ড , ময়মনসিংহ রোড, টাংগাইল- ১৯০০
                        </p>
                        <button style={{ borderBottom: "dashed 1px black" }} className='mt-10'>
                            ম্যাপ দেখুন
                        </button>
                    </div>

                </div>

                <div className='service3_Card shadow-lg'>

                    <div
                        style={{
                            color: "#0b0b45",
                            borderBottom: "1px solid white"
                        }}
                        className='flex justify-between items-start p-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='ml-5 text-3xl font-semibold'>
                            প্রশ্ন ও প্রশ্নের উত্তর চান ?
                        </p>
                    </div>
                    <div className='p-10 text-center'>
                        <p>
                            সচরাচর করা প্রশ্নগুলোর উত্তর এখান থেকে পেয়ে যাবেন।
                        </p>
                        <button style={{ borderBottom: "dashed 1px black" }} className='mt-10'>

                            প্রশ্নত্তোরর
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Service3;