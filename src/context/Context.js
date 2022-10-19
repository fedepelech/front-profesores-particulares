import React, { useState } from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: '',
        firstName: '',
        surName: '',
        email: '',
        role: ''
    });

    const appState = {
        user,
        setUser
    };

    return (
        <Context.Provider value={appState}>
            {children}
        </Context.Provider>
    )
}

export const ContextConsumer = Context.Consumer;
