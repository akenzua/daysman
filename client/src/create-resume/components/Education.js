import React, { useContext, Fragment } from 'react';

import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab} from '@material-ui/core';

import {ArrowForward, Add, ArrowBack, Clear} from '@material-ui/icons';


import { EducationContext } from '../context/EducationContext'


import { useStyles} from '../resume-form-theme/theme'


const Education = () => {

    const classes = useStyles();
    
    const { education, addEducation,  removeEducation,  handleChange } = useContext(EducationContext)
    return ( 
        <Fragment>
            {education.map(({institution, faculty, course, qualification, start, end, level}, i) =>{
                return(
                    <Box  key={i} className={classes.box}>
                        
                           
                            <TextField id="institution" label="Institution" type="text" name="institution" autoComplete="institution" margin="normal" fullWidth value={institution} onChange ={ (e) => handleChange(e, i)}/>
                            <TextField id="faculty" label="Faculty" type="text" name="faculty" autoComplete="faculty" margin="normal" fullWidth value={faculty} onChange ={ (e) => handleChange(e, i)}/>
                            <TextField id="qualification" label="Qualification" type="text" name="qualification" autoComplete="qualification" margin="normal" fullWidth value={qualification} onChange ={ (e) => handleChange(e, i)}/>
                            <TextField id="course" label="Course" type="text" name="course" autoComplete="course" margin="normal" fullWidth value={course} onChange ={ (e) => handleChange(e, i)}/>
                            <TextField id="level" label="Level" type="text" name="level" autoComplete="level" margin="normal" fullWidth value={level} onChange ={ (e) => handleChange(e, i)}/>

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
                        
                                    
                        <Box  className={classes.justifyEnd} marginTop="10px">   
                            
                            <Fab onClick={() => removeEducation(i)}>
                                <Clear  />
                            </Fab>
                          
                        </Box> 
                  
                    
                    </Box>
                )
            })
            }

            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

                <NavLink to="/create-resume/socials" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    <ArrowBack  />
                    &nbsp;&nbsp;&nbsp;
                    Back
                    </Button>
                </NavLink>

                <Button variant="contained"  color="secondary" className={classes.button} onClick={() => addEducation()} >
                Add Education &nbsp;&nbsp;&nbsp;
                    <Add  />
                </Button>

                <NavLink to="/create-resume/certification" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    Save &amp; Next &nbsp;&nbsp;&nbsp;
                    <ArrowForward  />
                    </Button>
                </NavLink>
            </Box>
            
        </Fragment>
     );
}
 
export default Education;
