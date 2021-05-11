import firebase from "firebase/app"

export const addAuthListener = (callback) => {
    const onChange = (user) => {
        // this is firebase's user object
        if (user) {
            callback({}) // here we'll pass to callback only needed 'parts' of user
        } else {
            callback(null)
        }
    }

    return firebase.auth().onAuthStateChanged(onChange)
}
