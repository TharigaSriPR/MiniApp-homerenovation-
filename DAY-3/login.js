
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const [userName, setuserName] = useState("");
  
  const [password, setPassword] = useState("");
  

  const formHandler=(event)=>{
    event.preventDefault();
    const obj={
      userName:userName,
      
      password:password,
      
    }
    
    console.log(obj);

  }
  return (
    <div className='All'>
     <form onSubmit={formHandler}>
      <div className='btn-log'>
      <Link to='/Login'>
      <Button variant="contained" style={{backgroundColor:"black"}} >Log In</Button>
      </Link>
      
      <Link to='/Signup'>
      <Button variant="outlined" style={{backgroundColor:"white" }}>Sign Up</Button> 
      </Link>
      </div>
    <div className='text'>
    <br></br><TextField id="outlined-basic" label="Email" type="email" variant="outlined"
    value={userName} onChange={e => setuserName(e.target.value)} required /><br></br>
     <br></br><TextField id="outlined-basic" label="PassWord" variant="outlined" onChange={e => setPassword(e.target.value)} required /><br></br>
    
    </div>
    <br></br>
    <div className='cont'>
    <Link to='/land'>
    
    <Button variant="contained" type="submit" style={{backgroundColor:"white",color:"black" }}>Continue</Button>
    </Link>
    </div>
    <div className='cns'>
    <br></br>or Connect with Social Media<br></br></div>
    <div className='goog'>
    <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}} >Log In with Google</Button></div>
    <br></br>
    <div className='fb'>
    <Button variant="outlined" style={{color:"black",border:"solid" }}>Log In with FaceBook</Button></div>
    </form>

 </div>
  ) 
}

export default Login