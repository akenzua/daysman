import React, { useContext, Fragment } from 'react';
import { FormGroup,Label, Button} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';


import { ExperienceContext } from '../context/ExperienceContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Experience = () => {

    const { experience, addExperience, addJob, removeExperience, removeJob, handleChange } = useContext(ExperienceContext)
    return ( 
        <Fragment>
            {experience.map(({position, organisation, start, end, job}, i) =>{
                return(
                    <FormBox  key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeExperience(i)} />
                            
                        <FormGroup>
                            <FormInput  placeholder="Position" value={position} onChange ={ (e) => handleChange(e, i)} name='position' />
                        </FormGroup>

                        <FormGroup>
                            <FormInput  value={organisation} placeholder="Organization" onChange ={ (e) => handleChange(e, i)} name='organisation' />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="form-group-input-name">Start Date</Label>
                            <FormInput  value={start} placeholder="Start Date" type="date" onChange ={ (e) => handleChange(e, i)} name='start' />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="form-group-input-name">End Date</Label>
                            <FormInput  value={end} placeholder="End Date" type="date" onChange ={ (e) => handleChange(e, i)}  name='end' />
                        </FormGroup>

                        <FormGroup mt="25px" display="flex" justifyContent="space-between">
                            <Label>Job Description</Label>
                            <Button type="button"  variant="success" onClick={() => addJob(i)}> <FontAwesomeIcon icon={faPlus} /></Button>
                        </FormGroup>
                    
                        {job.map(({description}, k) => {
                            return(
                                <FormGroup size="sm" key={k} display="flex" justifyContent="space-between">
                                    <FormInput  onChange ={ (e) => handleChange(e, i, k)}  value={description} name="description" width="90%" />
                                    <Button  type="button" margin="0 20px" onClick={() => removeJob(i, k)} ><FontAwesomeIcon icon={faTrashAlt} /></Button>
                            </FormGroup> 
                        )})}
                  
                    
                    </FormBox>
                )
            })
            }
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                    <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addExperience()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                    <NavLink to="/create-resume/attributes"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                    <NavLink to="/create-resume/address"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
                </FormGroup>
            </FormGroup>
            
        </Fragment>
     );
}
 
export default Experience;
