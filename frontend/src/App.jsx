import Login from './components/Login'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () =>  {

  if (!localStorage.getItem('accessToken')?.length) {
      window.open('login',"_self")
  }

  const [user, setUser] = useState({})

  const getUserInfo = async (accessToken) =>
    await axios.get('http://localhost:5000/api/user/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
    }})

  useEffect(()=>{
    if (localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken')
      getUserInfo(accessToken)
        .then(res => setUser(res.data))
        .catch(err => console.error(err))
    }
  }, [])
  
  return (
    <div className="App">
      {
        localStorage.getItem('accessToken') != null ?
        <Navbar/> : 
        <Login/>
      }
        <Outlet context={[user, setUser]}/>
      {
        localStorage.getItem('accessToken') != null ?
        <Footer/> : 
        ''
      }

    </div>
  );
}

export default App;
