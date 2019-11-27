import React, { useContext, Fragment } from 'react';
import {  NavLink} from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import {Box, Paper, Typography, Button} from '@material-ui/core';
import {CREATE_RESUME} from '../../queries';
import { SummaryContext } from '../context/SummaryContext'


import ArrowForward from '@material-ui/icons/ArrowForward';

import { useStyles} from '../resume-form-theme/theme'


const Summary = () => {
   
    const classes = useStyles();
    const { experience, education, certification, address, phone, socials,
            interest, awards, title, summary, socialsIterate, addressIterate, 
            phoneIterate, educationIterate, experienceIterate, certificationIterate,
            interestIterate, awardsIterate} = useContext(SummaryContext)

    const [addResume, {data}] = useMutation(CREATE_RESUME, {
        variables: { title, summary, experience, education, certification, address, phone, socials, awards, interest },
        
      });
  
  
      if(data && data.createResume ){
        localStorage.setItem('createdResume', data.createResume._id)
      }
      let result = localStorage.getItem('createdResume') ? 
      <Fragment>
        <Box className={classes.box}>
        <Paper className={classes.summary}>
          <Typography variant="body2">
          Your resume  has been succesfully submitted.
          You can proceed to the preview page to choose one of our beautiful template 
          and then print or send the QR code to your prospective employer
          </Typography>
        </Paper>
        <Box className={classes.justifyEnd} mt="40px"  mb="40px">   
            <NavLink to="/resume/preview" className={classes.link}>
                    <Button variant="contained"  color="secondary" className={classes.button}>
                      Preview &nbsp;&nbsp;&nbsp;
                      <ArrowForward  />
                    </Button>
              </NavLink>    
                </Box> 
        </Box>
      </Fragment>
      
     
      : <Fragment>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          
           <Typography variant="subtitle2">Title:</Typography> <Typography variant="body2" gutterBottom>{title}</Typography>
           <Typography variant="subtitle2">Summary:</Typography> <Typography variant="body2" >{summary}</Typography>
         
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Address:</Typography> {addressIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Phone: </Typography> {phoneIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Education: </Typography> {educationIterate}
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant ="body1" gutterBottom>Experience: </Typography>{experienceIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Certification:</Typography> {certificationIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Interest:</Typography> {interestIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Awards:</Typography> {awardsIterate}
        </Paper>
        <Paper className={classes.paper}>
        <Typography variant ="body1" gutterBottom>Socials: </Typography>{socialsIterate}
        </Paper>
        
        
        


      </Box>
      <Box className={classes.justifyEnd} mt="40px" mr="70px" mb="40px">   
                  
                    <Button variant="contained"  color="secondary" className={classes.button} onClick={addResume }>
                      Submit &nbsp;&nbsp;&nbsp;
                      <ArrowForward  />
                    </Button>
                  
                </Box> 
      
    </Fragment>
      return(
        <Fragment>
        {result}
        
        </Fragment>
      )
    
}
 
export default Summary;