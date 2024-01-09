import React, {useState} from 'react'
import {Input, Button, BtnLoader} from '../index';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/authService';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../../redux/features/authSlice';

function Login() {
  const {register, handleSubmit, formState: {errors}, setError, clearErrors} = useForm();
  const [loaginLoader, setLoginLoader] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async(data) => {
    console.log(data);
    try {
      setLoginLoader(true)
      const userDetails = await authService.loginUser(data);
      if (userDetails) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate('/')
        }
      }
    } catch (error) {
      setError("auth_service_error", {type: "custom", message: error.message})
      setTimeout(() => {
        clearErrors('auth_service_error')
      }, 7000);
    } finally {
      setLoginLoader(false)
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
        {errors.auth_service_error && <p className='text-white text-sm bg-red-500 rounded-md p-2 w-full'>{errors?.auth_service_error?.message + " try again in 10 seconds"}</p>}
          <form onSubmit={handleSubmit(login)} className="space-y-2">
            <Input
            type = "email"
              lable="Email :"
              placeholder="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "invalid email"
                }
              })}
            />
            <p className='text-red-900 text-sm inline-block'>{errors?.email?.message}</p>
            <Input
            type = "password"
              lable="password :"
              placeholder="password"
              {...register("password", {
                required: "password is required",
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.password?.message}</p>
            <Button type="submit">{loaginLoader ? (<BtnLoader />) : "Signup"}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login