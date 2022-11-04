import React from 'react'
import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios'
function Register() {
   
const onFinish= async(values)=>{
    try {
      await axios.post('/api/users/register', values)
     message.success('Registration Successfull')
    }
     catch (error){
     message.error('something went wrong')
     }
}
  return (
    <div className='register'>

      <div className="row justify-content-center align-items-center w-100 h-100">  

       <div className="col-md-5">
       <div className='lottie'>
       <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_z6scuqaw.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
       </div>
       </div>
       <div className="col-md-5">
           <Form layout='vertical' onFinish={onFinish}>
            <h1>Broke-Oswald Register</h1>
            <hr/> 
                 <Form.Item label= 'Name' name ='name'>
                      <Input/>   
                 </Form.Item>
                 <Form.Item label= 'Email' name ='email'>
                      <Input/>
                 </Form.Item>
                 <Form.Item label= 'Password' name ='password'>
                      <Input/>
                 </Form.Item>
                 <div className="d-flex justify-content-between align-item-center">
                  <Link to ='/Login'>
                   Already Registered? Click Here to Login
                  </Link >
                  <button className='primary' type= "submit">Register</button>
                 </div>
           </Form>
       </div>

      </div>

    </div>
  )
}

export default Register