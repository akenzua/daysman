import React, { useContext } from 'react';
import { ExperienceContext } from './context/ExperienceContext'

const Experience = () => {

    const { experience, addExperience, addJob } = useContext(ExperienceContext)
    return ( 
        <div>
            {experience.map(({position, job}, i) =>{
                return(
                    <div  key={i}>
                    <p> {position}</p>
                    
                    {job.map(({description}, k) => {
                        return(
                            
                            <p key={k}> {description}</p>
                            
                            
                        )
                    })}
                    <hr/>
                    {i}
                    <button onClick={() => addJob(i)}>Add Job</button>
                    </div>
                )
            })
            }
            <button onClick={() => addExperience()}>Add Experience</button>
        </div>
     );
}
 
export default Experience;
