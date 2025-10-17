import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Sections() {
  const [sections, setSections] = useState([]);

 
  useEffect(()=>{
axios.get('http://localhost:3001/sections')
.then(result=>setSections(result.data))
.catch(err=>console.log(err))

  },[])

 
  
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteSection/'+id)
    .then(res=>{console.log(res)
    window.location.reload()
    })
    .catch(err=>console.log(err))
    }

  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center flex-wrap ">
      <div className="w-90 bg-white rounded p-3 m-3">
       <Link to="/createsection" className='btn btn-success'>Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>code</th>
              <th>section</th>
              <th>bureau</th>
            
            </tr>
          </thead>
          <tbody>
            {sections.map((section)=>{
             return <tr>
               <td>{section.code}</td>
               <td>{section.section}</td>
               <td>{section.bureau}</td>
               <td>
                 <Link to={`/updatesection/${section._id}`} className='btn btn-success m-1 bg-primary'>Update section </Link>
     
                 <button className='btn btn-success m-1 bg-danger' onClick={()=>handleDelete(section._id)}>Delete</button>
                </td>
              </tr>
            })
            }
          </tbody>
        </table>
      </div>


      
    </div>
  );
}

export default Sections;