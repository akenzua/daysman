import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

// const CREATE_RESUME = gql`
// mutation createResume($resumeInput: ResumeInput! ) {
//         createResume(resumeInput: $resumeInput) {
//                     _id
//     }
//   }
// `;

const CREATE_RESUME = gql`
mutation createResume(
    
    $title: String!,
    $summary: String!,
    $experience: [ExperienceInput!]!,
    $phone: [PhoneInput!]!,
    $socials: [SocialInput!],
    $address: [AddressInput!]!,
    $awards: [AwardsInput!]
    $education: [EducationInput!]!,
    $certification: [CertificationInput!],
    $interest: [InterestInput!]
     ) {
        createResume(
                 title: $title,
                 summary:$summary, 
                 experience: $experience, 
                 phone:$phone, 
                 socials:$socials, 
                 address:$address,
                 awards: $awards, 
                 education: $education,
                 certification: $certification,
                 interest: $interest
                 ) {
                    _id
                    title
                    summary
    }
  }
`;

const Summary = () => {
    const attributes = JSON.parse(localStorage.getItem('attributes'))
    const experience = JSON.parse(localStorage.getItem('experience'))
    const education = JSON.parse(localStorage.getItem('education'))
    const certification = JSON.parse(localStorage.getItem('certification'))
    const address = JSON.parse(localStorage.getItem('address'))
    const phone = JSON.parse(localStorage.getItem('phone'))
    const socials = JSON.parse(localStorage.getItem('socials'))
    const interest = JSON.parse(localStorage.getItem('interest'))
    const awards = JSON.parse(localStorage.getItem('awards'))
    let title =attributes[0].title;
    let summary = attributes[0].summary;
    

    const [addResume] = useMutation(CREATE_RESUME, {
        variables: { title, summary, experience, education, certification, address, phone, socials, awards, interest },
      });
    console.log(attributes)
    return ( 
        <div>
            <button onClick={addResume }>Add Resume</button> 
        </div>
    );
}
 
export default Summary;