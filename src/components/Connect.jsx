import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
const Connect = () => {
    return (
        <Box sx={{textAlign:"center"}}>
            <Typography variant='h3' sx={{textAlign:"center"}}>CONNECT</Typography>
            <Box className="connectContainer" sx={{textAlign:"center", justifyContent: "center"}}>
                <List className="connectList">
                    <ListItemText>Find me here:</ListItemText>
                    <ListItemButton>
                        <Link href="mailto:meganm672@gmail.com">
                            <HiOutlineMail /> Email
                        </Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link href="https://github.com/meganm672" target="_blank">
                            <TbBrandGithub /> GitHub
                        </Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link
                            href="https://www.linkedin.com/in/meganmurphymarxen/"
                            target="_blank"
                        >
                            <RiLinkedinBoxLine /> LinkedIn
                        </Link>
                    </ListItemButton>
                </List>
            </Box>
        </Box>

    );
};

export default Connect;