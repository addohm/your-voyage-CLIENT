import { useContext } from "react";
import { Context } from "../../Context"
import Snackbar from "@mui/material/Snackbar";
import "./index.scss"
import SnackbarMessage from "./SnackbarMessage";
import SnackbarAction from "./SnackbarAction";

export default function _Snackbar() {

	const { snackbar, snackbarSet } = useContext(Context)
	const { show, onClose, className } = snackbar

	return (
		show &&
		<div>
			<Snackbar
				open={show}
				// onClose = close on click outside
				// onClose={() => snackbarSet({ show: false })}
				// autoHideDuration={6000}
				message={<SnackbarMessage {...snackbar} />}
				action={<SnackbarAction snackbarSet={snackbarSet} onClose={onClose} />}
				className={`${className || ""}`}
			/>
		</div>
	);
}