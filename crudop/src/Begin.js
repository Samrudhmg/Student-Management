import React, { useEffect, useState } from 'react'
import axios from "axios";
import './begin.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';



const Begin = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')


    const Navi=useNavigate();
    const ref=useRef();

        const handleonclick=(e)=>{
           e.preventDefault();
           axios.post(  
            'https://64f8af3a824680fd217fef13.mockapi.io/crud-try1',{
            name:name,
            email:email
           })
           
           .then((res)=>{
            console.log(res)
            Navi("/ ");
           })

        }
        useEffect(()=>{
            ref.current.focus();
   },[])


    return (
        <> <h1>Fill the form</h1><br></br>
        <div className='main'>
           
            <form>
                <div className="name mb-3">
                    <label htmlFor="exampleInputPassword1" id='namelabel'>Name</label>
                    <input type="text" ref={ref} onChange={(e)=>setname(e.target.value) } className="form-control" id="exampleInputPassword1" />
                </div>


                <div className="email mb-3">
                    <label htmlFor="exampleInputEmail1" id='emaillabel'>Email address</label>
                    <input type="email" onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>


                <button onClick={handleonclick} type="submit" className="btn">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Begin