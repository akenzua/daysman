import React, { createContext, useState, useEffect} from 'react';
// import update from 'immutability-helper';
import { produce } from 'immer';


export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
    const [experience, setExperience] = useState(
     ()=> {
        const localExperience = localStorage.getItem('experience')
        return localExperience ? JSON.parse(localExperience): 
        [
            {
                position: "",
                organisation: "",
                start: "",
                end: "",
                job: [
                    {description: ""},
                    {description: ""}
                ]
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(experience))
  }, [experience])

    const addExperience = () => {

        setExperience(
            produce(draft =>{
                draft.push(
                    {
                                position: "",
                                organisation: "",
                                start: "",
                                end: "",
                                job: [
                                    {description: ""},
                                  
                                ]
                            }
                )
            })
        )
        // setExperience([
        //     ...experience, 
        //     {
        //         position: "",
        //         organisation: "",
        //         start: "",
        //         end: "",
        //         job: [
        //             {description: ""},
                  
        //         ]
        //     }
        // ])
        
    };

    const addJob = (i) => {
        
        setExperience(
            produce(draft =>{
                draft[i].job.push({description: ""})
            })
        )
      
    }

    const removeExperience = (i) => {
        setExperience(
            produce(draft => {
                delete draft[i];
            })
        )
    }

    const removeJob = (i, k) => {
        setExperience(
            produce(draft => {
                draft[i].job.splice(k,1)
  
            })
        )

        console.log(experience)
    }

    const handleChange = (e, i, k) => {
        const value = e.target.value
        const name = e.target.name
        if (k !== undefined) {
        setExperience(
            produce(draft => {
                draft[i].job[k].description = value
            })
            
        )
        } else{
            // [e.target.name]=e.target.value;
            
            console.log([e.target.name])
            setExperience(
                produce(draft => {
                    draft[i][name] = value;
                    
                })
            )
            
        }
         
        console.log(experience)
        // const job =this.state.job;
        // job[index].description = e.target.value;
    }

    return (
        <ExperienceContext.Provider value={{experience, addExperience, addJob, removeExperience, removeJob, handleChange}}>
            {props.children}
        </ExperienceContext.Provider>
    )
}

export default ExperienceContextProvider;
