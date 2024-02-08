import React from 'react';
import { SiJavascript, SiReactrouter, SiPostgresql, SiPrisma, SiMui, SiPostman } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub, FaNode } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import  Stack from '@mui/material/Stack';
const ToolKit = () => {
    return (
        <div className='scrollTool'>
        <Box className="logos">
            <Typography variant='h3' sx={{textAlign:"center"}}>TOOL KIT</Typography>
            <Box className="skillsContainer"  >
                    <List component={Stack} direction="row" spacing={4}  sx={{padding:1}}>
                            <ListItem>
                                <ListItemText >
                                    <SiJavascript className="icon" />
                                    <ListItemText>Javascript</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >
                                    <FaNode className="icon" />
                                    <ListItemText>Node.js</ListItemText>
                                    <Typography>Express.js</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <GrReactjs className="icon" />
                                    <ListItemText>React</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TbBrandRedux className="icon" />
                                    <ListItemText>
                                        Redux
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiReactrouter className="icon" />
                                    <ListItemText>
                                        React Router
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TiHtml5 className="icon" />
                                    <ListItemText>HTML 5</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TiCss3 className="icon" />
                                    <ListItemText>CSS 3</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiMui className="icon" />
                                    <ListItemText>Material UI</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <BiLogoGit className="icon" />
                                    <ListItemText>Git</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <FaGithub className="icon" />
                                    <ListItemText>GitHub</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPrisma className="icon" />
                                    <ListItemText>Prisma</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPostgresql className="icon" />
                                    <ListItemText>PostgreSQL</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPostman className="icon" />
                                    <ListItemText>Postman</ListItemText>
                                </ListItemText>
                            </ListItem>
                    </List>
            </Box>
            <Box className="skillsContainer"  >
                    <List component={Stack} direction="row" spacing={4}  >
                            <ListItem>
                                <ListItemText >
                                    <SiJavascript className="icon" />
                                    <ListItemText>Javascript</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >
                                    <FaNode className="icon" />
                                    <ListItemText>Node.js</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <GrReactjs className="icon" />
                                    <ListItemText>React</ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TbBrandRedux className="icon" />
                                    <ListItemText>
                                        Redux
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiReactrouter className="icon" />
                                    <ListItemText>
                                        React Router
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TiHtml5 className="icon" />
                                    <ListItemText>
                                        HTML 5
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <TiCss3 className="icon" />
                                    <ListItemText>
                                        CSS 3
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiMui className="icon" />
                                    <ListItemText>
                                        Material UI
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <BiLogoGit className="icon" />
                                    <ListItemText>
                                        Git
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <FaGithub className="icon" />
                                    <ListItemText>
                                        GitHub
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPrisma className="icon" />
                                    <ListItemText>
                                        Prisma
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPostgresql className="icon" />
                                    <ListItemText>
                                        PostgreSQL
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    <SiPostman className="icon" />
                                    <ListItemText>
                                        Postman
                                    </ListItemText>
                                </ListItemText>
                            </ListItem>
                    </List>
            </Box>
        </Box>
        </div>
    );
};

export default ToolKit;