import './App.css';
import ResponsiveAppBar from './Header';
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded';
import CircleRounded from '@mui/icons-material/CircleRounded';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Button from '@mui/material/Button';
import AlternateTimeline from './timeline'

function TechLine(){
  return (
    <React.Fragment>

    <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={7}
    >
       <Grid item> <CircleOutlinedIcon style={{color: 'white'}} fontSize="large"/>
      </Grid>


      <Grid item>
        <div class="line"></div>
      </Grid>


      <Grid item>
        <AddCircleOutlineRounded style={{color: 'white'}} fontSize="large"/>
      </Grid>
      
    </Grid>
    
  </Box>    






    </React.Fragment>

  )
}

function TechBox(props){
  return (
    <div class="techBox">{props.name}</div>
  )
}



function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar/>
      <AlternateTimeline/>
      </React.Fragment>

    





   
    
  );
}

export default App;
