import React, { useContext, Fragment } from 'react';


import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab, FormLabel} from '@material-ui/core';

import {ArrowForward, Add, ArrowBack, Clear, DeleteOutline} from '@material-ui/icons';


import { ExperienceContext } from '../context/ExperienceContext'

import { useStyles} from '../resume-form-theme/theme'

const Experience = () => {

    const classes = useStyles();

    const { experience, addExperience, addJob, removeExperience, removeJob, handleChange } = useContext(ExperienceContext)
    return ( 
        <Fragment>
            {experience.map(({position, organisation, start, end, job}, i) =>{
                return(
                    <Box  key={i}  className={classes.box}>
                        

                        <TextField id="position" label="Position" type="position" name="position" autoComplete="position" margin="normal" fullWidth value={position} onChange ={ (e) => handleChange(e, i)}/>

                        <TextField id="organisation" label="Organization" type="organisation" name="organisation" autoComplete="organisation" margin="normal" fullWidth value={organisation} onChange ={ (e) => handleChange(e, i)}/>
                           
                       <Box  className={classes.duration}>
                       <TextField
                            id="start"
                            label="Start Date"
                            type="date"
                            className={classes.textField}
                            value={start}
                            onChange ={ (e) => handleChange(e, i)}
                            name="start"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            id="end"
                            label="End Date"
                            type="date"
                            className={classes.textField}
                            value={end}
                            onChange ={ (e) => handleChange(e, i)}
                            name="end"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                       </Box>
                       

                        <Box mt="25px"   className={classes.justifySpace}>
                            <FormLabel>Job Description</FormLabel>
                            <Button type="button"  onClick={() => addJob(i)}> <Add /></Button>
                        </Box>
                    
                        {job.map(({description}, k) => {
                            return(
                                <Box size="sm" key={k} display="flex" justifyContent="space-between">
                                    <TextField id="description" label="" type="description" name="description" autoComplete="description" margin="normal" fullWidth value={description} onChange ={ (e) => handleChange(e, i, k)}/>
                                    
                                    <Button  type="button" margin="0 20px"  ><DeleteOutline   onClick={() => removeJob(i, k)}/></Button>
                                </Box> 
                        )})}
                         
                         <Box  className={classes.justifyEnd} marginTop="10px">   
                            
                         <Fab onClick={() => removeExperience(i)}>
                         <Clear  />
                         </Fab>
                          
                        </Box> 
                    
                    </Box>
                )
            })
            }
            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

                <NavLink to="/create-resume/attributes" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    <ArrowBack  />
                    &nbsp;&nbsp;&nbsp;
                    Back
                    </Button>
                </NavLink>

                <Button variant="contained"  color="secondary" className={classes.button} onClick={() => addExperience()} >
                Add Experience &nbsp;&nbsp;&nbsp;
                    <Add  />
                </Button>

                <NavLink to="/create-resume/address" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    Save &amp; Next &nbsp;&nbsp;&nbsp;
                    <ArrowForward  />
                    </Button>
                </NavLink>
            </Box>
            
        </Fragment>
     );
}
 
export default Experience;
