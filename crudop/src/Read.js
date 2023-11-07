import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './main.css'


const Read = () => {

  
const Nav=useNavigate();


    
  const [data, setdata] = useState([])

  function getdata() {
    axios.get('https://64f8af3a824680fd217fef13.mockapi.io/crud-try1')
      .then((res) => {
        console.log(res.data)
        setdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }



  useEffect(() => {
    getdata();
  }, [])



  const handleondelete = (id) => {
    axios.delete(`https://64f8af3a824680fd217fef13.mockapi.io/crud-try1/${id}`)
      .then(() => {
        getdata()
      })

  }
  const handlenew=()=>{
        Nav('/');
       
  }



  return (
    <div className='read'>
      <div className='buttons'>
        <div className="d-grid gap-2 d-md-block">
         <Link to={'/begin'}><button className="btn1 btn-primary" onClick={handlenew} type="button">ADD RECORD </button></Link> 
          
        </div>
        </div>
      <h1 id='studentlist'>Student-List</h1><br></br>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">data</th>
            <th scope="col">Handle</th>
            <th></th>
            <th></th>

          </tr>
        </thead>
        {
          data.map((item, id) => {
            return (
              <Fragment key={id}>
                <tbody className='tbody' >
                  <tr>
                    <td scope="row">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`/update/${item.id}`}><button id='edit' >Edit</button></Link></td>
                    <td><button id='delete' onClick={() => { handleondelete(item.id) }}>Delete</button></td>

                  </tr>

                </tbody>
              </Fragment>
            )
          })
        }

      </table>
      
    </div>
  )
}

export default Read