import React, { useEffect, useState } from 'react';
import HireModal from '../HireModal/HireModal';
import HireService from './HireService';

const HireServices = ({selectedDate}) => {
    const [services, setServices] = useState([]);
    const [hireService, setHireService] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/hireOptions')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <HireService
                        id={service._id}
                        service={service}
                        setHireService={setHireService}></HireService>)
                }
            </div>
            {
                hireService && 
                <HireModal
                hireService={hireService}
                setHireService={setHireService}
                selectedDate={selectedDate}></HireModal>
            }
        </div>
    );
};

export default HireServices;