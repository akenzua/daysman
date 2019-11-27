import React, { Fragment} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


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
import SummaryContextProvider from './context/SummaryContext';
import AwardsContextProvider from './context/AwardsContext';
import Awards from './components/Awards';


const CreateResume = props => {

  
  
    return ( 
            <Fragment>
              <h2>Create Resume</h2>
              <Route
                path="/create-resume/"
                render={({ location }) => (
                  <Fragment >
                    <Tabs value={location.pathname} orientation="horizontal" variant="scrollable">
                      <Tab label="Attributes" value="/create-resume/attributes" component={Link} to="/create-resume/attributes" />
                      <Tab label="Experience" value="/create-resume/experience" component={Link} to="/create-resume/experience" />
                      <Tab value="/create-resume/address" label="Address" component={Link} to="/create-resume/address"/>
                      <Tab value="/create-resume/phone" label="Phone" component={Link} to="/create-resume/phone"/>
                      <Tab value="/create-resume/socials" label="Socials" component={Link} to="/create-resume/socials"/>
                      <Tab value="/create-resume/education" label="Education" component={Link} to="/create-resume/education"/>
                      <Tab value="/create-resume/certification" label="Certification" component={Link} to="/create-resume/certification"/>
                      <Tab value="/create-resume/interest" label="Interest" component={Link} to="/create-resume/interest"/>
                      <Tab value="/create-resume/awards" label="Awards" component={Link} to="/create-resume/awards"/>
                      <Tab value="/create-resume/summary" label="Summary" component={Link} to="/create-resume/summary"/>
                  </Tabs>
             
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
                  <SummaryContextProvider>
                    <Summary/>
                  </SummaryContextProvider>
                 </Route>
                 
              </Switch>
              </Fragment>
          )}
        />
              
            </Fragment>
    );
    
}
 
export default CreateResume;