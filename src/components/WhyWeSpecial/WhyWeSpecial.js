import React from 'react';
import './WhyWeSpecial.css';
import photo from '../../assets/potrait/photo-1639154968821-6dbc3efb8d23.jpg'

const WhyWeSpecial = () => {
    return (
        <div className='_container'>
            <div className='WhyWeSpecial_content'>
                <div>
                    <img style={{ borderRadius: "10px" }} src={photo} alt="" />
                </div>
                <div>
                    <div className='WhyWeSpecial_content_title'>
                        <p className=''>আমরা সমূর্ণ ডিজিটাল হাসপাতাল</p>
                        <p style={{ color: "#0b0b45" }} className='text-5xl font-bold mt-1'>
                            কেন আমরাই সবার থেকে সেরা ?
                        </p>
                    </div>



                    <div className='mt-5 flex char_container'>
                        <p style={{ borderRight: "solid 1px white" }} className='text-3xl font-semibold text-gray-600'>
                            আমাদের অভিজ্ঞতা
                        </p>
                        <p className='ml-5 text-gray-700'>
                            আমরা ১৯৯৪ সাল থেকে টাংগাইল বাসীর স্বাস্থ্য সেবা দিয়ে আসছি। তাই স্বাস্থ্য সেবা অভিজ্ঞতায় আমরা সবার থেকে এগিয়ে।
                        </p>
                    </div>

                    <div className='my-5 flex char_container'>
                        <p style={{ borderRight: "solid 1px white" }} className='text-3xl font-semibold text-gray-600'>
                            যত্নশীল প্রতিশ্রুতি
                        </p>
                        <p className='ml-5 text-gray-700'>
                            আমরা আমাদের প্রতিশ্রুতিগুলো যথাসাধ্য পালন করে থাকি। রোগীকে দেয়া প্রতিশ্রুতি আমাদের কাছে অতি গুরুত্বপূর্ণ
                        </p>
                    </div>

                    <div className=' flex char_container'>
                        <p style={{ borderRight: "solid 1px white" }} className='text-3xl font-semibold text-gray-600'>
                            রোগীর কমফোর্ট
                        </p>
                        <p className='ml-5 text-gray-700'>
                            আমাদের হাসপাতাল, হাসপাতালের সরঞ্জাম, বেড সকল বস্তু রোগীর কমফোর্ট এর কথা চিন্তা করে করা হয়েছে।
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default WhyWeSpecial;