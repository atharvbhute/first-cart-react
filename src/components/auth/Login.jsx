import React, {useEffect, useState} from 'react'
import {Input, Button} from '../index';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/authService';
import { useDispatch, useSelector } from 'react-redux';
import { login as authLogin } from '../../features/authSlice';

function Login() {
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state =>  state.auth.status);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  },[]);

  const login = async(data) => {
    setError("");
    console.log(data);
    try {
      const userDetails = await authService.loginUser(data);
      if (userDetails) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate(-1);
        }     
      }
    } catch (error) {
      setError(error);
    }
  }


  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">Login </h1>
        <p className="text-gray-600 mb-6">
          Don't have an account ? {" "}<Link to="/signup" className='underline'>Signup here</Link>
        </p>
        <div className="mb-4">
          <form onSubmit={handleSubmit(login)} className="space-y-2">

            <Input
            type = "email"
              lable="Email :"
              placeholder="email"
              {...register("email", {
                required: true,
              })}
            />

            <Input
            type = "password"
              lable="password :"
              placeholder="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login