import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';


import ResumeAttributes from './ResumeAttributes';
import Experience from './Experience';
import ExperienceContextProvider from './context/ExperienceContext';

const CreateResume = props => {
    return ( 
            <div>
              <h2>Create Resume</h2>
              <ul>
                <li>
                  <NavLink to="/create-resume/attributes">Resume Attributes</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/experience">Work Experience</NavLink>
                </li>
              </ul>
              <Switch>
              <Route exact path='/create-resume/attributes' component={ResumeAttributes}/>
              
              <Route exact path='/create-resume/experience'>
                <ExperienceContextProvider>
                  <Experience/>
                </ExperienceContextProvider>
              </Route>
              </Switch>
            </div>
    );
    
}
 
export default CreateResume;