import React from 'react';

const HireService = ({ service, setHireService }) => {
    const { name, img, slots } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="photography" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Avaliable</p>
                <div className="card-actions">
                    <label htmlFor="hire-modal"
                        disabled={slots.length === 0}
                        setHireService={service}
                        onClick={setHireService(service)}
                        className="btn w-full">Confirm</label>
                </div>
            </div>
        </div>
    );
};

export default HireService;