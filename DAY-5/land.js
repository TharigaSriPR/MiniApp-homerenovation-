import React from 'react'
// import Button from '@mui/material/Button';
// import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import { padding } from '@mui/system';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';
import { FaFacebook ,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa';
import { colors } from '@mui/material';

export default function Land() {
  return (
    <div>
    <div><Navbar/>
    <div className='land'>
   
    <h1>Find out ways to renovate home</h1>
       
    <div className='fridge'>
    <h1 >MAKE YOUR OWN PLAN!!...</h1>
    <br></br>
       <p>Welcome to HOMZY</p>
       <br></br>
       <br></br>
       <p>At Dream Renovations, we believe that every home has
         the potential to become a dream space. With over 15 years of experience in the industry, we have been transforming homes with our expert renovation services. Our mission is to deliver exceptional craftsmanship, personalized design solutions, and unparalleled customer satisfaction.</p>
         <p>Contact us today for a free consultation and estimate. Our friendly team is ready to discuss your renovation ideas, answer your questions, and help you take the first step towards transforming your home.</p>
    </div><br/><br></br>
   <br/><br></br>
    <br/><br></br>
    <div className='fridgeicon'>
    <br></br>
    <Link to='/fruits'>
        <AddIcon /> 
      </Link>    DESIGN
      <br></br>
      <br></br>
      <Link to='/vegi'>

        <AddIcon />
    
      </Link>
      STRUCTURE
      <br></br><br></br>
      <Link to='/meat'>

        <AddIcon />
    
      </Link>
      ELEVATION
      <br></br><br></br>

      <Link to='/diary'>

        <AddIcon />
     
      </Link>
      DIMENSIONS
    </div>
    </div></div>
    <div>
      <br></br>
      <br></br>

    </div>
    <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
            <h5 style={{color:'white'}}>Quick Links</h5>
                            <p style={{color:'white'}}><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                            <p style={{color:'white'}}><i class="fa-solid fa-envelope"></i>727721eucs169@gmail.com</p>
                            <p style={{color:'white'}}><i class="fa-solid fa-paper-plane"></i> TamilNadu, India.</p>
                            <div className="footer-icons">
                            <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook  style={{color:'white'}}/>  
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{color:'white'}}/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram  style={{color:'white'}}/>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{color:'white'}} />
        </a>
      </div>
                            </div>
            </div>
        </>
</div>
  )
}
