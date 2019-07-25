import React, { createContext, useState, useEffect} from 'react';
import { produce } from 'immer';


export const PhoneContext = createContext();

const PhoneContextProvider = (props) => {
    const [phone, setPhone] = useState(
     ()=> {
        const localPhone = localStorage.getItem('phone')
        return localPhone ? JSON.parse(localPhone): 
        [
            {
                
                number: ""
              }
        ]
    })

  useEffect(() => {
    localStorage.setItem('phone', JSON.stringify(phone))
  }, [phone])


  const handleChange = (e, i) => {
       
    const { value, name } = e.target;
        setPhone(
            produce(draft =>{
                draft[i][name] = value;
            })
        )
  
    }
    const addPhone = () => {

        setPhone(
            produce(draft =>{
                draft.push(
                    {
                       number: ""       
                    }
                )
            })
        )
               
    };

    const removePhone = (i) => {
        setPhone(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }

    return (
        <PhoneContext.Provider value={{phone, addPhone, handleChange, removePhone}}>
            {props.children}
        </PhoneContext.Provider>
    )
}

export default PhoneContextProvider;
