import React from 'react';
import { SiJavascript, SiReactrouter, SiPostgresql, SiPrisma, SiMui, SiPostman } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub, FaNode } from "react-icons/fa";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

const SkillList = () => {
    return (
        <>
            <List component={Stack} direction="row" spacing={4} sx={{ padding: 1, justifyContent: "center", textAlign: "center" }} >
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <SiJavascript className="icon" />
                            Javascript
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography >
                        <Stack>
                            <FaNode className="icon" />
                            Node.js
                            <Stack>
                                Express.js
                            </Stack>
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <GrReactjs className="icon" />
                            React
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <TbBrandRedux className="icon" />
                            Redux
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <SiReactrouter className="icon" />
                            React Router
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <TiHtml5 className="icon" />
                            HTML 5
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <TiCss3 className="icon" />
                            CSS 3
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <SiMui className="icon" />
                            Material UI
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <BiLogoGit className="icon" />
                            Git
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <FaGithub className="icon" />
                            GitHub
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>

                            <SiPrisma className="icon" />
                            Prisma
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>

                            <SiPostgresql className="icon" />
                            PostgreSQL
                        </Stack>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText className='listItem' disableTypography>
                        <Stack>
                            <SiPostman className="icon" />
                            Postman
                        </Stack>
                    </ListItemText>
                </ListItem>
            </List>
        </>
    );
};

export default SkillList;