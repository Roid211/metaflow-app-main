import { createContext, useState } from "react";
import { TemporaryUser } from "@metaflow/types";
type AuthContextType = {
    temporaryUser: TemporaryUser ;
    updateTemporaryUser: (user:any) => void;
};


const AuthContext = createContext<AuthContextType>({}  as AuthContextType);

type AuthProviderType = {
    children: React.ReactNode;
};

const initialtemporaryUser: TemporaryUser = {
    email: "",
    username: "",
    password:"",
};


export const AuthProvider = ({children}: AuthProviderType) => {
    const [temporaryUser, setTemporaryUser] = 
    useState<TemporaryUser >(initialtemporaryUser);


    const updateTemporaryUser = (user: TemporaryUser) => {
        setTemporaryUser(user);
    };
    
    return(
        <AuthContext.Provider
        value={{
            temporaryUser,
            updateTemporaryUser,
        }}>{children}</AuthContext.Provider>
    );
};
export default AuthContext;