import useLoginDialog from "../dialog/useLoginDialog"

export default function LoginBtn() {

    const { showLoginDialog, loginTitle } = useLoginDialog()

    return (
        <div
            className='header__btn loginBtn cursorArrowRightBlack'
            onClick={showLoginDialog}
        >
            {loginTitle}
        </div>
    )
}
