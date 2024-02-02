import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss'
import { Context } from '../../Context';
import { ArrowBack, Close } from '@mui/icons-material';

export default function Dialog_() {

    const { dialog, dialogSet, theme } = useContext(Context)

    return (
        <Dialog
            open={dialog?.show}
            onClose={() => dialogSet({ show: false })}
            className={`fcc ${theme === "dark" ? "darkDialog" : ""}`}
        >
            <div className='f jcsb'>
                {dialog?.onBack && <ArrowBack className="m10" onClick={() => dialog?.onBack?.()} />}
                <Close className="mla m10" onClick={() => dialog?.onClose?.() || dialogSet({ show: false })} />
            </div>
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