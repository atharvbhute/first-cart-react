import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {AuthLogin} from '../index';
import { useNavigate } from 'react-router-dom';

function AuthLayout({authProtection = true, children}) {

  const authStatus = useSelector(state => state.auth.status);
  const [authNeeded, setAuthNeede] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    if (authStatus == false && authProtection == true) {
        setAuthNeede(true);
    }
    if (authStatus == false && authProtection == false) {
        setAuthNeede(false);
    }
    if (authStatus == true && authProtection == true) {
        setAuthNeede(false);
    }
    if (authStatus == true && authProtection == false) {
        setAuthNeede(false);
    }
  },[authNeeded, authStatus, navigate])

  return authNeeded ? (
    <AuthLogin />
  ) : (<div>{children}</div>)
}

export default AuthLayout