import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
    const authInfo = {
        user,
        loading,
        logInWithGoogle
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