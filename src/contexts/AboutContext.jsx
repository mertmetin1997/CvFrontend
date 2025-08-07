import React, { createContext, useEffect, useState } from 'react'

const AboutContext = createContext();
const AboutContextProvider = ({children}) => {
    const [abouts, setabouts] = useState([]);

    useEffect(() => {
        const getAbouts = async () => {
            try {
                const response = await fetch("https://localhost:7276/api/Abouts");
                const data = await response.json();
                setabouts(data);
            } catch (error) {
                console.error("Hakkında bilgileri getirilemedi", error);
            }
        }
        getAbouts();
    },[])

    const aboutValues = {
        abouts,
        setabouts
    }
    
  return  <AboutContext.Provider value = {aboutValues}>
            {children}
        </AboutContext.Provider>
}

export  {AboutContext, AboutContextProvider}
