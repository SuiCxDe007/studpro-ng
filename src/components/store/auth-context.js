import React, {useEffect, useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: null,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
});

export const AuthContextProvider = (props) => {

    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1' && user) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
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
                // Signed in
                const user = userCredential.user;
                setUser(user);
                console.log(user)
                // ...
            })
            .catch((error) => {
                notify(error.code)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });


        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
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

export default AuthContext;
