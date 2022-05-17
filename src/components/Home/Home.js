import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home_container py-10'>
            <div className='home_content my-7'>
                <div className='home_text'>
                    <p className='text-3xl font-bold'>
                        অনলাইন সিরিয়াল সিস্টেম</p>
                    <p className='my-16 text-6xl font-bold'>
                        সময় বাঁচান, নতুন কিছু এক্সপেরিয়েন্স করুন
                    </p>
                    <button className='appointment_btn mt-6 mb-10 text-2xl font-bold'>
                        সিরিয়াল দিন
                    </button>
                </div>
                <div className='home_img'>

                </div>
            </div>
        </div>
    );
};

export default Home;