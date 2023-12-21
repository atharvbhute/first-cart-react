import { useState, useEffect } from 'react'
import { Sidebar } from './components/index'
import { productService } from './appwrite/productService';
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService';
import { login, logout } from './features/authSlice';



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
    <>
    <h1>Content</h1>
    
    </>
  ) : (
    <h1>loading.....</h1>
  )
}
export default App