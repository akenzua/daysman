import React, { useContext, Fragment } from 'react';
import { FormGroup,Label, Button} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faTimesCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';


import { CertificationContext } from '../context/CertificationContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Certification = () => {

    const { certification, addCertification,  removeCertification,  handleChange } = useContext(CertificationContext)
    return ( 
        <Fragment>
            {certification.map(({title, issuer, expiry, expires, start, description}, i) =>{
                return(
                    <FormBox  key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeCertification(i)} />
                            
                        <FormGroup>
                            <FormInput  placeholder="Title" value={title} onChange ={ (e) => handleChange(e, i)} name='title' />
                        </FormGroup>

                        <FormGroup>
                            <FormInput  value={issuer} placeholder="Issuer" onChange ={ (e) => handleChange(e, i)} name='issuer' />
                        </FormGroup>

                      
                        <FormGroup>
                            <FormInput  value={expires} placeholder="Expires"  onChange ={ (e) => handleChange(e, i)}  name='expires' />
                        </FormGroup> 
                        <FormGroup>
                            <FormInput  value={description} placeholder="Description"  onChange ={ (e) => handleChange(e, i)}  name='description' />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="form-group-input-name">Start Date</Label>
                            <FormInput  value={start} placeholder="Start " type="date" onChange ={ (e) => handleChange(e, i)} name='start' />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="form-group-input-name">Expiry</Label>
                            <FormInput  value={expiry} placeholder="Expiry" type="date" onChange ={ (e) => handleChange(e, i)}  name='expiry' />
                        </FormGroup>
                                       
                        
                  
                    
                    </FormBox>
                )
            })
            }
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                    <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addCertification()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                    <NavLink to="/create-resume/socials"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                    <NavLink to="/create-resume/certification"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
                </FormGroup>
            </FormGroup>
            
        </Fragment>
     );
}
 
export default Certification;
