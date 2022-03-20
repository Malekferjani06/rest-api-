import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions/contact'

function Add() {
  const dispatch=useDispatch()
  const [newContact, setNewContact] = useState( {name:"",email:"",phone:""})
  const handlechange=(e)=>{
    setNewContact({...newContact,[e.target.name]:e.target.value    })
    const handleAdd=()=>{
      dispatch(addContact(newContact))
    }
  }
  return (
    <div>
    <h1>Add</h1>
    <label>Name</label>
    <input type='text' placeholder='enter name here 'name='name' onChange={handlechange} />
    <label>email</label>
    <input type='email' placeholder='enter email here 'name='email' onChange={handlechange} />
    <label>Phone</label>
    <input type='Number' placeholder='enter phone here 'name='phone' onChange={handlechange} />

<Button   >ADDD</Button>


    </div>
  )
}

export default Add