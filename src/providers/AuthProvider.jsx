import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                // console.log(currentUser)
                const userEmail = {emai : currentUser.email}

                // oldy style 
            //     fetch(`http://localhost:5000/jwt`,{
            //         method : "POST",
            //         headers : {
            //             'content-type' : 'application/json',
                    
            //         },
            //         body : JSON.stringify(userEmail)
            //     })
            //     .then(res => res.json())
            //     .then(data => {
            //         localStorage.setItem('access-token', data.token)
            //     })

            // using axios 
            axios.post('http://localhost:5000/jwt', userEmail)
            .then(data => {
                localStorage.setItem('access-token', data.data.token)
                // console.log(data.data.token)
            })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => unsubscribe()
    },[])

    const userInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        logOut,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;