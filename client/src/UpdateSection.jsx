import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Updatesection() {
    const {id}=useParams()
    const [code,setCode]=useState()
    const [section,setSection]=useState()
    const [bureau,setBureau]=useState()
    const navigate=useNavigate()
  
     useEffect(()=>{
      axios.get('http://localhost:3001/getSection/'+id)
      .then(result=>{
        console.log(result)
         setCode(result.data.code);
         setSection(result.data.section);
         setBureau(result.data.bureau);
      })
      .catch(err=>console.log(err))

  },[id])

  const Update=(e)=>{
     e.preventDefault();
        axios.put("http://localhost:3001/updatesection/"+id,{code,section,bureau})
        .then(result=>{
            console.log(result)
            navigate('/sections')
        })
        .catch(err=>console.log(err))
  }

    return (
      <div className="vh-100 d-flex w-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
    <form action="" onSubmit={Update}>
    <h2>Update Section</h2>
    <div className="mb-2">
      <label htmlFor="">code</label>
      <input type="text" placeholder="Enter code section" className="form-control" 
      value={code}  onChange={(e)=>setCode(e.target.value)}/>
    </div>
    <div className="mb-2">
      <label htmlFor="">section</label>
      <input type="text" placeholder="Enter nom de la section" className="form-control"
       value={section}  onChange={(e)=>setSection(e.target.value)}/>
    </div>
    <div className="mb-2">
      <label htmlFor="">bureau</label>
      <input type="text" placeholder="Enter le bureau" className="form-control"
       value={bureau}  onChange={(e)=>setBureau(e.target.value)}/>
    </div>
    <button className="btn btn-success">Update Section</button>
    </form>
  </div>


</div>
  )
}

export default Updatesection