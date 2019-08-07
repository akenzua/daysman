import React, { useContext, Fragment } from 'react';


import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button} from '@material-ui/core';
import {ArrowForward, ArrowBack} from '@material-ui/icons';

import { AddressContext } from '../context/AddressContext'

import { useStyles} from '../resume-form-theme/theme'

const Address = () => {

    const classes = useStyles();

    const { address, handleChange} = useContext(AddressContext)
    return ( 
        <Fragment>
            {address.map(({house, street, town, city, country}, i) => {
              return (
                <Box key={i} className={classes.box}>
                  <Box className={classes.justifySpace}>
                  <TextField style = {{width: "30%"}} id="house" label="House/Block/Flat" type="text" name="house" autoComplete="house" margin="normal"  value={house} onChange ={ (e) => handleChange(e, i)}/>
                  <TextField style = {{width: "65%"}} id="street" label="Street" type="text" name="street" autoComplete="street" margin="normal"  value={street} onChange ={ (e) => handleChange(e, i)}/>
                  
                  </Box>
                  <Box className={classes.justifySpace}>
                  <TextField style = {{width: "48%"}} id="town" label="Town" type="text" name="town" autoComplete="town" margin="normal"  value={town} onChange ={ (e) => handleChange(e, i)}/>
                  <TextField style = {{width: "48%"}} id="city" label="City" type="text" name="city" autoComplete="city" margin="normal"  value={city} onChange ={ (e) => handleChange(e, i)}/>
                  
                  </Box>
                  <TextField  fullWidth id="country" label="Country" type="text" name="country" autoComplete="country" margin="normal"  value={country} onChange ={ (e) => handleChange(e, i)}/>
                    
                    
                </Box>
              )
            }
            )} 

<Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

<NavLink to="/create-resume/experience" className={classes.link}>
    <Button variant="contained"  color="secondary" className={classes.button}>
    <ArrowBack  />
    &nbsp;&nbsp;&nbsp;
    Back
    </Button>
</NavLink>



<NavLink to="/create-resume/phone" className={classes.link}>
    <Button variant="contained"  color="secondary" className={classes.button}>
    Save &amp; Next &nbsp;&nbsp;&nbsp;
    <ArrowForward  />
    </Button>
</NavLink>
</Box>           
        </Fragment>
     );
}
 
export default Address;
