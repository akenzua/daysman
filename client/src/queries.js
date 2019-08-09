import gql from 'graphql-tag';

export const CREATE_RESUME = gql`
    mutation createResume(
        $title: String!, $summary: String!, $experience: [ExperienceInput!]!, $phone: [PhoneInput!]!,
        $socials: [SocialInput!], $address: [AddressInput!]!, $awards: [AwardsInput!], $education: [EducationInput!]!,
        $certification: [CertificationInput!], $interest: [InterestInput!]
         ) {
        createResume(
                 title: $title, summary:$summary, experience: $experience, phone:$phone,socials:$socials, 
                 address:$address, awards: $awards, education: $education, certification: $certification,
                 interest: $interest
                 ) {
                  _id title summary
                  address{
                     _id house street town city country
                     }
                  experience{
                    _id position organisation start end
                    job{ _id description}
                  }
                  awards{
                    _id  title 
                  }
                  certification {
                    _id title {_id name}
                  }
                  education{
                    _id
                    institution{ _id name}
                    faculty{ _id name }
                    course{_id  name}
                    qualification{ _id  name}
                    level{ _id  name}
                  }
                  phone{ number }
                  socials{site account}
    }
  }
`;

