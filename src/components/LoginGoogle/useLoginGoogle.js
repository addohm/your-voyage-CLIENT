// context
import { useContext } from "react";
import { Context } from "../../Context";
// api
import axios from "../../utils/axios";
// firebase
import { auth, googleProvider } from "./firebaseConfig"
import { signInWithPopup, signOut } from "firebase/auth"

export default function useLoginGoogle() {

    const { userSet, dialogSet } = useContext(Context)

    const signInWithGoogle = async (e) => {
        e.preventDefault()
        // get google verified email 
        const res = await signInWithPopup(auth, googleProvider);
        const email = res.user.email
        // add user to DB
        const { token, user } = await axios("/loginGoogle", { email })
        // add token to localStorage
        token && localStorage.setItem("token", token)
        // save user to context
        if (!user) return
        userSet(user)
        dialogSet({ show: false })
    };

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth) // logout from google
        localStorage.removeItem("token") // delete token from localStorage
        window.location.reload()
    }


    return (
        { signInWithGoogle, logout }
    )
}
