import { createContext, useState } from "react";

export const IsLoggedContext = createContext();

const IsLoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const changeLoggedTrue = () => {
    setLogged(true);
  };
  const changeLoggedFalse = () => {
    setLogged(false);
  };

  return (
    <IsLoggedContext.Provider
      value={{ logged, changeLoggedTrue, changeLoggedFalse }}
    >
      {children}
    </IsLoggedContext.Provider>
  );
};

export default IsLoggedProvider;