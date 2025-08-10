import React, { createContext, useEffect, useState } from 'react'

const AwardsContext = createContext();
const AwardsContextProvider = ({children}) => {

    const [awards, setAwards] = useState([]);
    const getAwards = async ()=> {
        try {
            const response = await fetch("https://localhost:7276/api/Certificates");
            const data = await response.json();
            setAwards(data);            
        } catch (error) {
            console.error("sertificalar ve kazanımlar getirilemedi",error)
        }
    }

    useEffect(() => {
        getAwards();
    },[])

    const awardsValues = {
        awards,
        setAwards
     }


  return <AwardsContext.Provider value={awardsValues}>
    {children}
  </AwardsContext.Provider>
}

export {AwardsContext, AwardsContextProvider}
