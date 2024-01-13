import React from 'react';
import { PiCatDuotone } from "react-icons/pi";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Footer = () => {
    return (
        
            <Box className="footerContainer">
                <div className='icon1'><PiCatDuotone /> </div>
                <Typography>DEVELOPED & DESIGNED BY: MEGAN MURPHY-MARXEN ©2024</Typography>
            </Box>
        
    );
};

export default Footer;