import React, { useContext, Fragment } from 'react';
import { FormGroup} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';

import { PhoneContext } from '../context/PhoneContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Phone = () => {

    const { phone, addPhone, handleChange, removePhone} = useContext(PhoneContext)
    return ( 
        <Fragment>
            {phone.map(({number}, i) => {
              return (
                <FormBox key={i}>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => removePhone(i)} />
                    <FormGroup>
                      <FormInput  placeholder="Phone Number" value={number} onChange ={ (e) => handleChange(e, i)} name='number' />
                    </FormGroup>
                    
                </FormBox>
              )
            }
            )} 
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                        <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addPhone()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                        <NavLink to="/create-resume/address"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                        <NavLink to="/create-resume/social"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
                </FormGroup>   
            </FormGroup>       
        </Fragment>
     );
}
 
export default Phone;
