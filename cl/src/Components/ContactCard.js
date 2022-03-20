import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/actions/contact'

function ContactCard({card}) {
  const   dispatch=useDispatch()
  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{card.name}</Card.Title>
    <Card.Title>{card.phone}</Card.Title>
    <Card.Text>
      {card.email}
    </Card.Text>
    <Button variant="primary" onClick={()=>dispatch(deleteContact(card._id))}>DELTE</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactCard