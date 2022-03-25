import React from 'react'
import styled from 'styled-components'
import resonate from '../img/resonate.png'
export const Header = () => {
  return (
    <NavBar className='header'>
      <a href='https://www.resonate.cx'>
        <img src={resonate} alt='resonate_logo' />
      </a>
      <h2>Contacts</h2>
      <ol>
        <h3>Name</h3>
        <h3>Phone Number</h3>
        <h3>Email</h3>
        <h3>Address</h3>
      </ol>
    </NavBar>
  )
}

const NavBar = styled.div`
  background-color: #991a42;
  min-height: 20vh;
  position: sticky;
  position: ---webkit-sticky;
  top: 0;
  h2 {
    padding-bottom: 10px;
  }
  img {
    display: block;
    position: relative;
    margin-left: 10px;
    padding-top: 10px;
    @media (max-width: 768px) {
      width: 50%;
      left: 25%;
    }
  }

  ol {
    //background-color: white;
    color: #fff;
    letter-spacing: 0.1rem;
    padding-bottom: 10px;
    //margin: 50px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
