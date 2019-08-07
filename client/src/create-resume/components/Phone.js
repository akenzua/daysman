import React, { useContext, Fragment } from 'react';


import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab} from '@material-ui/core';
import {ArrowForward, Add, ArrowBack, Clear} from '@material-ui/icons';

import { PhoneContext } from '../context/PhoneContext'

import { useStyles} from '../resume-form-theme/theme'

const Phone = () => {

    const classes = useStyles();

    const { phone, addPhone, handleChange, removePhone} = useContext(PhoneContext)
    return ( 
        <Fragment>
            {phone.map(({number}, i) => {
              return (
                <Box key={i} className={classes.box}>
                  <TextField id="phone" label="Phone" type="phone" name="number" autoComplete="phone" margin="normal" fullWidth value={number} onChange ={ (e) => handleChange(e, i)}/>
                    {/* <FontAwesomeIcon icon={faTimesCircle} onClick={() => removePhone(i)} /> */}
                    <Box  className={classes.justifyEnd} marginTop="10px">   
                            
                         <Fab onClick={() => removePhone(i)}>
                         <Clear  />
                         </Fab>
                          
                        </Box> 
                </Box>
              )
            }
            )} 
            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

<NavLink to="/create-resume/address" className={classes.link}>
    <Button variant="contained"  color="secondary" className={classes.button}>
    <ArrowBack  />
    &nbsp;&nbsp;&nbsp;
    Back
    </Button>
</NavLink>

<Button variant="contained"  color="secondary" className={classes.button} onClick={() => addPhone()} >
Add Phone &nbsp;&nbsp;&nbsp;
    <Add  />
</Button>

<NavLink to="/create-resume/socials" className={classes.link}>
    <Button variant="contained"  color="secondary" className={classes.button}>
    Save &amp; Next &nbsp;&nbsp;&nbsp;
    <ArrowForward  />
    </Button>
</NavLink>
</Box>       
        </Fragment>
     );
}
 
export default Phone;
