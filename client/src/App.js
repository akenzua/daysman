import React, { Component, Fragment} from 'react';
// import { Router } from '@reach/router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Normalize, Col, Grid, Row } from '@smooth-ui/core-sc';


import Logout from './logout';
import Post from './Post';
import Resumes from './Resumes';
import CreateResume from './create-resume/CreateResumes';
// import ResumeAttribute from './create-resume/ResumeAttributes';
// import Experience from './create-resume/Experience';


class App extends Component {
  state = { }
  render() { 
    return ( 
      <Fragment>
        <Normalize />
        < Logout/>
        <Grid>
          <Row justifyContent={{ lg: 'center' }}>
           
            <Col lg={6}>
              <Router>
                <Route exact path='/' component={Post}/>
                <Route path='/create-resume' component={CreateResume}/>
                <Route path='/resumes' component={Resumes}/>

              </Router>
            
            </Col>
            
          </Row>
          
        </Grid>
        
        
      </Fragment>
     );
  }
}
 
export default App;



