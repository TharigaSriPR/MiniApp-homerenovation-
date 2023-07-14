// import React from 'react'
import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import {Button } from '@mui/material';
export default class home extends Component {
  render() {
    return (
       
      
      
        <div className='bg'>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br />
        <h1 className='name'  style={{color:"black"}}>HOMZY</h1><br />
        <h3 className='name'  style={{color:"black"}}>~  Towards renovation</h3>
        <br /><br /><br /><br /><br />
        <div className='but'>
        <Link to='/Login'>
        <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}}>login</Button><span></span> <span></span>
        </Link>
        <Link to='/Signup'>
        <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}}>Sign In</Button>
        </Link>
        </div>
        </div>
        )
      }
    }
    // import Button from '@mui/material/Button';
    
    // export default function Home(){
    //     return(
    //         <div className='home'>
    //         <h1 className='frisk'>FRISK</h1>
    //         <p className='frisk'>~GO FRESH</p>
    //         <Link to='/Signup'>
    //         <Button variant="">Sign Up</Button>
    //         </Link> 
    //         or 
    //         <Link to='/Login'>
    //         <Button variant="contained">Login</Button>
    //         </Link> 
    //         </div>
    //     )
    // }