import React from 'react';
import WhiskerWorld from "../assets/WhiskerWorld.png";
import Juicebox from "../assets/Juicebox.png";
import BookBuddies from "../assets/BookBuddies.png";
import PuppyBowl from "../assets/PuppyBowl.png";
import { IoIosOpen } from "react-icons/io";
import { TbBrandGithub } from "react-icons/tb";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
const Projects = () => {
    return (
        <>
            <Typography variant='h3' sx={{textAlign:"center"}}>PROJECTS</Typography>
            <Box className="projectSection">
                <Grid container spacing={4} >
                    <Grid item  >
                        <Card sx={{ maxWidth: 350, minWidth: 350, maxHeight: 460, minHeight: 460, padding: 2 }}>
                            <CardMedia
                                sx={{ height: 180, objectFit: "contain" }}
                                image={WhiskerWorld}
                                title="Whisker World"
                                component="img"
                            />
                            <CardContent>
                                <Typography variant='h4'> Whisker World </Typography>
                                <Typography variant='body1'>
                                    A fullstack cat e-commerce application.
                                </Typography>
                                <br/>
                                <Typography variant='body2'>Javascript | React | MaterialUI | Node | HTML | CSS | React Router | Prisma | Jest | Express | Bcrypt | Jest | Postman</Typography>
                            </CardContent>
                            <CardActions>
                                <Link href="https://whisker-world.onrender.com/" target="_blank">
                                    <Button>View Site
                                        <IoIosOpen />
                                    </Button></Link>
                                <Link href="https://github.com/meganm672/Whisker-World" target="_blank">
                                    <Button>
                                        GitHub
                                        <TbBrandGithub />
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item  >
                        <Card sx={{ maxWidth: 350, minWidth: 350, maxHeight: 460, minHeight: 460, padding: 2 }}>
                            <CardMedia
                                sx={{ height: 180, objectFit: "contain" }}
                                image={Juicebox}
                                title="Juicebox"
                                component="img"
                            />
                            <CardContent>
                                <Typography variant='h4'> Improved Juicebox</Typography>
                                <Typography >
                                    Fully Operational CRUD API with Express.JS and Prisma to create a Tumblr-like website.
                                </Typography>
                                <br/>
                                <Typography variant='body2'>Javascript | Express | Node | Prisma | PostgreSQL | Bcrypt | Postman</Typography>
                            </CardContent>
                            <CardActions>
                                <Link href="https://github.com/meganm672/Juicebox-Revamped" target="_blank">
                                    <Button>
                                        GitHub
                                        <TbBrandGithub />
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item  >
                        <Card sx={{ maxWidth: 350, minWidth: 350, maxHeight: 460, minHeight: 460, padding: 2 }}>
                            <CardMedia
                                sx={{ height: 180, objectFit: "contain" }}
                                image={BookBuddies}
                                title="Book Buddies"
                                component="img"
                            />
                            <CardContent>
                                <Typography variant='h4'> Book Buddy</Typography>
                                <Typography variant='body1'>
                                    A front end application of an online public library with react.
                                </Typography>
                                <br/>
                                <Typography variant='body2'>React | CSS | HTML | Redux | React Router | Vite | Node | MaterialUI | JWT </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href="https://659cb430c94edb517627629c--stirring-concha-dedff6.netlify.app/" target="_blank">
                                    <Button>View Site
                                        <IoIosOpen />
                                    </Button></Link>
                                <Link href="https://github.com/meganm672/Book-Buddy" target="_blank">
                                    <Button>
                                        GitHub
                                        <TbBrandGithub />
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item  >
                        <Card sx={{ maxWidth: 350, minWidth: 350, maxHeight: 460, minHeight: 460, padding: 2 }}>
                            <CardMedia
                                sx={{ height: 180, objectFit: "contain" }}
                                image={PuppyBowl}
                                title="Puppy Bowl"
                                component="img"
                            />
                            <CardContent>
                                <Typography variant='h4'> Puppy Bowl</Typography>
                                <Typography variant='body1'>
                                    A front end application of puppy bowl players with React.
                                </Typography>
                                <br/>
                                <Typography variant='body2'>Javascript | HTML | CSS | React | React Router | Vite</Typography>
                            </CardContent>
                            <CardActions>
                                <Link href="https://651cb6a545250a58c77d5dbf--visionary-pudding-dbbe46.netlify.app/" target="_blank">
                                    <Button>View Site
                                        <IoIosOpen />
                                    </Button></Link>
                                <Link href="https://github.com/meganm672/Puppy-Bowl-React" target="_blank">
                                    <Button>
                                        GitHub
                                        <TbBrandGithub />
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Projects;