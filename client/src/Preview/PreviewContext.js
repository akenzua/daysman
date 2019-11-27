import React, { createContext} from 'react';

import {  useQuery } from 'react-apollo-hooks';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

import {RESUME} from '../queries';


export const PreviewContext = createContext();

const styles = StyleSheet.create({
  socialView: {
    color: "red"
  },
  titleView: {
    fontSize: '10px'
  }
})

const PreviewContextProvider = (props) => {
    const id = localStorage.getItem('createdResume') ? localStorage.getItem('createdResume'): null
    
    const {data } = useQuery(RESUME, {
        variables: { id: id},
    });

    
    const experience = data && data.resume ? data.resume.experience :  [{position: "", organisation: "", start: "", end: "", job:[{description:""}]}]
    const education = data && data.resume ? data.resume.education : [{course: "", end: "", faculty: "", institution: "", level: "", qualification: "", start: ""}]
    const certification = data && data.resume ? data.resume.certification : [{description: "", expires: "", expiry: "", issuer: "", start: "",  title: ""}]
    const address = data && data.resume ? data.resume.address : [{house: "", street: "", town: "", city: "", country: ""}]
    const phone = data && data.resume ? data.resume.phone : [{number: ""}]
    const socials = data && data.resume ? data.resume.socials : [{site:'', account: ''}]
    const interest = data && data.resume.interest ? data.resume.interest : [{skill: ""}]
    const awards = data && data.resume ? data.resume.awards: [{description: "", expires: "", issuer: "", start: "", title: ""}]
    const title = data && data.resume ? data.resume.title : ''
    const summary = data && data.resume ? data.resume.summary : ''
    
    
    // let titleIterate = () => <View style={styles.titleView}>{title}</View>
    
    // Iterate Social
    let socialsIterate = socials.map(function(social, i){
        return(
            <View key={i} style={styles.socialView}>
                <View>
                    <Text >{social.site}</Text>
                </View>
                <View>
                    <Text >{social.account}</Text>
                </View>
            </View>
        )

    });
    let addressIterate = address.map(function(add, i){
        return(
          <View key={i}>
            <View>
              <Text>
                {add.house}
              </Text>
            </View>
            <View>
              <Text>
                {add.street}
              </Text>
            </View>
            <View>
              <Text>
                {add.town}
              </Text>
            </View>
            <View>
              <Text>
                {add.city}
              </Text>
            </View>
            <View>
              <Text>
                {add.country}
              </Text>
            </View>
          </View>
        )
      });


    let phoneIterate = phone.map(function(phone, i){
        return(
            <View  key={i}>
            <Text >
                {phone.number}
            </Text>
            </View>
        )
    });
  
    let educationIterate = education.map(function(education, i){
        return(
            <View  key={i}>
            <View>
                <Text >
                {education.course.name}
                </Text>
            </View>
             <View>
                <Text>
                    {education.start}
                </Text>
                
            </View>
            <View>
                <Text>
                    {education.end}
                </Text>
                
            </View>

          <View>
            <Text>
                {education.institution.name}
            </Text>
          </View>
          
          <View>
            <Text>
              {education.faculty.name}
            </Text>
          </View>
          
          <View>
            <Text>
                {education.qualification.name}
            </Text>
          </View>

            <View>
            <Text>
              {education.level.name}
          </Text>  
            </View>
           
          
        </View>
        )
    })
    

    const experienceIterate = experience.map(({position, organisation, start, end, job }, i) =>(
        <View  key={i} >
            <View >
            <Text>
                {position}
            </Text>
            </View>
            <View>
                <Text>
                    {start}
                </Text>
                
            </View>
            <View>
                <Text>
                    {end}
                </Text>
                
            </View>
          <View>
            <Text >
              {organisation}
            </Text>
          </View>
          
          
          
          
          {job.map(({description}, k) => {
              
            return(
             <View key={k} >
               <Text>
                 {description}
                </Text>
             </View> 
                
                )})}
          
        </View>
    ));

    const certificationIterate = certification.map(({title, issuer, start, expires, expiry, description}, i) =>(
        <View  key={i} >
          <View>
          <Text >
              {title.name}
          </Text>
          </View>
          <View>
                <Text>
                    {start}
                </Text>
                
          </View>
          <View>
                <Text>
                    {expiry}
                </Text>
                
          </View>
          <View>
          <Text >
              {issuer.name}
          </Text>
         </View>
         <View>
        <Text >
              {expires}
          </Text>
         </View>
          <View>
           <Text>
              {description}
           </Text>   
          </View>
          
        </View>
    ));

    const interestIterate = interest.map(({skill}, i) =>(
        <View  key={i}>
          <Text >
              {skill.name}
          </Text>
        </View>
    ));

    const awardsIterate = awards.map(({title, issuer, start, expires, description}, i) =>(
        <View  key={i} >
            <View >
                <Text >
                {title}
                </Text>
                <View>
                <Text >
                    {start}
                </Text>
                
            </View>
            </View>
          
          <Text >
              {issuer}
          </Text>
          
          <Text >
              {expires}
          </Text>
          <Text >
              {description}
          </Text>
        </View>
    ));

    return (
        <PreviewContext.Provider value={{ 
          title, summary, socialsIterate, addressIterate,
         phoneIterate, awardsIterate, educationIterate, experienceIterate, certificationIterate,
         interestIterate}}>
            {props.children}
        </PreviewContext.Provider>
    )
}

export default PreviewContextProvider;
