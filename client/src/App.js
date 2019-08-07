import React, {  Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Grid} from '@material-ui/core';



import Logout from './logout';
import Post from './Post';
import Resumes from './Resumes';
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
                    
                    <Route exact path='/' component={Post}/>
                    <Route path='/create-resume' component={CreateResume}/>
                    <Route path='/resumes' component={Resumes}/>
                    
                  </Grid>
                  <Grid item sm={3}></Grid>
                  
                </Grid>
              </Router>
        
      </Fragment>
     );
  
}
 
export default App;



