import React,{useEffect, useState} from 'react'
import MoreVertIconRoundedIcon from '@material-ui/icons/MoreVertRounded'
import Me from '../Assets/Username.png'
import axios from "axios"

function Comments() {

  const [commen,setCommen]=useState(null)

  const fetchServer= async ()=>{
    const result =await (await axios.get('http://localhost:5000/api/post/seenPost',))
    setCommen(result.data)
   //  const result = axios.post('http://localhost:5000/api/post/seenPost')
 
  console.log(result);
 
  }

  useEffect(() => {
    fetchServer()
console.log(commen);
     
     },[commen])

  useEffect(() => {
 fetchServer()
  
  },[])
  return (
    <div className='col-8 bg-dark text-white com2' style={{height:'90%',borderRadius:'10px',display:'flex',flexDirection:'column',padding:'10px 32px'}}>
 
<div className='mb-4'><h2>Welcome...</h2>
<h4>Let's do a post today!!</h4> </div>


<div className='row bg-success hj' style={{borderRadius:'0px 50px 15px 50px',padding:'9px 8px 9px 8px'}}>
<div className="col-1  ">
<div  className='img2'  style={{backgroundImage:`url(${Me})`}}></div>
</div>

<div className="col-10   d-flex flex-column justify-content-between align-items-start">
<div className=' w-100'>
    <h6>Austin Gareth  <br />
    <i style={{fontSize:'0.7rem'}}>13:58 pm</i>
        </h6> 
 
</div>
<div className=' w-100 py-1' style={{fontSize:'0.8rem'}}>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta, ex veniam fugiat error doloremque optio dolorum, libero eum id nihil laudantium non nulla beatae vitae suscipit corporis quo. Consequatur?
 Quisquam voluptas eius totam doloribus incidunt cupiditate, assumenda praesentium facere ipsam nesciunt vero laborum ea odit necessitatibus atque ipsa natus temporibus minus ipsum aliquam quia numquam, dicta, perferendis est? Facere?
 </div>

</div>
<div className="col-1 d-flex justify-content-end">
    <MoreVertIconRoundedIcon/>
</div>



{/* {commen?.map((commen,index)=> <Card message={comment.message} name={comment.user_id.name} time={comment.createAt}/>)} */}

</div>
</div>

  )
}

export default Comments




//ipconfig 
// {time.split('T)}