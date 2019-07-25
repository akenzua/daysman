import React, { useContext, Fragment } from 'react';
import { FormGroup, Textarea} from '@smooth-ui/core-sc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import {  NavLink} from 'react-router-dom';

import { AddressContext } from '../context/AddressContext'
import { FormBox, FormInput} from '../resume-form-theme/theme'

const Address = () => {

    const { address, handleChange} = useContext(AddressContext)
    return ( 
        <Fragment>
            {address.map(({house, street, town, city, country}, i) => {
              return (
                <FormBox key={i}>
                  
                    <FormGroup>
                      <FormInput  placeholder="House" value={house} onChange ={ (e) => handleChange(e, i)} name='house' />
                    </FormGroup>
                    <FormGroup>
                      <Textarea size="lg" placeholder="Street" display="block" value={street} width="100%" onChange ={ (e) => handleChange(e, i)} name="street"/>
                    </FormGroup>
                    <FormGroup>
                      <Textarea size="lg" placeholder="Town" display="block" value={town} width="100%" onChange ={ (e) => handleChange(e, i)} name="town"/>
                    </FormGroup>
                    <FormGroup>
                      <Textarea size="lg" placeholder="City" display="block" value={city} width="100%" onChange ={ (e) => handleChange(e, i)} name="city"/>
                    </FormGroup>
                    <FormGroup>
                      <Textarea size="lg" placeholder="Country" display="block" value={country} width="100%" onChange ={ (e) => handleChange(e, i)} name="country"/>
                    </FormGroup>
                </FormBox>
              )
            }
            )} 

            <FormGroup display="flex" justifyContent="space-between" mt="20px" width="20%" size="lg">
                    <NavLink to="/create-resume/experience"><FontAwesomeIcon size="lg" icon={faAngleLeft} /></NavLink>    
                    <NavLink to="/create-resume/phone"><FontAwesomeIcon size="lg" icon={faAngleRight} /></NavLink> 
            </FormGroup>          
        </Fragment>
     );
}
 
export default Address;
