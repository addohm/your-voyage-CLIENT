import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss'
import { Context } from '../../Context';

export default function Dialog_() {

    const { dialog, dialogSet } = useContext(Context)

    return (
        <Dialog
            open={dialog?.show}
            onClose={() => dialogSet({ show: false })}
            className={`fcc`}
        >
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