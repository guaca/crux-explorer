import { initializeApp } from 'firebase/app';
import { useContext, createContext } from 'react';

// Modify with your firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_WEB_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

export const app = initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const useAuthState = () => {
    const auth = useContext(AuthContext);

    return {
        isAuthenticated: auth.user != null
    };
};