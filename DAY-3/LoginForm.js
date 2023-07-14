// import axios from 'axios';
import React, { useState } from 'react';
import  TextField  from '@mui/material/TextField';

function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
const[error,setEror]= useState(false)

const formHandler=(event)=>{
    event.preventDefault();
    const obj={
        firstName:firstName,
        lastName:lastName,
        // password:password,
        // email:email
        }
        
console.log(obj);

if(firstName.length===0  || lastName.length===0){
    setEror(true)
}
if(firstName && lastName){
    console.log("FirstName:", firstName,"\nLastName: ",lastName)
}
    //axios.post(ur1/obj);

}

  return (
    <div className='All'>
    <form onSubmit={formHandler}>
    <div>
    <TextField
    id="outlined-name"
    label="Name"
    value={firstName}
    onChange={e => setFirstName(e.target.value)}
    placeholder="firstname enter"
    />
    </div>
    {error && firstName.length===0 ? <label >First Name can't be empty</label>:""}
    <br></br>
    <div>
    <TextField
    id="outlined-name"
    label="lastName"
    name='lastName'
    value={lastName}
    onChange={e => setLastName(e.target.value)}
    placeholder="lastname enter"
    
    />
      </div>
      {error && lastName.length===0 ? <label>Last Name can't be empty</label>:""}
      <br></br>
      
      <button type="submit">Submit</button>
      </form>
      
      </div>
  )
  }
export default LoginForm;

// <div>
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email address"
//         type="email"
//         name="email"
//         required
//       />
//       </div>
//     <br></br>
//       <input
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//         type="password"
//         name="password"
//         required
//       /><br></br>
// <input type="text" name="firstName"
//   value={firstName} 
//   onChange={e => setFirstName(e.target.value)}
//   placeholder="First name"
  
// />