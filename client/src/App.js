import React, { Component, Fragment} from 'react';
import { Router } from '@reach/router';
import { Normalize, Col, Grid, Row } from '@smooth-ui/core-sc';


import Logout from './logout';
import Post from './Post';
import Resumes from './Resumes';
import CreateResume from './create-resume/CreateResumes';
import ResumeAttribute from './create-resume/ResumeAttributes';
import Experience from './create-resume/Experience';

class App extends Component {
  state = { }
  render() { 
    return ( 
      <Fragment>
        <Normalize />
        < Logout/>
        <Grid>
          <Row justifyContent={{ lg: 'center' }}>
           
            <Col lg={7}>
              <Router>
            
                <Post path="/" />
                <Resumes path="resumes" />
                <CreateResume path="create-resume" >
                  <ResumeAttribute path="attributes"/>
                  <Experience path="experience"/>
                </CreateResume>

              </Router>
            
            </Col>
            
          </Row>
          
        </Grid>
        
        
      </Fragment>
     );
  }
}
 
export default App;



