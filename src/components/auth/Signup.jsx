import React, {useEffect} from 'react'
import {Input, Button} from '../index';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/authService';
import { useDispatch, useSelector } from 'react-redux';
import { login as authLogin } from '../../redux/features/authSlice';

function Signup() {

  const { register, handleSubmit, setError, formState: {errors}, clearErrors } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state =>  state.auth.status);

  // for signup page protection
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  },[]);

  const signup = async(data) => {
    try {
      const userDetails = await authService.createAccount(data);
      if (userDetails) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate(-1);
        }     
      }
    } catch (err) {
      setError("auth_service_error", {type: "custom", message: err.message})
      setTimeout(() => {
        clearErrors('auth_service_error')
      }, 7000);
    }
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Signup </h1>
        <p className="text-gray-600 mb-6">
          already have an account ?{" "}
          <Link to="/login" className="underline">
            Login here
          </Link>
        </p>
        <div className="mb-4">
        {errors.auth_service_error && <p className='text-white text-sm bg-red-500 rounded-md p-2 w-full'>{errors?.auth_service_error?.message + " try again in 10 seconds"}</p>}
          <form onSubmit={handleSubmit(signup)} className="space-y-2">
            <Input
              type="text"
              lable="Username :"
              placeholder="username"
              {...register("username", {
                required: "username is required",
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.username?.message}</p>
            <Input
              type="email"
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
              type="password"
              lable="password :"
              placeholder="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be minimum of 8 charachters"
                }
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.password?.message}</p>
            <Button type="submit">Signup</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
