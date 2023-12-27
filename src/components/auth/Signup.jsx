import React, {useState, useEffect} from 'react'
import {Input, Button} from '../index';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/authService';
import { useDispatch, useSelector } from 'react-redux';
import { login as authLogin } from '../../features/authSlice';

function Signup() {

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
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
    setError("");
    try {
      const userDetails = await authService.createAccount(data);
      if (userDetails) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate(-1);
        }     
      }
      console.log(error);
    } catch (err) {
      console.log("Signup Error", err);
      setError(err);
    }
    console.log(error);
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">Signup </h1>
        <p className="text-gray-600 mb-6">
          already have an account ?{" "}
          <Link to="/login" className="underline">
            Login here
          </Link>
        </p>
        <div className="mb-4">
          <form onSubmit={handleSubmit(signup)} className="space-y-2">
            <Input
              type="text"
              lable="Username :"
              placeholder="username"
              {...register("username", {
                required: true,
              })}
            />

            <Input
              type="email"
              lable="Email :"
              placeholder="email"
              {...register("email", {
                required: true,
              })}
            />

            <Input
              type="password"
              lable="password :"
              placeholder="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit">Login</Button>
          </form>
        </div>
        <p className='bg-red-300'>{error}</p>
      </div>
    </div>
  );
}

export default Signup;
