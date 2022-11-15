import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';

const HireModal = ({ hireService, setHireService, selectedDate }) => {
    const { name, slots } = hireService;

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

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const customerName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: footer,
            PhotographyName: name,
            Customer: customerName,
            slot,
            phone,
            email
        }
        toast.success('Succssfully submit booking');
        form.reset();
        setHireService(null)
    }

    return (
        <div>
            <input type="checkbox" id="hire-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="hire-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className='text-slate-400'>{footer}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <select name='slot' className="select bg-gray-200 w-full">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered  input-md  w-full max-w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" required className="input input-bordered  input-md  w-full max-w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered  input-md  w-full max-w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HireModal;