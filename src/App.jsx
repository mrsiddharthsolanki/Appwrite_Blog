import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react";
import authService from "./appwrite/auth"
import { login,logout } from "./store/authSlice";
import { Outlet } from "react-router-dom"
// import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  
  const [loading, setLoading] = useState(true); 
  const dispatch = useDispatch();
  
  useEffect(() => {
  const checkUser = async () => {
    try {
      // Try to get current session first
      const session = await authService.account.getSession('current');
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log("Not logged in", error);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  checkUser();
}, [dispatch]);


  return !loading ?  (
    <div className='min-h-screen flex flex-col bg-gray-400'>
      <Header/>
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ) : (
      <div className="w-full h-screen flex justify-center items-center text-xl font-bold">
        Loading...
      </div>
     );
}

export default App
