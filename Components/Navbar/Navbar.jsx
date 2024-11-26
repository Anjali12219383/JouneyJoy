import React,{useState} from 'react';
import './navbar.css';
import {GiJourney} from 'react-icons/gi';
import {IoMdCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] =useState('navBar');
  const [message, setMessage] = useState('');

  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }
  const Booking = () => {
    // Example logic for booking
    setMessage("Redirecting to booking page...");

    // Simulating navigation or further logic
    setTimeout(() => {
      window.location.href = './Components/Booking'; // Change URL to your booking page
    }, 1500); // Wait for 1.5 seconds before redirecting
  };


  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><GiJourney className="icon"/>JourneyJoy</h1>
          </a>
        </div>
        <div className={active}>
        <ul className="navlists flex">
          <li className="navItem">
            <a href="#" className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Packages</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Shop</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">About</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Pages</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">News</a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">Contact</a>
          </li>
          <button className='btn' onClick={Booking}>
            <a href="#">BOOK NOW</a>
          </button>
        </ul>
        <div onClick={removeNavbar} className="closeNavbar">
        <IoMdCloseCircle className="icon"/>
        </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        <PiDotsNineBold className="icon"/>
        </div>



      </header>
      {message && <p className="bookingMessage">{message}</p>}

    </section> 
  )
}

export default Navbar;