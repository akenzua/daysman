import React, { useContext, Fragment } from 'react';
import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab} from '@material-ui/core';
import {ArrowForward, Add, ArrowBack, Clear} from '@material-ui/icons';


import {InterestContext } from '../context/InterestContext'
import { useStyles} from '../resume-form-theme/theme'

const Interest = () => {
    const classes = useStyles();

    const { interest, addInterest, handleChange, removeInterest} = useContext(InterestContext)
    return ( 
        <Fragment>
            {interest.map(({skill}, i) => {
              return (
                <Box key={i} className={classes.box}>
                    
                    <TextField id="skill" label="Interest" type="text" name="skill" autoComplete="skill" margin="normal" fullWidth value={skill} onChange ={ (e) => handleChange(e, i)}/>
                    <Box  className={classes.justifyEnd} marginTop="10px">   
                      <Fab onClick={() => removeInterest(i)}>
                          <Clear  />
                          </Fab>
                    </Box>
                </Box>
              )
            }
            )} 
            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

              <NavLink to="/create-resume/certification" className={classes.link}>
                  <Button variant="contained"  color="secondary" className={classes.button}>
                  <ArrowBack  />
                  &nbsp;&nbsp;&nbsp;
                  Back
                  </Button>
              </NavLink>

              <Button variant="contained"  color="secondary" className={classes.button} onClick={() => addInterest()} >
              Add Interest &nbsp;&nbsp;&nbsp;
                  <Add  />
              </Button>

              <NavLink to="/create-resume/awards" className={classes.link}>
                  <Button variant="contained"  color="secondary" className={classes.button}>
                  Save &amp; Next &nbsp;&nbsp;&nbsp;
                  <ArrowForward  />
                  </Button>
              </NavLink>
            </Box>
      </Fragment>
     );
}
 
export default Interest;
