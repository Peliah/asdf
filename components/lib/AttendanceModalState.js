import React, { useState, createContext, useEffect } from 'react'

export const AttendanceModalContext = createContext()


export const AttendanceModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState(null)

    return (
        <AttendanceModalContext.Provider value={[modalState, setModalState]}>
        	{ children }
        </AttendanceModalContext.Provider>
    );
}
