import React from 'react';
import { DayPicker } from 'react-day-picker';
import photo1 from '../../../assets/images/photo1.jpeg'
import './HireBanner.css'

const HireBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className='banner-img p-5'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo1} alt='girl' className="w-1/3 rounded-lg shadow-2xl" />
                    <div className='mr-10 mb-10'>
                        <DayPicker
                            mode='range'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='text-white font-bold'
                        ></DayPicker>
                        <button onClick={()=>(setSelectedDate([]))} className='p-2 ml-5 bg-red-500 text-white rounded-lg'>RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireBanner;