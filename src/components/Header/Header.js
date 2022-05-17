import React from 'react';
import CustomLink from '../../utilities/CustomLink/CustomLink';
import './Header.css';
import logo from '../../assets/logo/Social-Media-Logo_Website-Logo-Transparent-280px-X-85px-2.png';


const Header = () => {

    // FUNCTION FOR NAVBAR SCROLL 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 25) {
            document.querySelector('.header_container').classList.add('shadow-xl');
        }
        else {
            document.querySelector('.header_container').classList.remove('shadow-xl');
        }
    })


    return (
        <div className='header_container'>

            <div
                className='header_before'
                style={{
                    padding: "5px 30px",
                    width: "100%",
                    backgroundColor: "#0b0b45",
                    color: "white",
                    fontSize: "13px"
                }}>
                <p>১১১/ ১/ এ ডিষ্টিলারী রোড, গেন্ডারিয়া (ধূপখোলা মাঠ সংলগ্ন ), ঢাকা-১২০৪, বাংলাদেশ ।</p>
            </div>



            <div className='header_content'>








                <div className='logo_content'>
                    <img src={logo} alt="" />
                </div>









                <div className='menu_content'>


                    <div className='menu_link_container'>
                        <div className='main_menu_container flex justify-center items-center'>
                            <CustomLink to='/'>
                                হোম
                            </CustomLink>
                        </div>
                    </div>


                    <div className='menu_link_container'>
                        <div className='main_menu_container flex justify-center items-center'>
                            <CustomLink to='/'>
                                হসপিটাল সম্পর্কিত
                            </CustomLink>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <div className='mega_menu_container shadow-xl flex flex-col'>
                            <CustomLink to='/'>
                                সংক্ষিপ্ত বিবরণ</CustomLink>
                            <CustomLink to='/'>
                                ইতিহাস</CustomLink>
                            <CustomLink to='/'>
                                আমাদের ডাক্তারগণ</CustomLink>
                            <CustomLink to='/'>
                                কেন আমাদের বেঁছে নিবেন ?</CustomLink>
                            <CustomLink to='/'>
                                প্রশ্নত্তোর</CustomLink>
                        </div>

                    </div>


                    <div className='menu_link_container'>
                        <div className='main_menu_container flex justify-center items-center'>
                            <CustomLink to='/'>
                                সেবা সম্পর্কিত
                            </CustomLink>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <div className='mega_menu_container shadow-xl flex flex-col'>
                            <CustomLink to='/'>
                                মূল্য তালিকা</CustomLink>
                            <CustomLink to='/'>
                                শুক্রবারের ডাক্তার</CustomLink>
                            <CustomLink to='/'>
                                প্রতিদিনের ডাক্তার</CustomLink>
                        </div>

                    </div>


                    <div className='menu_link_container'>
                        <div className='main_menu_container flex justify-center items-center'>
                            <CustomLink to='/'>
                                আরো
                            </CustomLink>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <div className='mega_menu_container shadow-xl flex flex-col'>
                            <CustomLink to='/'>
                                নোটিশ</CustomLink>
                            <CustomLink to='/'>
                                যোগাযোগ</CustomLink>
                            <CustomLink to='/'>
                                অনলাইনে সিরিয়াল দিন</CustomLink>
                        </div>

                    </div>

                    <button>অনলাইনে সিরিয়াল দিন</button>


                </div>
            </div>

        </div>
    );
};

export default Header;