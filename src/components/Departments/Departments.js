import React from 'react';
import './Departments.css';
import Dept from './Dept/Dept';

const Departments = () => {
    return (
        <div className='department_container'>
            <p className='text-5xl'>
                আমাদের সেবা সমূহ
            </p>
            <p className='text-lg mt-3 mb-10'>
                সেবা ক্লিনিক অ্যান্ড হসপিটালে আমরা সর্বাধিক মানের উন্নত প্রযুক্তি ব্যাবহার চিকিৎসা দিয়ে থাকি
            </p>
            <div className='department_content'>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
                <Dept></Dept>
            </div>
        </div>
    );
};

export default Departments;