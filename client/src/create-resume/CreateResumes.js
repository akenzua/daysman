import React from 'react';
import {  NavLink, Route, Switch } from 'react-router-dom';


import ResumeAttributes from './components/ResumeAttributes';
import AttributesContextProvider from './context/AttributesContext';
import Experience from './components/Experience';
import ExperienceContextProvider from './context/ExperienceContext';
import Address from './components/Address';
import AddressContextProvider from './context/AddressContext';
import Phone from './components/Phone';
import PhoneContextProvider from './context/PhoneContext';
import Social from './components/Social';
import SocialContextProvider from './context/SocialContext';
import Education from './components/Education';
import EducationContextProvider from './context/EducationContext';
import Certification from './components/Certification';
import CertificationContextProvider from './context/CertificationContext';
import Interest from './components/Interest';
import InterestContextProvider from './context/InterestContext';
import Summary from './components/Summary';
import AwardsContextProvider from './context/AwardsContext';
import Awards from './components/Awards';

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
                <li>
                  <NavLink to="/create-resume/address">Address</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/phone">Phone</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/socials">Socials</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/certification">Certification</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/interest">Interest</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/awards">Awards</NavLink>
                </li>
                <li>
                  <NavLink to="/create-resume/summary">Summary</NavLink>
                </li>
              </ul>
              <Switch>
                <Route exact path='/create-resume/attributes'>
                  <AttributesContextProvider>
                    <ResumeAttributes/>
                  </AttributesContextProvider>
                </Route>
                
                <Route exact path='/create-resume/experience'>
                  <ExperienceContextProvider>
                    <Experience/>
                  </ExperienceContextProvider>
                </Route>

                <Route exact path='/create-resume/address'>
                  <AddressContextProvider>
                    <Address/>
                  </AddressContextProvider>
                </Route>

                <Route exact path='/create-resume/phone'>
                  <PhoneContextProvider>
                    <Phone/>
                  </PhoneContextProvider>
                </Route>

                <Route exact path='/create-resume/socials'>
                  <SocialContextProvider>
                    <Social/>
                  </SocialContextProvider>
                </Route>

                <Route exact path='/create-resume/education'>
                  <EducationContextProvider>
                    <Education/>
                  </EducationContextProvider>
                </Route>

                <Route exact path='/create-resume/certification'>
                  <CertificationContextProvider>
                    <Certification/>
                  </CertificationContextProvider>
                </Route>

                <Route exact path='/create-resume/interest'>
                  <InterestContextProvider>
                    <Interest/>
                  </InterestContextProvider>
                </Route>

                <Route exact path='/create-resume/awards'>
                  <AwardsContextProvider>
                    <Awards/>
                  </AwardsContextProvider>
                </Route>

                <Route exact path='/create-resume/summary'>
                 
                    <Summary/>
                 </Route>
                 
              </Switch>
            </div>
    );
    
}
 
export default CreateResume;