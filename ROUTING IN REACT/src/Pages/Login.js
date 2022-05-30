import React from 'react'
import '../App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Button, TextField } from '@mui/material';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';

const Login = () => {
  return (
    <Grid align="center">
  <Paper style={{background:"#f4cfb7"}} elevation={20} sx={{paddingTop:10,paddingLeft:5,paddingRight:5,paddingBottom:5,width:300,marginTop:20,marginLeft:"auto",marginRight:"auto"}}>
    <Grid>
     <PersonTwoToneIcon style={{fontSize:"40"}}/>
    </Grid>
    <h2 style={{margin:10}}>Login</h2>
<form>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Email"/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Password"/>
<Button style={{marginTop:20,marginBottom:10}} type='submit' variant='contained' color='primary'>Login</Button>
</form>
  </Paper>
</Grid>
  )
}

export default Login
