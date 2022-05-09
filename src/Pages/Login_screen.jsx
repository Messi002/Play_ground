import React from 'react'
import { Link } from 'react-router-dom'
import Me1 from '../Assets/7T9364v.gif'

function Login() {
  return (
    <div className='row' style={{backgroundImage:`url(${Me1})`,height:'100vh',width:'100vw',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className='col-12 bg-dark' style={{height:'90%', width:"800px",borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
 <form action="" method="post" className='w-75 m-auto '>
 <div className='' style={{color:'orange',marginBottom:'40px'}}> <h1>Login</h1> </div>
 <div style={{marginBottom:'20px'}}>
   <label for="phone">Phone Number</label>
   <input type="tel" name="phone" id="phone" className='w-100'/>
 </div>

 <div style={{marginBottom:'40px'}}>
   <label for="password">Password</label>
   <input type="password" name="password" id="password" className='w-100'/>
 </div>

 <div style={{marginBottom:'20px'}}>
  
  <Link to="/profile">
   <input type="button" value="Sign In" className='w-100'/>
   </Link>
 </div>

 </form>
    </div>
   
</div>
  )
}

export default Login