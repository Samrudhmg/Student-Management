import axios from 'axios';
import React, { useRef, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./begin.css"

const Update = () => {
            const ref=useRef();
        const{id}=useParams();
        const Navigate=useNavigate();
    const [data, setdata] = useState([]);



    useState(()=>{
        axios.get('https://64f8af3a824680fd217fef13.mockapi.io/crud-try1/'+id)
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
        .catch((err)=>console.log(err))
    })

 
    const handleonsubmit=(e)=>{
        e.preventDefault();
        axios.put(  
            'https://64f8af3a824680fd217fef13.mockapi.io/crud-try1/'+id , data)
            .then((res)=>{
                console.log(res)
                alert('data is updated')
                Navigate('/')
                
            })
            
          


    }
    useEffect(()=>{
        ref.current.focus();
},[])


    
  return (
    <div>
        <h1>Update here</h1><br></br>
        <div className='main'>
           
    <form>
        <div className="name mb-3">
            <label htmlFor="exampleInputPassword1" id='namelabel'>Name</label>
            <input type="text" value={data.name} ref={ref}  onChange={(e)=>setdata({...data,name:e.target.value})}  className="form-control" id="exampleInputPassword1" />
        </div>


        <div className="email mb-3">
            <label htmlFor="exampleInputEmail1" id='emaillabel'>Email address</label>
            <input type="email" value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>


        <button  type="submit" onClick={handleonsubmit} className="btn ">Update</button>
    </form>
</div></div>
  )
}

export default Update