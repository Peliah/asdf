import { StyleSheet, Text, View } from 'react-native'

import React, { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState(false)

    const signout = () => {
        setAuthData(null)
    }
    return (
        <AuthContext.Provider value={[authData, setAuthData]}>
        	{ children }
        </AuthContext.Provider>
    );
}
