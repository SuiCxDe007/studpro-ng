import React, {useContext, useEffect, useMemo, useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: null,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
});

export const AuthContextProvider = (props) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [userUID, setUserUID] = useState('');
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        const storedUID = localStorage.getItem('user');
        setUserUID(storedUID)

        if (storedUserLoggedInInformation === '1' && storedUID) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        navigate("/admin", { replace: true });
        setIsLoggedIn(false);
        setUser(null)
    };

    const notify = (error) => {

        let errorMsg = ''
        if (error === 'auth/user-not-found') {
            errorMsg = 'User Does not Exist!'
        } else if (error === 'auth/wrong-password') {
            errorMsg = 'Invalid Password!'
        } else {
            errorMsg = error
        }
        toast.error(`${errorMsg}`);

    };

    const loginHandler = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate("dashboard");
                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('user', user.uid);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                notify(error.code)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });


    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                user: user
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
