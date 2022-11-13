import React from 'react';
import bg from '../../../../assets/images/bg.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content banner-margin text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-5 text-xl font-bold">Hey there! I'm Nafis Fahim</p>
                    <h1 className="text-4xl text-orange-500 font-bold mb-5">Landscape & Portraits Photographer</h1>
                    <p>I like photography. Here are my  favorite pictures. You can download your favorite images from here.</p>
                    <button className="mt-5 bg-orange-500  p-3 rounded-lg">See All Pictures</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;