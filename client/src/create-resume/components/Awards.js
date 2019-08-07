import React, { useContext, Fragment } from 'react';

import {  NavLink} from 'react-router-dom';
import {Box, TextField, Button, Fab,Radio, FormLabel, FormControlLabel, RadioGroup, FormControl} from '@material-ui/core';
import {ArrowForward, Add, ArrowBack, Clear} from '@material-ui/icons';



import { AwardsContext } from '../context/AwardsContext'
import { useStyles} from '../resume-form-theme/theme'


const Awards = () => {
    const classes = useStyles(); 

    const { awards, addAwards,  removeAwards,  handleChange } = useContext(AwardsContext)
    return ( 
        <Fragment>
            {awards.map(({title, issuer, expires, start, description}, i) =>{
                return(
                    <Box  key={i} className={classes.box}>
                        <TextField id="title" label="Title" type="text" name="title" autoComplete="title" margin="normal" fullWidth value={title} onChange ={ (e) => handleChange(e, i)}/>
                        <TextField id="issuer" label="Issuer" type="text" name="issuer" autoComplete="issuer" margin="normal" fullWidth value={issuer} onChange ={ (e) => handleChange(e, i)}/>
                        <TextField id="description" label="Description" type="text" name="description" autoComplete="description" margin="normal" fullWidth value={description} onChange ={ (e) => handleChange(e, i)}/>
                        <Box className={classes.duration}>
                        <FormControl component="fieldset"  variant="outlined">
                            <FormLabel component="legend">Require Renewal?</FormLabel>
                            <RadioGroup aria-label="expires" name="expires" 
                            value={expires}
                            
                            onChange ={ (e) => handleChange(e, i)} 
                            row>
                                <FormControlLabel
                                value="true"
                                control={<Radio color="primary" />}
                                label="Yes"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                value="false"
                                control={<Radio color="primary" />}
                                label="No"
                                labelPlacement="start"
                                />
                                
                            </RadioGroup>
                            </FormControl>


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

                            
                        </Box>     
                        
                        <Box  className={classes.justifyEnd} marginTop="10px">   
                            
                            <Fab onClick={() => removeAwards(i)}>
                            <Clear  />
                            </Fab>
                             
                        </Box> 
                      
                    </Box>
                )
            })
            }
            <Box display="flex" justifyContent="space-between" mt="20px" size="lg"   className={classes.action}>  

                <NavLink to="/create-resume/interest" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    <ArrowBack  />
                    &nbsp;&nbsp;&nbsp;
                    Back
                    </Button>
                </NavLink>

                <Button variant="contained"  color="secondary" className={classes.button} onClick={() => addAwards()} >
                Add Award &nbsp;&nbsp;&nbsp;
                    <Add  />
                </Button>

                <NavLink to="/create-resume/summary" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                    Save &amp; Next &nbsp;&nbsp;&nbsp;
                    <ArrowForward  />
                    </Button>
                </NavLink>
            </Box>
            
        </Fragment>
     );
}
 
export default Awards;
