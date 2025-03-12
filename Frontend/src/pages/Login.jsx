import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Icons for UI

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email || !password || (state === "Sign Up" && !name)) {
      setError('All fields are required');
      return;
    }

    // Simulate form submission or validation here
    setError('');
    // Proceed with login/signup logic
  };

  return (
    <form className='min-h-screen flex items-center justify-center bg-transparent px-6'>
      <div className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-blur-md animate-fade-in'>
        <h2 className='text-center text-3xl font-bold text-pink-500 transition-transform transform hover:scale-105'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className='text-center text-gray-500 mt-2'>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {/* Error message */}
        {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

        {/* Name input (only for Sign Up) */}
        {state === "Sign Up" && (
          <div className='mt-4'>
            <label className='block text-gray-600 text-sm font-semibold'>Name</label>
            <div className='flex items-center border rounded-lg mt-2'>
              <FaUserAlt className='text-pink-500 mx-3' />
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className='w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-pink-500'
              />
            </div>
          </div>
        )}

        {/* Email input */}
        <div className='mt-4'>
          <label className='block text-gray-600 text-sm font-semibold'>Email</label>
          <div className='flex items-center border rounded-lg mt-2'>
            <FaEnvelope className='text-pink-500 mx-3' />
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className='w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-pink-500'
            />
          </div>
        </div>

        {/* Password input */}
        <div className='mt-4'>
          <label className='block text-gray-600 text-sm font-semibold'>Password</label>
          <div className='flex items-center border rounded-lg mt-2'>
            <FaLock className='text-pink-500 mx-3' />
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className='w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-pink-500'
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={onSubmitHandler}
          className='w-full bg-pink-500 text-white py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105'
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle between Sign Up and Login */}
        {state === "Sign Up" ? (
          <p className='text-center mt-4'>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className='text-pink-500 underline cursor-pointer'>
              Login here
            </span>
          </p>
        ) : (
          <p className='text-center mt-4'>
            Create a new account?{' '}
            <span onClick={() => setState('Sign Up')} className='text-pink-500 underline cursor-pointer'>
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
