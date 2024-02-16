import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SkillList from './SkillList';

const ToolKit = () => {
    return (
        <div className='scrollTool'>
            <Box className="logos">
                <Typography variant='h3' sx={{ textAlign: "center", marginBottom: "1em" }}>TOOL KIT</Typography>
                <Box className="skillsContainer"  >
                    <SkillList />
                </Box>
                <Box className="skillsContainer"  >
                    <SkillList />
                </Box>
            </Box>
        </div>
    );
};

export default ToolKit;