import React from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'
const Contacts = (props) => {
  const { contacts } = props
  //console.log(contactDetails)
  if (contacts.length > 0) {
    return contacts.map((contact) => {
      //console.log(contact)
      return (
        <Card key={contact.id}>
          <ContactList className='contact'>
            <h4 className='name'>{contact.name}</h4>
            <h4 className='phone'>{contact.phone}</h4>
            <h4 className='email'>{contact.email}</h4>
            <Address className='address'>
              <h4 className='suite'>{contact.address.suite}</h4>
              <h4 className='street'>, {contact.address.street}</h4>
              <h4 className='city'>, {contact.address.city}</h4>
            </Address>
          </ContactList>
        </Card>
      )
    })
  } else {
    return <Loading />
  }
}
const Card = styled.div`
  min-height: 10vh;
  //box-shadow: 0px 5px 30px rgba(0, 0, 0, 0);
  text-align: center;
  //border-radius: 1rem;
  border: 0.5px solid black;
  overflow: hidden;
  :hover {
    background-color: #cf8933;
    color: #fff;
    border: 0;
    //font-size: 1.1rem;
  }
`

const ContactList = styled.div`
  margin: 25px;
  //min-height: 50vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`
const Address = styled.div`
  display: flexbox;
  @media (max-width: 900px) {
    display: block;
  }
`
export default Contacts
