import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err =>{
            toast.error(err.message)
        })
    }

    return (
        <div className='mb-20 mt-7 flex justify-center items-center'>
            <div className='shadow-xl w-96 p-7 rounded-lg'>
                <h1 className='text-4xl text-blue-500 font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: 'Name is required' })}
                            placeholder="Enter full name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='mt-2 text-red-500'>You must provide your Name</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: 'Email Address is required' })}
                            placeholder="Enter Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='mt-2 text-red-500'>You must provide your Email</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register('password', { required: 'Password is required',
                            minLength:{value:6, message:'password at least 6 character or long'},
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })}
                            placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                         {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary mt-3 w-full' value="Sign Up" type="submit" />
                </form>
                <div className='mt-3'>
                    <p>Already have an account?<Link className='mt-2 text-orange-500 ml-2' to='/login'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;