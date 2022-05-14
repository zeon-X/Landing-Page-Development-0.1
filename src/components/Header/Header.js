import React from 'react';
import CustomLink from '../../utilities/CustomLink/CustomLink';
import './Header.css';
import fb from '../../assets/socials/facebook.png';
import insta from '../../assets/socials/instagram.png';
import twitter from '../../assets/socials/twitter.png';
import wa from '../../assets/socials/whatsapp.png';
import logo from '../../assets/logo/Social-Media-Logo_Website-Logo-Transparent-280px-X-85px-2.png';


const Header = () => {

    // FUNCTION FOR NAVBAR SCROLL 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 25) {
            document.querySelector('.header_before').classList.add('hidden');
            document.querySelector('.header-container').classList.add('shadow-lg');
        }
        else {
            document.querySelector('.header_before').classList.remove('hidden');
            document.querySelector('.header-container').classList.remove('shadow-lg');
        }
    })


    return (
        <div className='header-container'>
            <div className='header_before' style={{
                padding: "5px 30px", width: "100%", backgroundColor: "#0b0b45", color: "white", fontSize: "13px"
            }}>
                <p>১১১/ ১/ এ ডিষ্টিলারী রোড, গেন্ডারিয়া (ধূপখোলা মাঠ সংলগ্ন ), ঢাকা-১২০৪, বাংলাদেশ ।</p>
            </div>


            <div className='header-content'>
                {/* LOGO */}
                <div>

                    <img src={logo} alt="" />
                </div>

                {/* LINKS  */}
                <div className='nav-links'>

                    <svg onClick={() => {
                        document.querySelector('.nav-links').classList.remove('nav-links-active');
                    }} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 nav-close-btn mb-20 mt-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <CustomLink to="/">হোম</CustomLink>
                    <CustomLink to="/services">
                        হসপিটাল সম্পর্কিত
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </CustomLink>
                    <CustomLink to="/projects">
                        সেবা সম্পর্কিত
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </CustomLink>
                    <CustomLink to="/about">
                        আমাদের ডাক্তারগণ
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </CustomLink>
                    <CustomLink to="/contact">
                        আরো
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </CustomLink>

                    <div className='header-social flex flex-col'>
                        {/* LOGO */}
                        <img src="" alt="" />
                        <div className='flex'>
                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={fb} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={insta} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={twitter} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={wa} alt="" />
                            </a>
                        </div>
                    </div>

                </div>

                <svg onClick={() => {
                    document.querySelector('.nav-links').classList.add('nav-links-active');
                }} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 nav-open-btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </div>
    );
};

export default Header;