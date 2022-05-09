import React from 'react'
import { Link } from 'react-router-dom'
import Me1 from '../Assets/7T9364v.gif'


function Create() {
  return (
    <div className='row' style={{backgroundImage:`url(${Me1})`,height:'100vh',width:'100vw',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className='col-12 bg-dark' style={{height:'90%', width:"800px",borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
 <form action="" method="post" className='w-75 m-auto '>
 <div className='' style={{color:'orange',marginBottom:'30px',marginTop:'20px'}}> <h1>Create Account</h1> </div>
 <div style={{marginBottom:'20px'}}>
   <label for="name">Name</label>
   <input type="text" name="name"  className='w-100'/>
 </div>
 
 <div style={{marginBottom:'20px'}}>
   <label for="phone">Phone Number</label>
   <input type="tel" name="phone" id="phone" className='w-100'/>
 </div>

 <div className='here3' style={{marginBottom:'20px',display:'flex',justifyContent:'space-around'}}>
     <div>
     <label for="gender">Gender</label>
  <select name="gender" id="" className='w-100 h-50 bg-white' style={{borderRadius:'5px',borderBottom:'4px solid orange '}}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
  </select>
     </div>
   
<div>
<label for="date">DoB</label> 
   <input type="date" name="date"  className='w-100'/>
</div>
 
 </div>

 <div style={{marginBottom:'40px'}}>
   <label for="password">Password</label>
   <input type="password" name="password" id="password" className='w-100'/>
 </div>

 <div style={{marginBottom:'20px'}}>

 <Link to="/profile">
   <input type="button" value="Sign Up" className='w-100'/>
   </Link>
 </div>

 </form>
    </div>
   
</div>
  )
}

export default Create