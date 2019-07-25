import React, { createContext, useState, useEffect} from 'react';

import { produce } from 'immer';


export const EducationContext = createContext();

const EducationContextProvider = (props) => {
    const [education, setEducation] = useState(
     ()=> {
        const localEducation = localStorage.getItem('education')
        return localEducation ? JSON.parse(localEducation): 
        [
            {
                institution:  "",
                faculty: "",
                course: "",
                qualification: "",
                level:  "",
                
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(education))
  }, [education])

    const addEducation = () => {

        setEducation(
            produce(draft =>{
                draft.push(
                    {
                        institution:  "",
                        faculty: "",
                        course: "",
                        qualification: "",
                        level:  "",
                        
                    }
                )
            })
        )
               
    };

   

    const removeEducation = (i) => {
        setEducation(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }


    const handleChange = (e, i) => {
       
        const { value, name } = e.target;
        
            setEducation(
                produce(draft => {
                    console.log(typeof draft[i][name])
                   if( typeof draft[i][name] === 'object'){
                    draft[i][name].name = value;
                   }else{
                    draft[i][name] = value;
                   }
                    
                   
                })
            )
            
        
         
    }

    return (
        <EducationContext.Provider value={{education, addEducation,  removeEducation,  handleChange}}>
            {props.children}
        </EducationContext.Provider>
    )
}

export default EducationContextProvider;
