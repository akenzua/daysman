import React, { createContext} from 'react';
import {Box, Typography} from '@material-ui/core';


import { useStyles} from '../resume-form-theme/theme'

export const SummaryContext = createContext();

const SummaryContextProvider = (props) => {
    const classes = useStyles();
    

    const attributes =  localStorage.getItem('attributes') ? JSON.parse(localStorage.getItem('attributes')): null
    const experience = localStorage.getItem('experience') ? JSON.parse(localStorage.getItem('experience')) : null
    const education = localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')): null
    const certification = localStorage.getItem('certification') ? JSON.parse(localStorage.getItem('certification')): null
    const address = localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')): null
    const phone = localStorage.getItem('phone') ? JSON.parse(localStorage.getItem('phone')): null
    const socials = localStorage.getItem('socials') ? JSON.parse(localStorage.getItem('socials')): null
    const interest = localStorage.getItem('interest') ? JSON.parse(localStorage.getItem('interest')): null
    const awards = localStorage.getItem('awards') ? JSON.parse(localStorage.getItem('awards')): null
    const title = attributes[0].title ? attributes[0].title: null
    const summary = attributes[0].summary ? attributes[0].summary : null
    
    const socialsIterate = socials.map(({site, account}, i) =>(
        
        <Box  key={i} className={classes.multiple}>
          <Typography variant="body2" >{site}&nbsp;&nbsp; |&nbsp;&nbsp;{account}</Typography>
        </Box>
    ));

    const addressIterate = address.map(({house, street, town, city, country}, i) =>(
        <Box  key={i}>
          <Typography variant="body2" >
              {house} {street} {town}
          </Typography>
          <Typography variant="body2" >
              {city} {country}
          </Typography>
        </Box>
    ));

    const phoneIterate = phone.map(({number}, i) =>(
        <Box  key={i} className={classes.multiple}>
          <Typography variant="body2">
              {number}
          </Typography>
        </Box>
    ));

    const educationIterate = education.map(({institution, faculty, course, qualification, level, start, end}, i) =>(
        <Box  key={i} className={classes.multiple}>
          <Box  className={classes.justifySpace}>
            <Typography variant="subtitle2" >
              {course}
            </Typography>
            <Box>
                <Typography variant="body2">
                    {start}&nbsp;&nbsp; |&nbsp;&nbsp; {end}
                </Typography>
                
            </Box>

          </Box>
          <Typography variant="body2">
              {institution}
          </Typography>
          
          <Typography variant="body2">
              {faculty}
          </Typography>
          
          <Typography variant="body2">
              {qualification}
          </Typography>
          <Typography variant="body2">
              {level}
          </Typography>
          
        </Box>
    ));

    const experienceIterate = experience.map(({position, organisation, start, end, job }, i) =>(
        <Box  key={i} className={classes.multiple}>
            <Box className={classes.justifySpace}>
            <Typography variant="subtitle2">
                {position}
            </Typography>
            <Box>
                <Typography variant="body2">
                    {start}&nbsp;&nbsp; |&nbsp;&nbsp; {end}
                </Typography>
                
            </Box>
            </Box>
          <Typography variant="body2" gutterBottom>
              {organisation}
          </Typography>
          
          
          <Typography variant="body2">Job Description</Typography>
          {job.map(({description}, k) => {
              
            return(
             <Box key={k} paddingLeft="20px">
               <Typography  variant="subtitle2">
                 {description}
                </Typography>
             </Box> 
                
                )})}
          
        </Box>
    ));

    const certificationIterate = certification.map(({title, issuer, start, expires, expiry, description}, i) =>(
        <Box  key={i} className={classes.multiple}>
          <Box className={classes.justifySpace}>
          <Typography variant="subtitle2">
              {title}
          </Typography>
          <Box>
                <Typography variant="body2">
                    {start}&nbsp;&nbsp; |&nbsp;&nbsp; {expiry}
                </Typography>
                
            </Box>
          </Box>
          <Typography variant="body2" gutterBottom>
              {issuer}
          </Typography>
         
          <Typography variant="body2" gutterBottom>
              Does it expire: {expires}
          </Typography>
          <Typography variant="body2">
              {description}
          </Typography>
        </Box>
    ));

    const interestIterate = interest.map(({skill}, i) =>(
        <Box  key={i} className={classes.multiple}>
          <Typography variant="body2">
              {skill}
          </Typography>
        </Box>
    ));

    const awardsIterate = awards.map(({title, issuer, start, expires, description}, i) =>(
        <Box  key={i} className={classes.multiple}>
            <Box  className={classes.justifySpace}>
                <Typography variant="body2">
                {title}
                </Typography>
                <Box>
                <Typography variant="body2">
                    {start}
                </Typography>
                
            </Box>
            </Box>
          
          <Typography gutterBottom variant="body2">
              {issuer}
          </Typography>
          
          <Typography gutterBottom variant="body2">
              Does is expire? :{expires}
          </Typography>
          <Typography variant="body2">
              {description}
          </Typography>
        </Box>
    ));

    return (
        <SummaryContext.Provider value={{ 
         experience, education, certification, address, phone, socials,
         interest, awards, title, summary, socialsIterate, addressIterate,
         phoneIterate, educationIterate, experienceIterate, certificationIterate,
         interestIterate, awardsIterate}}>
            {props.children}
        </SummaryContext.Provider>
    )
}

export default SummaryContextProvider;
