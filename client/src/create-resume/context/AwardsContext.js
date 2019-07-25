import React, { createContext, useState, useEffect} from 'react';

import { produce } from 'immer';


export const AwardsContext = createContext();

const AwardsContextProvider = (props) => {
    const [awards, setAwards] = useState(
     ()=> {
        const localAwards = localStorage.getItem('awards')
        return localAwards ? JSON.parse(localAwards): 
        [
            {
                title: "",
                issuer: "",
                description: "",
                start: "",
                expires: ""
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('awards', JSON.stringify(awards))
  }, [awards])

    const addAwards = () => {

        setAwards(
            produce(draft =>{
                draft.push(
                    {
                        title: "",
                        issuer: "",
                        description: "",
                        start: "",
                        expires: ""
                    }
                )
            })
        )
               
    };

   

    const removeAwards = (i) => {
        setAwards(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }


    const handleChange = (e, i) => {
       
        const { value, name } = e.target;
        
            setAwards(
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
        <AwardsContext.Provider value={{awards, addAwards,  removeAwards,  handleChange}}>
            {props.children}
        </AwardsContext.Provider>
    )
}

export default AwardsContextProvider;
