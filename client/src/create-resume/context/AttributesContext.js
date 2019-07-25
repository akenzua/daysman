import React, { createContext, useState, useEffect} from 'react';
import { produce } from 'immer';


export const AttributesContext = createContext();

const AttributesContextProvider = (props) => {
    const [attributes, setAttributes] = useState(
     ()=> {
        const localAttributes = localStorage.getItem('attributes')
        return localAttributes ? JSON.parse(localAttributes): 
        [
            {
                title: "",
                summary: ""
            }
        ]
    })

  useEffect(() => {
    localStorage.setItem('attributes', JSON.stringify(attributes))
  }, [attributes])


  const handleChange = (e, i) => {
       
    const { value, name } = e.target;
        setAttributes(
            produce(draft =>{
                draft[i][name] = value;
            })
        )
    
   
    
}
    

    return (
        <AttributesContext.Provider value={{attributes, handleChange}}>
            {props.children}
        </AttributesContext.Provider>
    )
}

export default AttributesContextProvider;
