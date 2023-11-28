import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from "../../../firebase";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const register = (email, password, user) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, user)

    }
    const updateUserProfile = (name, photo) => {
        setLoading(true);
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

            setUser(currentUser);
            console.log("current user", currentUser);
            if (currentUser) {
                const user = currentUser?.email
                axiosPublic.post('/jwt', { user })
                    .then(res => {
                        console.log(res?.data)
                        localStorage.setItem('Token', res?.data.token);
                        setLoading(false);
                    })
            } else {
                localStorage.removeItem('Token');
                setLoading(false);
            }

        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])
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