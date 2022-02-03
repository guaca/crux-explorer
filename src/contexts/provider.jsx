import { createContext, useState, useEffect } from 'react';

const Provider = ({ children }) => {
    let initialHistory = [];

    // Helpers to set and get localStorage
    const setLocalStorage = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(e);
        };
    };

    const getLocalStorage = (key, initialValue) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (e) {
            // if error, return initial value
            return initialValue;
        };
    };

    const [history, setHistory] = useState(() => getLocalStorage('history', initialHistory));

    // Update history localStorage when history state changes
    useEffect(() => {
        setLocalStorage('history', history);
    }, [history]);

    const [state, setState] = useState({
        showForm: true,
        showList: true,
        error: null,
        data: {
            from: 'origin',
            device: 'PHONE',
            url: ''
        }
    });

    return (
        <AppContext.Provider value={[
            state,
            setState,
            history,
            setHistory]
        }>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();