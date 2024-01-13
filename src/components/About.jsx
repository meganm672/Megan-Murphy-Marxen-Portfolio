import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MeganMurphyMarxen from "../assets/MeganMurphyMarxen.jpg"
const About = () => {
    return (
        <>
        <Typography variant='h1' className="hello">
          HELLO! <Typography variant='h2'>I'm Megan.</Typography>
        </Typography>
  
        <Box className="aboutContainer">
          <Box className="selfContainer" >
        <img className="image" src={MeganMurphyMarxen} />
          </Box>
          <Box className="aboutParagraphs">
            <Typography variant='h2' className="sectionTitle">About Me </Typography>
            <Box>
              <Typography variant='body1'>
                I am a passionate fullstack developer that is excited about creating
                meaningful connections between people and their ideas. I have a
                Bachelor Degree in Theater Lighting Design and a certificate in
                Fullstack Web Development from Grace Hopper at Fullstack Acedemy.
              </Typography>

              <Typography variant='body1'>
              My strengths include adaptability , desire to learn and time management. 
              In my previous career I was called a logistical maven, someone who was 
              able to look at the bigger picture and execute the task at hand.
              </Typography>
  
              <Typography variant='body1'>
                When I'm not coding I can be found spending time with my family, 
                cuddiling my cats, or going on adventures at parks.
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
};

export default About;