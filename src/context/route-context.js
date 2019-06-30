import React from 'react'

export const LoiginContextState = React.createContext();
export const LoiginContextSet = React.createContext();

export function RouteProvider({ children }) {
    const [isLogin, setLogin] = React.useState(false)
    function handleLogin() {
        debugger
        setLogin((prev) => !prev)
    }
    return (
        <LoiginContextState.Provider value={{ login: { isLogin } }}>
            <LoiginContextSet.Provider value={handleLogin}>
                {children}
            </LoiginContextSet.Provider>
        </LoiginContextState.Provider>
    )
}

