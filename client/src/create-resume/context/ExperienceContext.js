import React, { createContext, useState} from 'react';
import update from 'immutability-helper';
import { produce } from 'immer';

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
    const [experience, setExperience] = useState([
    
            
                {
                    position: "Digerr",
                    organisation: "",
                    start: "",
                    end: "",
                    job: [
                        {description: "laslas"},
                        {description: "goala"}
                    ]
                }
            
        
    ])

  

    const addExperience = () => {
        setExperience([
            ...experience, 
            {
                position: "Added",
                organisation: "",
                start: "",
                end: "",
                job: [
                    {description: "toha"},
                    {description: "jingi"}
                ]
            }
        ])
        
    };

    const addJob = (i) => {
        
        // setExperience(
        //     produce(draft =>{
        //         draft[i].job.push({description: "verse"})
        //     })
        // )
        
        setExperience(experience => update(experience,{

            [i]: { 
                job: {$push: [
                  {
                    description: "verse"
                  }
                ]}}
            }))
        // setExperience([
        //     ...experience,
        //         [i]: {
        //             ...experience.job,
        //             {description: ""}
        //         }
            
        // ])
        console.log(experience)
    }

    return (
        <ExperienceContext.Provider value={{experience, addExperience, addJob}}>
            {props.children}
        </ExperienceContext.Provider>
    )
}

export default ExperienceContextProvider;
