import React from 'react'
import {Input, Button} from '../index';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Signup() {

  const { register, handleSubmit } = useForm();
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
          <form action="" className="space-y-2">
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
      </div>
    </div>
  );
}

export default Signup;
