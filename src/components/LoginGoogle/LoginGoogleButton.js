import useLogin from "./useLoginGoogle"

export default function LoginGoogleButton({ user }) {

    const { signInWithGoogle } = useLogin()

    return (
        !user &&
        <div className='header__btn' onClick={signInWithGoogle}>Sign in</div>
    )
}
