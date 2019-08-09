import React, { createContext, useState, useEffect} from 'react';
import { produce } from 'immer';


export const SocialContext = createContext();

const SocialContextProvider = (props) => {
    const [socials, setSocial] = useState(
     ()=> {
        const localSocial = localStorage.getItem('socials')
        return localSocial ? JSON.parse(localSocial): 
        [
            {
                site: "",
                account: ""
              }
        ]
    })

  useEffect(() => {
    localStorage.setItem('socials', JSON.stringify(socials))
  }, [socials])


  const handleChange = (e, i) => {
       
    const { value, name } = e.target;
        setSocial(
            produce(draft =>{
                draft[i][name] = value;
            })
        )
  
    }
    const addSocial = () => {

        setSocial(
            produce(draft =>{
                draft.push(
                    {
                        site: "",
                        account: ""      
                    }
                )
            })
        )
               
    };

    const removeSocial = (i) => {
        setSocial(
            produce(draft => {
                // delete draft[i];
                draft.splice(i,1)
            })
        )
    }

    return (
        <SocialContext.Provider value={{socials, addSocial, handleChange, removeSocial}}>
            {props.children}
        </SocialContext.Provider>
    )
}

export default SocialContextProvider;
