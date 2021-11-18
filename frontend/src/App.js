import Login from './components/Login'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () =>  {
  
  return (
    <div className="App">
      {
        localStorage.getItem('accessToken') != null ?
        <Navbar/> : 
        <Login/>
      }
        <Outlet/>
      {
        localStorage.getItem('accessToken') != null ?
        <Footer/> : 
        ''
      }

    </div>
  );
}

export default App;
