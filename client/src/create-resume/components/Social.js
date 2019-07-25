import React, { useContext, Fragment } from 'react';
import { FormGroup} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';

import { SocialContext } from '../context/SocialContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Social = () => {

    const { socials, addSocial, handleChange, removeSocial} = useContext(SocialContext)
    return ( 
        <Fragment>
            {socials.map(({site, account}, i) => {
              return (
                <FormBox key={i}>
                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeSocial(i)} />
                    <FormGroup>
                      <FormInput  placeholder="Platform" value={site} onChange ={ (e) => handleChange(e, i)} name='site' />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormInput  placeholder="Link" value={account} onChange ={ (e) => handleChange(e, i)} name='account' />
                    </FormGroup>
                    
                </FormBox>
              )
            }
            )} 
            <FormGroup display="flex" justifyContent="space-between" mt="20px" >
                <FormGroup display="flex" justifyContent="flex-start" mt="20px" width="80%">
                        <FontAwesomeIcon size="lg" cursor="pointer" icon={faPlus} onClick={() => addSocial()} />
                </FormGroup> 
                <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                        <NavLink to="/create-resume/phone"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                        <NavLink to="/create-resume/education"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
                </FormGroup>   
            </FormGroup>       
        </Fragment>
     );
}
 
export default Social;
