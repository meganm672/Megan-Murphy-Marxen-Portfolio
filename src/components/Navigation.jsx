import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
function Navigation({
  setShowMenu,
  scrollTo,
  aboutSection,
  projectSection,
  skillSection,
  contactSection,
  homeSection,
}) {
  const [isOpen, setOpen] = useState(true);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={isOpen ? "headerContainerFadeIn" : "headerContainerFadeOut"}
    >
      <Button
        className="menuIcon"
        onClick={(e) => {
          e.preventDefault();
          setOpen(false);
          setTimeout(closeMenu, 230);
        }}
      >
        <CgCloseO className="close" />
      </Button>
      <Box className="navContainer" sx={{textAlign:"center", justifyContent: "center"}} >
      <List className="navContainer">
        <ListItem
          className="nav_link"
          onClick={() => {
            scrollTo(homeSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Home
        </ListItem>
        <ListItem
          className="nav_link"
          onClick={() => {
            scrollTo(aboutSection);
            setTimeout(closeMenu, 230);
          }}
        >
          About
        </ListItem>
        <ListItem
          to="/projects"
          className="nav_link"
          onClick={() => {
            scrollTo(projectSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Projects
        </ListItem>
        <ListItem
          className="nav_link"
          onClick={() => {
            scrollTo(skillSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Tool Kit
        </ListItem>
        <ListItem
          className="nav_link"
          onClick={() => {
            scrollTo(contactSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Connect
        </ListItem>
        <ListItem>

         <a
          className="nav_link"
          href="https://docs.google.com/document/d/166MxWhDlYPlfY8ndSUGDC59HziBWlVu4jIVUHzc3aT4/edit?usp=sharing"
          target="_blank"
          onClick={()=> closeMenu()}
        > 
        Resume
        </a>
        </ListItem>
      </List>
      </Box>
    </div>
  );
}

export default Navigation;