import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAToken, backendUrl } = useContext(AdminContext); 

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!backendUrl) {
      toast.error('Backend URL is not defined!');
      return;
    }

    try {
      const endpoint = state === 'Admin' ? '/api/admin/login' : '/api/doctor/login';
      
      const response = await axios.post(`${backendUrl}${endpoint}`, { email, password }, {
        headers: { 'Content-Type': 'application/json' }
      });

      const { data } = response;

      if (data.success) {
        localStorage.setItem('aToken', data.token);
        setAToken(data.token);
        toast.success('Login successful!');
      } else {
        toast.error(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-red-400">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
          />
        </div>
        <button type="submit" className="bg-red-400 text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        <p>
          {state === 'Admin' ? (
            <>Doctor Login? <span className="text-red-500 underline cursor-pointer" onClick={() => setState('Doctor')}>Click here</span></>
          ) : (
            <>Admin Login? <span className="text-red-500 underline cursor-pointer" onClick={() => setState('Admin')}>Click here</span></>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
