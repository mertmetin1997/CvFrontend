import React, { createContext, useEffect, useState } from 'react'

const ContactContext = createContext();
const ContactContextProvider = ({children}) => {
    const [contacts, setcontacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const response = await fetch("https://localhost:7276/api/Contacts");
                const data = await response.json();
                setcontacts(data);
            } catch (error) {
                console.error("İletişim bilgileri getirilemedi", error);
            }
        }
        getContacts();
    },[]);

    const contactValues = {
        contacts,
        setcontacts,
    }
  return <ContactContext.Provider value={contactValues}>
    {children}
  </ContactContext.Provider>
}

export {ContactContext, ContactContextProvider}
