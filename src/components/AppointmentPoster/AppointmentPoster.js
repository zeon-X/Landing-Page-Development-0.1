import React from 'react';
import './AppointmentPoster.css';

const AppointmentPoster = () => {
    return (
        <div className='appointment_poster_container'>
            <div className='appointment_poster_content'>
                <div>

                </div>

                <div>
                    <p className='text-xl'>
                        অনলাইন সিরিয়াল সিস্টেম
                    </p>
                    <p className='text-5xl my-10 font-bold'>
                        সময় বাঁচান, নতুন কিছু এক্সপেরিয়েন্স করুন
                    </p>
                    <button className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className='ml-2 text-lg'>
                            সিরিয়াল দিন
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPoster;