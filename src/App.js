import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Button} from 'antd'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      
      <Routes>

      <Route path ='/' element={<Home/>}/>
      <Route path ='/Test' element={<Test/>}/>
      <Route path ='/Login' element={<Login/>}/>
      <Route path ='/Register' element={<Register/>}/>

      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
