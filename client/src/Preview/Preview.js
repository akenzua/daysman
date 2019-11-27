import React, { useContext } from 'react';
import {PDFViewer, View, Text} from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components'

import { PreviewContext } from './PreviewContext';

import './scroll.css';


import Default from './Default';

const Preview = () => {
  

  const { title, summary, socialsIterate, addressIterate, 
    phoneIterate, educationIterate, experienceIterate, certificationIterate,
    interestIterate, awardsIterate} = useContext(PreviewContext)

    

    return(
      <PDFViewer className="frame" >
        <Default 
        title = {title}
        education={educationIterate}
        summary ={summary}
        addressIterate = {addressIterate}
        socialsIterate ={socialsIterate}
        phoneIterate = {phoneIterate}
        experience = {experienceIterate}
        certification = {certificationIterate}
        interest = {interestIterate}
        awards = {awardsIterate}
        />
      </PDFViewer>
    )
    
    
}
 
export default Preview;