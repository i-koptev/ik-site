import React, { useState, useEffect, useContext, createContext } from "react"
import Router from "next/router"

import firebase from "./firebase"
import { createUser } from "./db"

const authContext = createContext()

// comments from --> https://usehooks.com/useAuth/
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext)
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleUser = (rawUser) => {
        // const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser)
            // const user = await formatUser(rawUser)
            // const { token, ...userWithoutToken } = user

            createUser(user.uid, user)
            // createUser(user.uid, userWithoutToken)
            setUser(user)

            // cookie.set("fast-feedback-auth", true, {
            //     expires: 1,
            // })

            setLoading(false)
            return user
        } else {
            setUser(false)
            // cookie.remove("fast-feedback-auth")

            setLoading(false)
            return false
        }
    }

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then(
                (response) => handleUser(response.user)
                // {
                //     setUser(response.user)
                //     return response.user
                // }
            )
    }

    const signinWithGoogle = (redirect) => {
        setLoading(true)
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user)

                if (redirect) {
                    Router.push(redirect)
                }
            })
    }

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false)
            })
    }

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(
            handleUser
            //     (user) => {
            //     if (user) {
            //         setUser(user)
            //     } else {
            //         setUser(false)
            //     }
            // }
        )
        // Cleanup subscription on unmount
        return () => unsubscribe()
    }, [])

    return {
        user,
        loading,
        signinWithGithub,
        signinWithGoogle,
        signout,
    }
}

const formatUser = (user) => {
    // const formatUser = async (user) => {
    // const token = await user.getIdToken()
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        // stripeRole: await getStripeRole(),
        // token,
    }
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key]
}
