import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
function FetchContacts() {
  const contactsURL = 'https://jsonplaceholder.typicode.com/users'

  const [contacts, setContacts] = useState({
    contactDetails: [],
  })

  useEffect(() => {
    fetchingContacts()
  }, [Contacts])

  const fetchingContacts = () => {
    axios.get(contactsURL).then((response) => {
      console.log(response.data)
      setContacts({
        contactDetails: response.data,
      })
    })
  }
  return <Contacts contacts={contacts.contactDetails} />
}

export default FetchContacts
