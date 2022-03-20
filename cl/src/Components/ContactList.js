import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../redux/actions/contact'
import contactReducer from '../redux/reducers/contactReducer'
import ContactCard from './ContactCard'

function ContactList() {
const dsipatch=useDispatch()
const contacts=useSelector((state)=>state.contactReducer.ContactList)
const load=useSelector((state)=>state.contactReducer.load)
useEffect(() => {
    dsipatch(getContacts())
}, [])
  return (
   <div>{load? <p>loadding</p>: contacts?.map((el)=><ContactCard card={el}  key={el.id}  />)}
   </div>
  )
}

export default ContactList