import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const[user,setUser] = useState(null)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }


    function logOut() {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        });
        return ()=>{
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;