import React from 'react'
import '../App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';



const Signup  = () => {
  return (

<Grid align="center">
  <Paper style={{background:"#f4cfb7"}} elevation={20} sx={{paddingTop:2,paddingLeft:7,paddingRight:7,paddingBottom:5,width:300,marginTop:2,marginLeft:"auto",marginRight:"auto"}}>
    <Grid>
<PersonAddAltSharpIcon style={{fontSize:"40"}} />
    </Grid>
    <h2 style={{margin:10}}>Sign Up</h2>
    
<Typography variant='caption'>Please fill this form to create an account</Typography>
<form>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Name"/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Email"/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Phone Number"/>
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    style={{display:"initial"}} 
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Password"/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Confirm Password"/>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />
</FormGroup>
<Button style={{marginTop:20,marginBottom:10}} type='submit' variant='contained' color='primary'>Sign Up</Button>
</form>
  </Paper>
</Grid>
  )
}

export default Signup 

