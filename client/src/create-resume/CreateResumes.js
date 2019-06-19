import React from 'react';
import { Link } from "@reach/router";

const CreateResume = props => {
    return ( 
            <div>
              <h2>Create Resume</h2>
              <ul>
                <li>
                  <Link to="/create-resume/attributes">Resume Attributes</Link>
                </li>
                <li>
                  <Link to="/create-resume/experience">Work Experience</Link>
                </li>
              </ul>
          
              {props.children}
            </div>
    );
    
}
 
export default CreateResume;