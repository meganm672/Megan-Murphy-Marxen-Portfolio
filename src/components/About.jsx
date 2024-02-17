import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MeganMurphyMarxen from "../assets/MeganMurphyMarxen.jpg"
import Stack from '@mui/material/Stack'
const About = () => {
  return (
    <>
      <Typography variant='h1' className="hello" sx={{ textAlign: "center" }}>
        HELLO!
      </Typography>
      <Typography variant='h2' sx={{ textAlign: "center" }}>I'm Megan.</Typography>
      <Box className="aboutContainer" >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box className="selfContainer" sx={{ textAlign: "center" }}>
            <img className="image" src={MeganMurphyMarxen} />
          </Box>

          <Box className="aboutParagraphs">
            <Typography variant='h2' className="sectionTitle" sx={{ textAlign: "center" }}>About Me </Typography>
            <Box>
              <Typography variant='body1'>
                I am a passionate fullstack developer that is excited about creating
                meaningful connections between people and their ideas. I have a
                Bachelor Degree in Theater Lighting Design and a certificate in
                Fullstack Web Development from Grace Hopper at Fullstack Acedemy.
              </Typography>

              <Typography variant='body1'>
                My strengths include adaptability, desire to learn and time management.
                In my previous career I was called a logistical maven, someone who was
                able to look at the bigger picture and execute the task at hand.
              </Typography>

              <Typography variant='body1'>
                When I'm not coding I can be found spending time with my family,
                cuddiling my cats, or going on adventures at parks.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default About;