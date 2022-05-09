import React from 'react'
import Error from '../Assets/errorpage.jpg'
import { useNavigate } from 'react-router-dom'

function Error_Page() {
    let navigate = useNavigate();
  return (
    <div>
        <img style={{width:'90vw', height:'80vh' }} src={Error} ></img>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'  }} >
                <button onClick={ () => {
            navigate("/")
        } }
         style={{borderRadius:'30px', padding:'8px 16px' , width:'400px', marginTop:'1rem' , backgroundColor:'orange', color:'white', border:'1px solid orange' }} 
         >
             Go Back

         </button>
         
</div>
    </div>
  )
}

export default Error_Page