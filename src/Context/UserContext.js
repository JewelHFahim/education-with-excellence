import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const[user, setUser] = useState();
    const[loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const facebookSignIn = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
          
    }


    const authInfo = {user, createUser, loading, logIn, googleSignIn, facebookSignIn, profileUpdate, logOut}

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value = {authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;