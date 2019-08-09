import React, { createContext, useState, useEffect} from 'react';

import { produce } from 'immer';


export const CertificationContext = createContext();

const CertificationContextProvider = (props) => {
    const [certification, setCertification] = useState(
     ()=> {
        const localCertification = localStorage.getItem('certification')
        return localCertification ? JSON.parse(localCertification): 
        [
            {
                title: "",
                issuer: "",
                start: "",
                expires: true,
                expiry: "",
                description: ""
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('certification', JSON.stringify(certification))
  }, [certification])

    const addCertification = () => {

        setCertification(
            produce(draft =>{
                draft.push(
                    {
                        title: "",
                        issuer: "",
                        start: "",
                        expires: true,
                        expiry: "",
                        description: ""
                    }
                )
            })
        )
               
    };

   

    const removeCertification = (i) => {
        setCertification(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }


    const handleChange = (e, i) => {
       
        const { value, name } = e.target;
            // if(value === "true"){
            //     value = true
            // }else if(value === "false"){
            //     value = false
            // }
        
            setCertification(
                produce(draft => {
                   if( typeof draft[i][name] === 'object'){
                    draft[i][name].name = value;
                   }else{
                    draft[i][name] = value;
                   }
                    
                   
                })
            )
            
        
         
    }

    return (
        <CertificationContext.Provider value={{certification, addCertification,  removeCertification,  handleChange}}>
            {props.children}
        </CertificationContext.Provider>
    )
}

export default CertificationContextProvider;
