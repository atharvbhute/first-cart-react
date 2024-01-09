import React, {useEffect} from 'react'
import authService from '../../appwrite/authService'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/authSlice';

function Logout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state =>  state.auth.status);

  useEffect(() => {
    if (isLoggedIn) {
      authService.logout().then(() => {
        dispatch(logout())
        navigate("/login");
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