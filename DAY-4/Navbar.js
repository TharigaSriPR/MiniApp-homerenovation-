import React, { useState } from "react";
import {AppBar, Toolbar, Typography,Tabs,Tab,Box} from '@mui/material/';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import { Link } from 'react-router-dom';

   const Header =()=> {
        const [Count, setCount] = useState();
        return (
            <body>
                <div>
                    <Box className="nav">
                        <React.Fragment>
                            <AppBar sx={{ background: '#000000' }}>
                                <Toolbar>
                                    <Typography sx={{ paddingleft: '10%' }}>
                                        <KitchenOutlinedIcon fontsize="large"></KitchenOutlinedIcon>
                                    </Typography>
                                    <Tabs sx={{ margin: 'auto'}} indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'>
                                       <Link className="link" to='/land'> 
                                    <Tab textColor="white" label="HOME" />
                                    </Link>
                                    <Link className="link" to='/recipe'>
                                        <Tab  label="VISUALISATION" />
                                        </Link>
                                        <Link className="link" to='/Chat'>
                                        <Tab label="CHATS" />
                                        </Link>
                                        <Link className="link" to='/Permit'>
                                        <Tab label="PERMITS" />
                                        </Link>
                                        <Link className="link" to='/Login'>
                                        <Tab label="LOGOUT" />
                                        </Link>
                                       
                                    </Tabs>
                                    <Link className="link">
                                    <NotificationsNoneIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='white'></NotificationsNoneIcon>
                                    </Link>
                                    <Link className="link">
                                    <PersonOutlineIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'></PersonOutlineIcon>
                                    </Link>
                                    </Toolbar>
                            </AppBar>
                        </React.Fragment>
                    </Box>
                </div>
            </body>
        );
    }
export default Header;