import React, {  Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Grid} from '@material-ui/core';



import Logout from './logout';
import Post from './Post';
import Resumes from './Resumes';
import Preview from './Preview/Preview';
import PreviewContextProvider from './Preview/PreviewContext'
import CreateResume from './create-resume/CreateResumes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  
  const classes = useStyles();
  
 
    
    return ( 
      <Fragment>
            <div className={classes.root}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      daysman
                    </Typography>
                    < Logout/>
                  </Toolbar>
                </AppBar>
              </div>
              <Router>
                <Grid container>
                  <Grid item sm={3}></Grid>
                  <Grid item sm={6}>
                    <Switch>
                      <Route exact path='/' component={Post}/>
                      <Route path='/create-resume' component={CreateResume}/>
                      <Route exact path='/resume/preview'>
                        <PreviewContextProvider>
                          <Preview/>
                        </PreviewContextProvider>
                      </Route>
                      <Route path='/resumes' component={Resumes}/>
                    
                      
                    </Switch>
                  </Grid>
                  <Grid item sm={3}></Grid>
                  
                </Grid>
              </Router>
        
      </Fragment>
     );
  
}
 
export default App;



