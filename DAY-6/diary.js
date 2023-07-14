


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//   ),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <div className='table'>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
      
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             <FormGroup>
//             <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      
//     </FormGroup>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }
import React from 'react'
import Navbar from './Navbar';
import './navbar.css';
import  Button  from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
 import FormControlLabel from '@mui/material/FormControlLabel';
export default function Fruits() {
  
  return (
    <div>
    <Navbar/>
    
    <div className='land'>
   
    <div className='storagebox'>
    
<table>
<tr>

  <th><h2>Dimension</h2></th>
  <span></span><span></span>
  <th><h2>Duration</h2></th>
  <span></span>
  <th><h2>Cost</h2></th>
  <span></span><span></span>
  <div className='sel' style={{paddingLeft:"10px"}}>
  <th><h2>Select</h2></th></div>
  <span></span>
 
</tr>
<tr>
  <td>kitchen(42 inches )</td>
  <span></span>
  <td>14 days</td>
  <span></span>
  <td>$300</td>
  <span></span>
  <div className='sel1' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>Bathroom</td>
  <span></span>
  <td>12 days</td>
  <span></span>
  <td>$100</td>
  <span></span>
  <div className='sel2' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>LivingArea</td>
  <span></span>
  <td>16 days</td>
  <span></span>
  <td>$300</td>
  <span></span>
  <div className='sel3' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>Bedroom</td>
  <span></span>
  <td>27 days</td>
  <span></span>
  <td>$290</td>
  <span></span>
  <div className='sel4' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>

</table>
<Link to='/dimension'>
    <div className='recipe'>
    <Button varient="contained">Find Dimension</Button>
    </div>
    </Link></div>
    </div></div>
  )
}
