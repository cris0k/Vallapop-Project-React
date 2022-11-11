import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

AuthContext.displayName = 'Auth';

export const useAuth = () => { //custom Hook must (use<Hook name>)
    const value = useContext(AuthContext);
    return value;
  };

export default AuthContext;