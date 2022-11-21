import React from 'react';
import { DayPicker } from 'react-day-picker';
import tea from '../../../assets/images/tea.jpg'
import './HireBanner.css'

const HireBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className='banner-img p-5'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={tea} alt='girl' className="w-1/3 rounded-lg shadow-2xl" />
                    <div className='mr-10 mb-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='text-white font-bold'
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireBanner;