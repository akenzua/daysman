import React, { createContext, useState, useEffect} from 'react';
import { produce } from 'immer';


export const InterestContext = createContext();

const InterestContextProvider = (props) => {
    const [interest, setInterest] = useState(
     ()=> {
        const localInterest = localStorage.getItem('interest')
        return localInterest ? JSON.parse(localInterest): 
        [
            {
                
                skill: ""
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('interest', JSON.stringify(interest))
  }, [interest])


  const handleChange = (e, i) => {
       
    const { value, name } = e.target;
    
        setInterest(
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
    const addInterest = () => {

        setInterest(
            produce(draft =>{
                draft.push(
                    {
                
                        skill: ""
                    }
                )
            })
        )
               
    };

    const removeInterest = (i) => {
        setInterest(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }

    return (
        <InterestContext.Provider value={{interest, addInterest, handleChange, removeInterest}}>
            {props.children}
        </InterestContext.Provider>
    )
}

export default InterestContextProvider;
