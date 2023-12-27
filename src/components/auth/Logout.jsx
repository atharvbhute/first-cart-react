import React, {useState, useEffect} from 'react'
import authService from '../../appwrite/authService'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/authSlice';

function Logout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state =>  state.auth.status);

  useEffect(() => {
    if (isLoggedIn) {
      authService.logout().then(() => {
        dispatch(logout())
        navigate(-1);
      })
    }else{
      navigate("/login");
    } 
  },[]);
  return (
    <div className='h-[100vh]'></div>
  )
}

export default Logout