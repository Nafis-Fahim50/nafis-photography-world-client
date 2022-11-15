import React, { useState } from 'react';
import HireBanner from '../HireBanner/HireBanner';
import HireServices from '../HireServices/HireServices';
import SelectedHire from '../SelectedHire/SelectedHire';

const HireMe = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <HireBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}></HireBanner>

            <SelectedHire
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}></SelectedHire>

            <HireServices
            selectedDate={selectedDate}></HireServices>
        </div>
    );
};

export default HireMe;