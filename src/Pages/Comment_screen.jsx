import React from 'react'
import Me from '../Assets/Username.png'
import Me1 from '../Assets/7T9364v.gif'
import {useParams, Link, Outlet } from 'react-router-dom'
import Comments from '../Components/Comments'
import Set from '../Components/Set'



function Comment() {
    let {username}=useParams()
  return (

    
    <div className='row gap-3' style={{backgroundImage:`url(${Me1})`,height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className='col-3 bg-dark text-white com1 py-4' style={{height:'90%',borderRadius:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
 <div className='here'>
<div  className='img1'  style={{backgroundImage:`url(${Me})`}}></div>

<div className='mt-3 w-100 text-center'><h5>{username}</h5></div>

<div className='mt-3 here1 bg-black text-center' >
    <Link className='btn1' to="/profile/comments" >Comments </Link>
    <Link className='btn1' to="/profile/Timeline" >Timeline</Link>
    <Link className='btn1'to="/profile/settings" >Profile</Link>
</div>


 </div>






 <div >
   <Link to="/" className='btn1'> <h6>Logout</h6></Link> 
 </div>


    </div>



 
 <Outlet/>
</div>
  )
}

export default Comment