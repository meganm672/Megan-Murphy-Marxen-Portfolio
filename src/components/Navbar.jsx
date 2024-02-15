import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

const navigate = useNavigate

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} > <Link to='/'><HomeIcon />Home</Link></MenuItem>
              <MenuItem onClick={handleClose} ><Link to='/about' > About Me</Link></MenuItem>
              <MenuItem onClick={handleClose} ><Link to='/project'>Projects</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/toolkit'>Tools</Link></MenuItem>
              <MenuItem onClick={handleClose} ><Link to='/resume'>Resume</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/connect'>Connect</Link></MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;