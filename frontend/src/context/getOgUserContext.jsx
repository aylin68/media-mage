import { createContext, useState} from "react";

export const getOgUserContext = createContext([]);

export const getOgUserContextProvider = ({ children }) => {
  const [searchResults, setSearchResults ] = useState([])

  return (
    <SearchContext.Provider
      value={{searchResults,setSearchResults}}
    >
      {children}
    </SearchContext.Provider>
  );
};