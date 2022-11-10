import React from 'react'
import { Form, Input, message } from 'antd';
import '../resources/authentication.css'
import{Link ,useNavigate} from "react-router-DOM";
import axios from 'axios'
function Login() {
   
const onFinish= async(values)=>{
  let navigate= useNavigate()
    try {
    const response =  await axios.post('/api/users/login', values)
    localStorage.setItem('brokeoswal-user',JSON.stringify(response))
    message.success('login successful')
    navigate('/') 
    }
     catch (error){
     message.error('login failed')
     }
}


  return (
    <div className='Login'>

      <div className="row justify-content-center align-items-center w-100 h-100">  

      
       <div className="col-md-5">
           <Form layout='vertical' onFinish={onFinish}>
            <h1>Broke-Oswald Login</h1>
            <hr/> 
                 
                 <Form.Item label= 'Email' name ='email'>
                      <Input/>
                 </Form.Item>
                 <Form.Item label= 'Password' name ='password'>
                      <Input/>
                 </Form.Item>
                 <div className="d-flex justify-content-between align-item-center">
                  <Link to ='/Register'>
                 Not yet Registered  Click Here to Register
                  </Link >
                  <button className='primary' type= "submit">Login</button>
                 </div>
           </Form>
       </div>
       <div className="col-md-5">
       <div className='lottie'>
       <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_z6scuqaw.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
       </div>
       </div>
      </div>

    </div>
  )
}

export default Login