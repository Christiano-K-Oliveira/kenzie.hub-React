import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import  { ToastContainer }  from  'react-toastify';
import  'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/'element={<LoginPage/>}/>
        <Route path='/registro' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
