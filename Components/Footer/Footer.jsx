import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type="submit">
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon"/>JourneyJoy
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            A good plus of traveling is that often you get new skills without difficulty and without even noticing it.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <FaTwitter className="icon"/>
            <IoLogoYoutube className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">


            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Services
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Insurance
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Agency
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Tourism
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Payment
              </li>
            </div>


          {/* grp2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTENERS
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Bookings
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Rentcars
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
               HotelWorld
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Trivago
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              India
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Bali
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              L.A
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Maldives
              </li>
              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              France
              </li>
            </div>
          </div>
          
          <div className="footerDiv flex" >
            <small>Best Travel Website Theme</small>
            <small>Copyrights Reserved- ANJALI 2024</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer;