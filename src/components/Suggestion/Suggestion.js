import React from 'react';
import './Suggestion.css'

const Suggestion = () => {
    return (
        <div className='suggestion_container'>
            <div className='suggestion_content'>
                <div className='suggestion_content_text px-20'>
                    <p className=''>
                        আমাদের বিশেষজ্ঞদের কাছ থেকে কিছু পরামর্শ প্রয়োজন?
                    </p>
                    <p className='text-5xl font-bold mt-3 mb-5'>
                        আপনাকে পরামর্শ দেওয়ার জন্য আমাদের বিশেষজ্ঞরা প্রস্তুত !
                    </p>
                    <p className='text-lg'>
                        আমাদের রয়েছে বিশেষজ্ঞদল । আপনার যদি কোন পরামর্শ নেওয়ার থাকে, তাহলে পরামর্শের ফর্মটি পূরণ করুন।
                    </p>


                </div>

                <div className='suggestion_content_form'>
                    <form className='flex flex-col pr-20'>
                        <input type="text" placeholder='Your Name *' required />
                        <input className='my-7' type="text" placeholder='Contact No *' required />
                        <div className='flex items-center mb-7'>

                            <p>
                                Your Availability:
                            </p>
                            <input className='ml-3 mr-1' id='am' name='avaibility' type="radio" value="AM" />
                            <label htmlFor="am">AM</label>
                            <input className='ml-3 mr-1' id='pm' name='avaibility' type="radio" value="PM" />
                            <label htmlFor="pm">PM</label>
                        </div>
                        <input type="submit" className='font-bold' value="Request Now"></input>

                        <div className='flex items-center mt-10'>
                            <input type="checkbox" checked name="" id="" />
                            <p className='ml-3'>
                                I have read and accept the Privacy Policy
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;