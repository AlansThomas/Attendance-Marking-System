import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Navitems } from './Navitems';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
// import Swal from 'sweetalert2'



const drawerWidth = 190;

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate()



    const getPageName = () => {
        const currentPath = location.pathname;
        const page = Navitems.find(item => currentPath.includes(item.link))?.name || 'Unknown';
        return page;
    };


    const logoStyle = {
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "White",
        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        cursor: 'pointer'
    };


    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: '#3A0B61' }}  >
                <Typography variant="h6" noWrap component="div" style={logoStyle} onClick={() => navigate("/Dashboard/attendence")} >
                    Logoipsum
                </Typography>
            </Toolbar>
            <List>
                {Navitems.map(item => {
                    return <NavLink
                        key={item.id}
                        to={item.link}
                        style={{ textDecoration: 'none' }}
                        isActive={(match) => {
                            return !!(match); // Set to false otherwise
                        }}
                    >
                        {({ isActive }) => (
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: isActive ? 'tomato' : '#3A0B61',
                                        color: 'white',
                                    }}
                                >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {item.text}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )}
                    </NavLink>
                })}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div style={{display:"flex",justifyContent:'space-between',width:'-webkit-fill-available'}}>
                        <Typography variant="h6" sx={{paddingLeft:'6vw'}}>
                            {getPageName()}
                        </Typography>
                        <div style={{ display: 'flex', }}>
                            <div style={{ background: 'gray', display: 'flex', alignItems: 'center', padding: '5px', borderRadius: '1px' }}>
                                <SearchIcon />
                                <input
                                    style={{
                                        backgroundColor: 'gray',
                                        border: 'none',
                                        outline: 'none',
                                        color: 'white',
                                    }}
                                />
                            </div>

                            <IconButton title="notifications" sx={{
                                color: 'white',
                                '&:hover': {
                                    color: 'tomato',
                                },
                            }}

                            >
                                <NotificationsOutlinedIcon />
                            </IconButton>

                            <IconButton title="logout" sx={{
                                color: 'white',
                                '&:hover': {
                                    color: 'tomato',
                                },
                            }}

                            >

                                <SettingsOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                aria-label="mailbox folders"
            >
                <Drawer   // app drawer for mobile ui
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer   // app drawer for web ui
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func
}
