import React, { useContext, Fragment } from 'react';
import { FormGroup,Label, Button} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';


import { EducationContext } from '../context/EducationContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Education = () => {

    const { education, addEducation,  removeEducation,  handleChange } = useContext(EducationContext)
    return ( 
        <Fragment>
            {education.map(({institution, faculty, course, qualification, start, end, level}, i) =>{
                return(
                    <FormBox  key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeEducation(i)} />
                            
                        <FormGroup>
                            <FormInput  placeholder="Institution" value={institution} onChange ={ (e) => handleChange(e, i)} name='institution' />
                        </FormGroup>

                        <FormGroup>
                            <FormInput  value={faculty} placeholder="Faculty" onChange ={ (e) => handleChange(e, i)} name='faculty' />
                        </FormGroup>

                        <FormGroup>
                            <FormInput  value={course} placeholder="Course"  onChange ={ (e) => handleChange(e, i)} name='course' />
                        </FormGroup>

                        <FormGroup>
                            <FormInput  value={qualification} placeholder="Qualification"  onChange ={ (e) => handleChange(e, i)}  name='qualification' />
                        </FormGroup>
                        <FormGroup>
                            <FormInput  value={level} placeholder="Level"  onChange ={ (e) => handleChange(e, i)}  name='level' />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label htmlFor="form-group-input-name">Start Date</Label>
                            <FormInput  value={start} placeholder="Start Date" type="date" onChange ={ (e) => handleChange(e, i)} name='start' />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="form-group-input-name">End Date</Label>
                            <FormInput  value={end} placeholder="End Date" type="date" onChange ={ (e) => handleChange(e, i)}  name='end' />
                        </FormGroup> */}
                                       
                        
                  
                    
                    </FormBox>
                )
            })
            }
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                    <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addEducation()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                    <NavLink to="/create-resume/socials"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                    <NavLink to="/create-resume/certification"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
                </FormGroup>
            </FormGroup>
            
        </Fragment>
     );
}
 
export default Education;
