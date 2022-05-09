import React from 'react'
import Me from '../Assets/Me.jpeg'
import Me1 from '../Assets/7T9364v.gif'




function Settings() {
  return (
   
    <div className='row gap-3' style={{backgroundImage:`url(${Me1})`,height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className='col-3 bg-dark text-white com1 py-4' style={{height:'90%',borderRadius:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
 <div className='here'>
<div  className='img1'  style={{backgroundImage:`url(${Me})`}}></div>

<div className='mt-3 w-100'><h5>Username</h5></div>

<div className='mt-3 here1 bg-black text-center' >
    <div>Comments</div>
    <div>Timeline</div>
    <div>Profile</div>
</div>


 </div>






 <div>
     <h6>Logout</h6>
 </div>


    </div>







 
</div>
  )
}

export default Settings