import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminSignUp from './Components/AdminSignUp';
import UserSignUp from './Components/UserSignUp';
import AdminHomePage from './Components/AdminHomePage';
import PageNotFound from './Components/PageNotFound';
import ResetPassword from './Components/ResetPassword';

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/adminSignUp' element={<AdminSignUp/>} />
        <Route path='/userSignUp' element={<UserSignUp/>}/>
        <Route path='/adminHomePage/*' element={<AdminHomePage/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
