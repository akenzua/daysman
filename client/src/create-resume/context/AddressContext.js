import React, { createContext, useState, useEffect} from 'react';
import { produce } from 'immer';


export const AddressContext = createContext();

const AddressContextProvider = (props) => {
    const [address, setAddress] = useState(
     ()=> {
        const localAddress = localStorage.getItem('address')
        return localAddress ? JSON.parse(localAddress): 
        [
            {
                house: "",
                street: "",
                town: "",
                city: "",
                country: ""
              }
        ]
    })

  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(address))
  }, [address])


  const handleChange = (e, i) => {
       
    const { value, name } = e.target;
        setAddress(
            produce(draft =>{
                draft[i][name] = value;
            })
        )
    
   
    
}
    

    return (
        <AddressContext.Provider value={{address, handleChange}}>
            {props.children}
        </AddressContext.Provider>
    )
}

export default AddressContextProvider;
