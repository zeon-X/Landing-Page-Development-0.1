import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import fb from '../../assets/socials/facebook.png';
import insta from '../../assets/socials/instagram.png';
import twitter from '../../assets/socials/twitter.png';
import wa from '../../assets/socials/whatsapp.png';
import discord from '../../assets/socials/discord.png';
import git from '../../assets/socials/github.png';
import yt from '../../assets/socials/youtube.png';
import blogger from '../../assets/socials/blogger.png';
import li from '../../assets/socials/linkedin.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>


                <div className='footer-card-content'>

                    {/* INTRO  */}
                    <div className='footer-card-group footer-card-content-allehaTechIntro mx-10'>
                        <p className='text-xl mb-8'>সেবা ক্লিনিক এন্ড হসপিটাল</p>
                        <p style={{ color: "grey" }}>
                            যে কোন প্রয়োজনে কল করুনঃ +8801711225211
                            পুরাতন বাস স্ট্যান্ড, ময়মনসিংহ রোড, টাংগাইল
                        </p>

                        <div className='footer-card-content-socials mt-10'>
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

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={git} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={discord} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={yt} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={blogger} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img className="shadow-xl" src={li} alt="" />
                            </a>


                        </div>
                    </div>


                    <div className='footer-card-group flex'>
                        {/* LINKS  */}

                        <div className='footer-card-content-links mx-8'>
                            <p className='text-xl mb-8'>আমাদের সম্পর্কে</p>
                            <div className='footer-card-content-links-content' style={{ color: "grey" }}>

                                <div className='footer-card-content-singleLink flex'>
                                    <Link to='/'>আমাদের সম্পর্কে জানুন</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/service'>সেবা সমূহ</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/projects'>পরিচালনা পর্ষদ</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/about'>ক্যারিয়ার</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/about'>কর্মকর্তা কর্মচারী</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/about'>অনলাইনে সিরিয়াল</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/about'>পুরস্কার ও স্বীকৃতি</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>

                                    <Link to='/about'>যোগাযোগ</Link>
                                </div>

                            </div>
                        </div>


                    </div>



                    {/* ADDRESS  */}
                    <div className='footer-card-group footer-card-content-haveQus mx-10'>
                        <p className='text-xl mb-8'>আমাদের সাথে থাকার জন্য আপনাকে অসংখ্য ধন্যবাদ</p>


                    </div>


                </div>






                <p style={{
                    fontSize: "12px", letterSpacing: "3px", marginTop: "100px", textAlign: "center"
                }}>Copyright ©2022 All rights reserved | Aleeha Techonologies.
                </p>


            </div>
        </div>
    );
};

export default Footer;