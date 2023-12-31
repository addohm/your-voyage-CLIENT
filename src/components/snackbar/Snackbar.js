import { useContext } from "react";
import { Context } from "../../Context"
import Snackbar from "@mui/material/Snackbar";
import "./index.scss"
import SnackbarMessage from "./SnackbarMessage";
import SnackbarAction from "./SnackbarAction";

export default function _Snackbar() {

	const { snackbar, snackbarSet } = useContext(Context)
	const { show } = snackbar

	return (
		show &&
		<div>
			<Snackbar
				open={show}
				// autoHideDuration={6000}
				onClose={() => snackbarSet({ show: false })}
				message={<SnackbarMessage {...snackbar} />}
				action={<SnackbarAction snackbarSet={snackbarSet} />}
			/>
		</div>
	);
}