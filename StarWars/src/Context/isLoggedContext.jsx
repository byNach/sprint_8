import { createContext } from 'react';
import { useState } from 'react';

export const IsLoggedContext = createContext("");

const IsLoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  return (
    <IsLoggedContext.Provider value={logged}>
      {children}
    </IsLoggedContext.Provider>
  )
}

export default IsLoggedProvider;