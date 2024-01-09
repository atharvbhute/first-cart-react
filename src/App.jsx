import { useState, useEffect } from 'react'
import { Sidebar, Header, Footer, BodyLoader } from './components/index'
import { productService } from './appwrite/productService';
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService';
import { login, logout } from './redux/features/authSlice';
import { Outlet } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


function App() {

  const [loader, setLoader] = useState(true);
  const [isUser, setIsUser] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((results)=> {
      if(results == null){
        setIsUser('user logged out')
        console.log("user not found");
        dispatch(logout());
      }else{
        setIsUser('user logged in')
        console.log("user found");
        dispatch(login({userData : results}));      
      }
    })
    .finally(() => setLoader(false));
  },[]);

  return !loader ? (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <div className="flex justify-center px-7 py-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <BodyLoader />
    </div>
  );
}
export default App
