import React, { useContext, Fragment } from 'react';
import { FormGroup} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';

import {InterestContext } from '../context/InterestContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Interest = () => {

    const { interest, addInterest, handleChange, removeInterest} = useContext(InterestContext)
    return ( 
        <Fragment>
            {interest.map(({skill}, i) => {
              return (
                <FormBox key={i}>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeInterest(i)} />
                    <FormGroup>
                      <FormInput  placeholder="Interest" value={skill} onChange ={ (e) => handleChange(e, i)} name='skill' />
                    </FormGroup>
                    
                </FormBox>
              )
            }
            )} 
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                        <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addInterest()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                        <NavLink to="/create-resume/certification"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                        
                </FormGroup>   
            </FormGroup>       
        </Fragment>
     );
}
 
export default Interest;
