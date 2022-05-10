import { createContext, useState } from "react";

export const getOgUserContext = createContext([]);

export const getOgUserContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <getOgUserContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </getOgUserContext.Provider>
  );
};
