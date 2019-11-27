import React from 'react';
import {Page, View, Text, Document, Font} from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components'

Font.register({family: 'Montserrat', 
                fonts: [
                  {
                    src: `https://fonts.googleapis.com/css?family=Montserrat`
                    
                  }
                ]
              })


const Default = (props) => {
  return(
    < Document>
    <Page size="A4" wrap style={{padding: '45px 45px'}}>
    <View style={{marginBottom: '15px'}}>
      <Text>AJIBADE</Text>
      <Text>AKINTADE</Text>
      <Text>OLABANJI</Text>
      <Text style={{color: 'grey'}}>{props.title}</Text>
    </View>
    
    <Text>{props.summary}</Text>
     {props.socialsIterate} 
    {props.addressIterate}
    {props.phoneIterate}
    {props.education}
    {props.experience}
    {props.certification}
    {props.interest}
    {props.awards}
  </Page>
</ Document >
  )
  
}

export default Default;

 
    

 
