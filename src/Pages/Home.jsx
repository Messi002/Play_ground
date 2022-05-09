import React from 'react'
import { Link } from 'react-router-dom'
import createaccount from '../Assets/createaccount_pic.png'
import login from '../Assets/login_pic.png'
import Me1 from '../Assets/7T9364v.gif'

function Home() {
    
  return (
    <div className='row hg' style={{backgroundImage:`url(${Me1})`,height:'100vh',width:'100vw',backgroundColor:'white',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
    <div className='col-12 bg-dark' style={{height:'90%', width:"900px",borderRadius:'10px',display:'flex',justifyContent:'center', flexDirection:'column'}}>
 {/* <form action="" method="post" className='w-75 m-auto '> */}
 <div className='text-center' style={{color:'orange',marginBottom:'40px'}}> <h1>WELCOME</h1> </div>

<div className="row">
 <div className='col-sm-12 col-md-6 col-lg-6' style={{}}>
   
   <img style={{width:'100%', height:'300px' }} src={createaccount} ></img>
<Link to="/create">
   <button style={{borderRadius:'30px', padding:'8px 16px' ,  width:'400px', marginTop:'1rem' , backgroundColor:'orange', color:'white', border:'1px solid orange' }} >Create</button>
</Link>
 </div>



 <div className=' text-white col-sm-12 col-md-6 col-lg-6' style={{}}>
  
 <img style={{width:'100%', height:'300px' }} src={login} ></img>
<Link to="/login">
<button style={{borderRadius:'30px', padding:'8px 16px' , width:'400px', marginTop:'1rem' , backgroundColor:'orange', color:'white', border:'1px solid orange' }} >Login</button>
</Link>
 </div>

 </div>


    </div>
   
</div>
  )
}

export default Home