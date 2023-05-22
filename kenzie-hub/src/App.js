import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import  { ToastContainer }  from  'react-toastify';
import  'react-toastify/dist/ReactToastify.css';
import { TechProvider } from './providers/context';

function App() {

  return (
    <div className="App">
      <ToastContainer/>
        <Routes>
          <Route path='/'element={<LoginPage/>}/>
          <Route path='/registro' element={<RegisterPage/>}/>
          <Route path='/dashboard' element={
            <TechProvider>
              <DashboardPage/>
            </TechProvider>
          }/>
        </Routes>
    </div>
  );
}

export default App;
