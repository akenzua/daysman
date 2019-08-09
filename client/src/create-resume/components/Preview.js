import React, { useContext, Fragment } from 'react';

import { useMutation } from 'react-apollo-hooks';
import {Box} from '@material-ui/core';
import {CREATE_RESUME} from '../../queries';
import { SummaryContext } from '../context/SummaryContext'




const Summary = () => {
   
    
    const { experience, education, certification, address, phone, socials,
            interest, awards, title, summary, socialsIterate} = useContext(SummaryContext)

    const [addResume, {loading, error, data}] = useMutation(CREATE_RESUME, {
        variables: { title, summary, experience, education, certification, address, phone, socials, awards, interest },
        
      });
  
    let result = data && data.createResume  ? 
    <Fragment>
      <p>{data.createResume.title}</p>
      <p>{data.createResume.summary}</p>
      {socialsIterate}
      
    </Fragment>
      :<button onClick={addResume }>Add Resume</button>;

      return(
        <div>

          {result}
        </div>
      )
    
}
 
export default Summary;