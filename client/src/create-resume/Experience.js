import React, { useContext, Fragment } from 'react';
import { FormGroup, Input, Label, Button, Box } from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { ExperienceContext } from './context/ExperienceContext'

const Experience = () => {

    const { experience, addExperience, addJob, removeExperience, removeJob, handleChange } = useContext(ExperienceContext)
    return ( 
        <Fragment>
            {experience.map(({position, organisation, start, end, job}, i) =>{
                return(
                    <Box  key={i}  boxShadow = "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)"
                    p="35px 25px"
                    borderRadius="5px"
                    mt="20px"
                    dispaly="flex">
                        <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeExperience(i)} />
                            <FormGroup>
                           
                            <Input  placeholder="Position"
                    size="sm"
                    display="block"
                    mt="10px"
                    type="text"
                    width="100%"
                    value={position}
                    onChange ={ (e) => handleChange(e, i)}
                    name='position' />
                           </FormGroup>
                           <FormGroup>
                           
                            <Input  value={organisation} placeholder="Organization"
                    size="sm"
                    display="block"
                    mt="10px"
                    type="text"
                    width="100%"
                    onChange ={ (e) => handleChange(e, i)}
                 
                    name='organisation' />
                           </FormGroup>
                           <FormGroup>
                           <Label htmlFor="form-group-input-name">Start Date</Label>
                            <Input  value={start} placeholder="Start Date"
                    size="sm"
                    display="block"
                    mt="10px"
                    type="date"
                    width="100%"
                    onChange ={ (e) => handleChange(e, i)}
                    name='start' />
                           </FormGroup>
                           <FormGroup>
                           <Label htmlFor="form-group-input-name">End Date</Label>
                            <Input  value={end} placeholder="End Date"
                    size="sm"
                    display="block"
                    mt="10px"
                    type="date"
                    width="100%"
                    onChange ={ (e) => handleChange(e, i)}
                    
                    name='end' />
                           </FormGroup>
                           <FormGroup mt="25px" display="flex"
                                justifyContent="space-between">
                        <Label>Job Description</Label>
                        <Button type="button"  variant="success"  
                            onClick={() => addJob(i)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                </FormGroup>
                    
                    {job.map(({description}, k) => {
                        
                        return(
                            
                            <FormGroup key={k} display="flex"
                            justifyContent="space-between">
                           
                            <Input  onChange ={ (e) => handleChange(e, i, k)}  value={description} name="description"
                                   
                                    width="90%" />
                            <Button type="button" onClick={() => removeJob(i, k)} ><FontAwesomeIcon icon={faTrashAlt} /></Button>
                            </FormGroup>
                            
                        )
                    })}
                  
                    
                    </Box>
                )
            })
            }
            <FormGroup
                display="flex"
                justifyContent="space-between"
                mt="20px"
                >   
                <Button  variant="success" display="block" width="60%" type="button"  >Save</Button>
                <Button type="button" variant="info" width="30%" onClick={() => addExperience()}>Add Experience</Button>
                </FormGroup>
            
        </Fragment>
     );
}
 
export default Experience;
