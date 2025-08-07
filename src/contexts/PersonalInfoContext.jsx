import React, { createContext, useEffect, useState } from "react";

const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = ({ children }) => {
  const [personalInfos, setPersonalInfos] = useState([]);

  useEffect(() => {
    const getPersonalInfos = async () => {
      try {
        const response = await fetch(
          "https://localhost:7276/api/PersonalInfos"
        );
        const data = await response.json();
        setPersonalInfos(data);
      } catch (error) {
        console.error("kişisel bilgiler getirilemedi", error);
      }
    };
    getPersonalInfos();
  }, []);

  const personalInfoValues = {
    personalInfos,
    setPersonalInfos,
  };

  return (
    <PersonalInfoContext.Provider value={personalInfoValues}>
      {children}
    </PersonalInfoContext.Provider>
  );
};

export { PersonalInfoContext, PersonalInfoContextProvider };
