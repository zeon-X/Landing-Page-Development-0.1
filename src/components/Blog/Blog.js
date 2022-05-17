import React from 'react';
import './Blog.css';
// import './BlogCard/BlogCard.css';
import photo1 from '../../assets/service/lab.jpg'
import photo2 from '../../assets/service/doc.jpg'
import photo3 from '../../assets/service/med.jpg'
import useBlog from '../../customHooks/useBlog';

const Blog = () => {
    return (
        <div className="blog-container">

            <div style={{ width: "88%" }} className='flex flex-col justify-center items-center'>
                <div
                    style={{
                        // borderBottom:"solid 1px #0b0b45"                    
                    }}
                    className='flex justify-between items-center w-5/6 pb-5 mb-5'>
                    <p style={{color:"#0b0b45"}} className='text-5xl blog-heading font-bold'>
                        আমাদের বিশেষত্ব
                    </p>

                    <p
                        className=''
                        style={{
                            fontSize: "16px",
                            padding: "0px 40px",
                            textAlign: "right"
                        }}>
                        বিশ্বের সর্বশ্রেষ্ঠ জার্মানির সিমেন্স কোম্পানীর ১৬ স্লাইস এর <br /> SOMATOM Scope সিটি স্ক্যান মেশিন এখন টাঙ্গাইলের একমাত্র সেবা ক্লিনিক এন্ড হসপিটালে
                    </p>
                </div>












                <div className='blog-content py-10'>


                    <div
                        style={{
                            backgroundColor: "#0b0b45"
                        }}
                        className='mx-5 blogCard'>


                        <div className='flex items-center justify-center p-5'>
                            <p className='text-5xl mr-5'>
                                1
                            </p>
                            <p className='text-3xl'>
                                অত্যাধুনিক পরিক্ষাগার
                            </p>
                        </div>

                        <div>
                            <img src={photo1} alt="" />
                        </div>

                        <div className='p-6 flex justify-between items-center'>

                            <p className='text-lg'>
                                পরিক্ষা-নিরিক্ষা সম্পর্কে জানতে চান ?
                            </p>
                            <button className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>



                    <div
                        style={{
                            backgroundColor: "#0b0b45"
                        }}
                        className='mx-5 blogCard'>


                        <div className='flex items-center justify-center p-5'>
                            <p className='text-5xl mr-5'>
                                2
                            </p>
                            <p className='text-3xl'>
                                সার্টিফাইট ডাক্তার
                            </p>
                        </div>

                        <div>
                            <img src={photo2} alt="" />
                        </div>

                        <div className='p-6 flex justify-between items-center'>

                            <p className='text-lg'>
                                প্রতিদিন ও শুক্রবারের ডাক্তার সম্পর্কে জানুন
                            </p>
                            <button className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>


                    <div
                        style={{
                            backgroundColor: "#0b0b45"
                        }}
                        className='mx-5 blogCard'>


                        <div className='flex items-center justify-center p-5'>
                            <p className='text-5xl mr-5'>
                                3
                            </p>
                            <p className='text-3xl'>
                                সঠিক ও নির্ভুল চিকিৎসা
                            </p>
                        </div>

                        <div>
                            <img src={photo3} alt="" />
                        </div>

                        <div className='p-6 flex justify-between items-center'>

                            <p className='text-lg'>
                                আমাদের বিশেষত্ত সম্পর্কে জানুন
                            </p>
                            <button className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Blog;