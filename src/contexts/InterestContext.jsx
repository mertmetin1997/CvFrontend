import React, { createContext, useEffect, useState } from 'react'

const InterestContext = createContext();
const InterestContextProvider = ({children}) => {

    const [ınterests, setInterests] = useState([]);
    const getInterests = async () => {
        try {
            const response = await fetch("https://localhost:7276/api/Interests");
            const data = await response.json();
            setInterests(data);
        } catch (error) {
            console.error("ilgi alanları getirilemedi",error)
        }
    } 

    useEffect(() => {
        getInterests();
    },[])

    const ınterestValues = {
        ınterests,
        setInterests
    }

  return <InterestContext.Provider value={ınterestValues}>
    {children}
  </InterestContext.Provider>
}

export  {InterestContext, InterestContextProvider};
