/*

Move faster with intuitive React UI tools

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library, 
or bring your own design system to our production-ready components.

Ready to use components free forever

https://mui.com/material-ui/

 npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

*/

import React, { useState } from 'react'
import Button from '@mui/material/Button';


import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';


import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Mui() {

    const [value, setValue] = useState(0);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));

    return (
        <div className='container mt-5'>

            <Button variant="text">Text</Button>
            <Button variant="contained" color="success">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <Button variant="contained" size="small">
                Small
            </Button>
            <Button variant="contained" size="medium">
                Medium
            </Button>
            <Button variant="contained" size="large">
                Large
            </Button>

            <hr />
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>

            <hr />

            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>

            <hr />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid  xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid  xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid  xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid  xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Mui