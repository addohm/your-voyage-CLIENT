// context
import { useContext } from "react";
import { Context } from "../../Context";
// api
import axios from "../../utils/axios";
// firebase
import { auth, googleProvider } from "./firebaseConfig"
import { signInWithPopup, signOut } from "firebase/auth"
import { MAIN_ROUTE } from "../../utils/consts";

export default function useLoginGoogle() {

    const { userSet, dialogSet } = useContext(Context)

    const signInWithGoogle = async (e) => {
        e.preventDefault()
        // get google verified email 
        const res = await signInWithPopup(auth, googleProvider);
        const email = res.user.email
        const name = res.user.displayName
        const img = res.user.photoURL
        // add user to DB
        const { token, user } = await axios("/loginGoogle", { email, name, img })
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
        window.location.href = MAIN_ROUTE
    }


    return (
        { signInWithGoogle, logout }
    )
}
