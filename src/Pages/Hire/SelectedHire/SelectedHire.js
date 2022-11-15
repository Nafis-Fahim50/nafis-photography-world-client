import { format } from 'date-fns';
import React from 'react';

const SelectedHire = ({selectedDate, setSelectedDate }) => {

    let footer = <p>Please pick the first day.</p>;
    if (selectedDate?.from) {
      if (!selectedDate.to) {
        footer = <p>{format(selectedDate.from, 'PPP')}</p>;
      } else if (selectedDate.to) {
        footer = (
          <p>
            {format(selectedDate.from, 'PP')} – {format(selectedDate.to, 'PP')}
          </p>
        );
      }
    }
    return (
        <div className='my-10 text-center'>
            <p className='text-orange-500'>Available time on {footer}</p>
        </div>
    );
};

export default SelectedHire;