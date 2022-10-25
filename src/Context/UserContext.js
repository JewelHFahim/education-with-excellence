import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {

    const[user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const facebookSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const profileUpdate = () =>{
        return updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          
    }


    const authInfo = {user, createUser, logIn, googleSignIn, facebookSignIn, profileUpdate, logOut}

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
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