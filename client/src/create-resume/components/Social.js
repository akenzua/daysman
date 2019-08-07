import React, { useContext, Fragment } from 'react';
import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab} from '@material-ui/core';
import {ArrowForward, Add, ArrowBack, Clear} from '@material-ui/icons';

import { SocialContext } from '../context/SocialContext'
import { useStyles} from '../resume-form-theme/theme'

const Social = () => {

    const classes = useStyles();

    const { socials, addSocial, handleChange, removeSocial} = useContext(SocialContext)
    return ( 
        <Fragment>
            {socials.map(({site, account}, i) => {
              return (
                <Box key={i} className={classes.box}>
                  <Box className={classes.justifySpace}>
                    <TextField id="site" label="Platform" type="text" name="site" autoComplete="platform" margin="normal" style = {{width: "35%"}} value={site} onChange ={ (e) => handleChange(e, i)}/>
                    <TextField id="account" label="Link" type="text" name="account" autoComplete="account" margin="normal" style = {{width: "60%"}} value={account} onChange ={ (e) => handleChange(e, i)}/>
                  </Box>  

                  <Box  className={classes.justifyEnd} marginTop="10px">   
                    <Fab onClick={() => removeSocial(i)}>
                         <Clear  />
                         </Fab>
                  </Box> 
                  
                </Box>
              )
            }
            )} 
            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

              <NavLink to="/create-resume/phone" className={classes.link}>
                  <Button variant="contained"  color="secondary" className={classes.button}>
                  <ArrowBack  />
                  &nbsp;&nbsp;&nbsp;
                  Back
                  </Button>
              </NavLink>

              <Button variant="contained"  color="secondary" className={classes.button} onClick={() => addSocial()} >
              Add Socials &nbsp;&nbsp;&nbsp;
                  <Add  />
              </Button>

              <NavLink to="/create-resume/education" className={classes.link}>
                  <Button variant="contained"  color="secondary" className={classes.button}>
                  Save &amp; Next &nbsp;&nbsp;&nbsp;
                  <ArrowForward  />
                  </Button>
              </NavLink>
            </Box>       
        </Fragment>
     );
}
 
export default Social;
