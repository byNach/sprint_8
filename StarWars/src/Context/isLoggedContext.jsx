import { createContext, useState } from 'react';

export const IsLoggedContext = createContext();

const IsLoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const changeLogged = () => {
    setLogged(logged === true ? false : true);
  };

  return (
    <IsLoggedContext.Provider value={{logged, changeLogged}}>
      {children}
    </IsLoggedContext.Provider>
  )
}

export default IsLoggedProvider;