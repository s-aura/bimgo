  import React from 'react'
  import'../resources/Default-Layout.css'
  function DefaultLayout(props) {
    return (
      <div className='layout'>

         <div className="header d-flex justify-content-between align-items-center" >
              <h1 className='logo'> brokeOswald </h1>
           <div><h1 className='username'>userName</h1></div>   
         </div>
         <div className="content">
            {props.children}
         </div>
      </div>
    )
  }
  
  export default DefaultLayout