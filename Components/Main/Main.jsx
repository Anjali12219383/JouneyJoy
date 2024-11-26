import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img1.jpg';
import { HiLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.webp';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpeg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpeg';

import Aos from 'aos';
import 'aos/dist/aos.css';
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Manali',
    location: 'Himachal Pradesh',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Manali is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Kedarnath',
    location: 'Uttrakhand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'A popular destination for Hindu pilgrims, Kedarnath is one of the four major sites in Indias Chota Char Dham pilgrimage that also includes Badrinath, Gangotri and Yamunotri.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Darjeeling',
    location: 'West-bengal',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Darjeeling, a hill station in West Bengal, India, is a popular tourist destination known for its natural beauty, tea plantations, and views of the Himalayas.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Poovar Island',
    location: 'Kerala',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Palm-lined beaches, thrilling wildlife tours, breathtaking backwaters, resplendent hills adorned with tea, coffee, and spice plantations and spicy cuisine.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Jaipur',
    location: 'Rajasthan',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Rajasthan tourist cities like Jodhpur, Jaipur, Jaisalmer, and Udaipur are famous for their spectacular architectural structures, including the Hawa Mahal, Amber Fort, and City Palace.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Beaches',
    location: 'Goa',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Goa is a tiny emeralds land with its natural scenic beauty, attractive beaches and temples, famous for its architecture, feast and festivals and hospitable people with a rich culture.'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Mountains',
    location: 'Himachal Pradesh',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Himachal Pradesh is not only celebrated for its natural beauty and exquisite hill stations but also for eminent ancient temples and plenty of perennial rivers that flow through the state are the reason for numerous hydroelectric project setups.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Dal Lake',
    location: 'Kashmir',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The stunning natural landscapes, featuring the majestic Himalayas, lush green valleys, and pristine lakes, but also with its cool climate throughout the year.'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Taj Mahal',
    location: 'Agra',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Taj Mahal is one of the best travel destinations in the world.'
  },
]




const Main = () => {

  
    useEffect(()=>{
      Aos.init({duration: 2000})
    
    },[])
  

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
          return(
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle}/>
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className="continent flex">
                <HiLocationMarker className="icon"/>
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS
                  <FaClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
          )

        })

        }
      </div>
    </section>
  )
}

export default Main;