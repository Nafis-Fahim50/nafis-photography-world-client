import { format } from 'date-fns';
import React from 'react';

const SelectedHire = ({selectedDate, setSelectedDate }) => {

    let footer = <p>Please pick the first day.</p>;
    footer =
      <p>
        {format(selectedDate, 'PP')}
      </p>
    
    return (
        <div className='my-10 text-center'>
            <p className='text-orange-500'>Available time on {footer}</p>
        </div>
    );
};

export default SelectedHire;