import React, { useContext, Fragment } from 'react';
import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button} from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';

import { AttributesContext } from '../context/AttributesContext'
import { useStyles} from '../resume-form-theme/theme'

const ResumeAttributes = () => {

    const classes = useStyles();

    const { attributes, handleChange} = useContext(AttributesContext)
    return ( 
        <Fragment>
            {attributes.map(({title, summary}, i) => {
              return (
                <Box key={i} className={classes.box}>

                    <TextField id="title" label="Title" type="text" name="title" autoComplete="title" margin="normal" fullWidth value={title} onChange ={ (e) => handleChange(e, i)}/>

                    <TextField
                      id="summary"
                      label="Summary"
                      multiline
                      fullWidth
                      rows="5"
                      value={summary}
                      onChange ={ (e) => handleChange(e, i)}
                      className={classes.textField}
                      margin="normal"
                      name = "summary"
                      autoComplete="summary"
                    />

                   
                    
                </Box>
              )
            }
            )} 
            <Box className={classes.justifyEnd} mt="40px" mr="70px" size="lg">   
                      <NavLink to="/create-resume/experience" className={classes.link}>
                        <Button variant="contained"  color="secondary" className={classes.button}>
                          Save &amp; Next &nbsp;&nbsp;&nbsp;
                          <ArrowForward  />
                        </Button>
                      </NavLink>
                    </Box> 
                       
        </Fragment>
     );
}
 
export default ResumeAttributes;
