import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from "../../../firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const logInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const register = (email, password, user) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, user)

    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true);
        return signOut(auth);

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            console.log("current user", currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        logInWithGoogle,
        register,
        updateUserProfile,
        login,
        Logout
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;