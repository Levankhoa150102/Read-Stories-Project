import React, {createContext, useState} from 'react'
export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [isLoading, SetIsLoading] = useState(true)
    const [userToken, SetUserToken] = useState(null)

    const Login = (username, password) => {
        SetUserToken('fgkj')
        SetIsLoading(false)
    }
    const Logout = () => {
        SetIsLoading(false)
        SetUserToken(null)
    }


    return (
        <AuthContext.Provider value={{Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}
