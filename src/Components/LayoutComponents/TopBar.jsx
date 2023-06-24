import React from 'react';
import { Button, Grid } from '@mui/material';


const TopBar = () => {
    return (
        <Grid container spacing={4}>
        <Grid item>
          <Button variant="contained" color="primary">Home</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">About</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Services</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Contact</Button>
        </Grid>
        </Grid>
    );
};

export default TopBar;