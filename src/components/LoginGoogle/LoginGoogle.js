import LoginDisplayEmail from "./LoginDisplayEmail"
import LoginGoogleButton from "./LoginGoogleButton"
import LoginTitle from "./LoginTitle"
import { useContext, useState } from "react"
import { Context } from "../../Context"

export default function LoginGoogle() {

    const { user } = useContext(Context)

    return (
        <div>
            {/* <LoginTitle user={user} title="Sign In" /> */}
            <LoginDisplayEmail user={user} />
            <LoginGoogleButton user={user} />
        </div>
    )
}
