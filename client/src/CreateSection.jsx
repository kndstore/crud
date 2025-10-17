import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function CreateSection() {
    const [code,setCode]=useState()
    const [section,setSection]=useState()
    const [bureau,setBureau]=useState()
    const navigate=useNavigate()
    

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createsection",{code,section,bureau})
        .then(result=>{
            console.log(result)
            navigate('/sections')
        })
        .catch(err=>console.log(err))
    }
  return (
    
        <div className="vh-100 d-flex w-100 bg-primary justify-content-center align-items-center">
  <div className="w-50 bg-white rounded p-3">
   <form action="" onSubmit={Submit}>
    <h2>Add Section</h2>
    <div className="mb-2">
      <label htmlFor="">code</label>
      <input type="text" placeholder="Enter le code" className="form-control" 
      onChange={(e)=>setCode(e.target.value)}/>
    </div>
    <div className="mb-2">
      <label htmlFor="">Section</label>
      <input type="text" placeholder="Enter le nom de la secyion" className="form-control"
      onChange={(e)=>setSection(e.target.value)} />
    </div>
    <div className="mb-2">
      <label htmlFor="">Bureau</label>
      <input type="text" placeholder="Enter le bureau" className="form-control" 
      onChange={(e)=>setBureau(e.target.value)}/>
    </div>
    <button className="btn btn-success">Submit</button>
 </form>
  </div>
</div>
    
  )
}

export default CreateSection