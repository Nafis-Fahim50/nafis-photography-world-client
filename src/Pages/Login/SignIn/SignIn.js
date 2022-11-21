import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SignIn = () => {
    const {userLogin} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const handleLogin = data => {
        userLogin(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(err =>{
            toast.error(err.message)
        })

    }

    return (
        <div className='flex mb-20 mt-8 justify-center items-center'>
            <div className='shadow-xl w-96 p-7 rounded-lg'>
                <h1 className='text-4xl text-blue-500 font-bold'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            {...register('password', { required: 'Password is required' })}
                            placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='mt-2 text-red-500'>Please enter your password</span>}
                    </div>
                    <p className='mt-2'>Forget Password? <button className='btn-link'>Reset Password</button></p>
                    <input className='btn btn-primary mt-3 w-full' value="Login" type="submit" />
                </form>
                <div className='mt-3'>
                    <Link className='mt-2 text-orange-500' to='/signup'>Create a new account</Link>
                </div>
                <div className="divider">OR</div>
                <button className="bg-red-500 w-full p-3 rounded-lg text-white font-semibold hover:bg-red-600"><FaGoogle className='inline mr-2 '></FaGoogle> Login with Google</button>
            </div>
        </div>
    );
};

export default SignIn;