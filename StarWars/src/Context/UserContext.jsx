import { useState, useContext } from "react";

export const UserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext)
}

export const UserProvider = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      {Children}
    </UserContext.Provider>
  )
}