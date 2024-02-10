import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss'
import { Context } from '../../Context';
import { ArrowBack, Close } from '@mui/icons-material';
import DialogIcons from './DialogIcons';

export default function Dialog_() {

    const { dialog, dialogSet, theme } = useContext(Context)
    const onClose = () => dialog?.onClose?.() || dialogSet({ show: false })

    return (
        <Dialog
            open={dialog?.show}
            onClose={onClose}
            className={`fcc ${theme === "dark" ? "darkDialog" : ""}`}
        >
            <DialogIcons dialog={dialog} onClose={onClose} />
            <DialogTitle className="fcc">
                {dialog?.title}
            </DialogTitle>
            <DialogContent className="fcc">
                {/* CONTENT */}
                {dialog?.children}
            </DialogContent>
            <DialogActions className="mb">
                {/* PLACE FOR BUTTONS: better use children */}
            </DialogActions>
        </Dialog>
    )
}