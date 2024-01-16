import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

export default function SnackbarAction({ snackbarSet, onClose }) {
	return (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={() => (onClose?.(), snackbarSet({ show: false }))}
			>
				<Close fontSize="small" />
			</IconButton>
		</>
	)
}