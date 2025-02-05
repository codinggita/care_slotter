import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className='min-h-screen flex items-center justify-center bg-transparent px-6'>
      <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-blur-md animate-fade-in'>
        <h2 className='text-center text-3xl font-bold bg-blue-500transition-transform transform hover:scale-105'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
        <p className='text-center text-gray-500 mt-2'>Please {state === 'Sign Up' ? 'sign up ' : 'log in'} to book an appointment</p>
        {
          state === "Sign Up" &&
          <div className='mt-4'>
          <label className='block text-gray-600 text-sm font-semibold'>Name</label>
          <input type='Name' onChange={(e) => setName(e.target.value)} value={name} required className='w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500' />
        </div>
        }
       
        <div className='mt-4'>
          <label className='block text-gray-600 text-sm font-semibold'>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required className='w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500' />
        </div>
        <div className='mt-4'>
          <label className='block text-gray-600 text-sm font-semibold'>Password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required className='w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500' />
        </div>
        <button className='w-full bg-blue-500 text-white py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-green-300 transition-all transform hover:scale-105'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>

        {
          state === "Sign Up"
          ? <p>Already have an account?<span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'> Login here</span></p>
          : <p>Creat an new account? <span onClick={() => setState('Sign Up')}  className='text-primary underline cursor-pointer'>click here</span></p>
        }



      </div>
    </form>
  );
};

export default Login;