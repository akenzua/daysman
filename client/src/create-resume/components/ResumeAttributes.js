import React, { useContext, Fragment } from 'react';
import { FormGroup, Textarea} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';

import { AttributesContext } from '../context/AttributesContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const ResumeAttributes = () => {

    const { attributes, handleChange} = useContext(AttributesContext)
    return ( 
        <Fragment>
            {attributes.map(({title, summary}, i) => {
              return (
                <FormBox key={i}>
                  
                    <FormGroup>
                      <FormInput  placeholder="Title" value={title} onChange ={ (e) => handleChange(e, i)} name='title' />
                    </FormGroup>
                    <FormGroup>
                      <Textarea size="lg" placeholder="Summary" display="block" value={summary} width="100%" onChange ={ (e) => handleChange(e, i)} name="summary"/>
                    </FormGroup>
                </FormBox>
              )
            }
            )} 

            <FormGroup display="flex" justifyContent="flex-end" mt="20px" size="lg">   
            <NavLink to="/create-resume/experience"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink>
                
            </FormGroup>           
        </Fragment>
     );
}
 
export default ResumeAttributes;
