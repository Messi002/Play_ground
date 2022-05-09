import React from 'react'

function Set() {
 
    return (

    <div className='col-8 bg-dark text-white com2' style={{height:'90%',borderRadius:'10px',display:'flex',flexDirection:'column',padding:'10px 32px'}}>
 
    <div className='mb-4'><h2>Profile</h2></div>
    
    {/* settings portion block */}
    
    
       
        <div className='row hj' style={{borderRadius:'0px 50px 15px 50px',padding:'9px 8px 9px 8px' }}>

        <form  className='w-50 m-auto' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItem:'center'}}>
        
           <div>
                <p>Username</p>
                <input type='text' style={{width:'400px'}} />
           </div>
        
           <div type='text' style={{marginTop:'1rem' }} >
                <p>Email</p>
                <input type='text' style={{width:'400px'}} ></input>
           </div>
        
           <div style={{marginTop:'1rem' }} >
                <p>Mobile</p>
                <input type='text' style={{width:'400px'}} ></input>
           </div>
        
        <hr></hr>
        <button style={{borderRadius:'30px', width:'400px', marginTop:'1rem' , backgroundColor:'orange', color:'white', border:'1px solid orange' }}>UPDATE</button>
        
        </form>
        
        
        </div>
        
        
        
        </div>

  )
}

export default Set
