import React, { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss'
import { Context } from '../../Context';
import DialogIcons from './DialogIcons';
import useWindowSize from "../../hooks/useWindowSize"

export default function Dialog_() {

    const { dialog, dialogSet, theme } = useContext(Context)
    const onClose = () => dialog?.onClose?.() || dialogSet({ show: false })
    const { isMobile } = useWindowSize()

    return (
        <Dialog
            open={dialog?.show}
            onClose={onClose}
            className={`fcc ${theme === "dark" ? "darkDialog" : ""}`}
        >
            {/* show top icons on desktop */}
            {!isMobile && <DialogIcons />}
            <DialogTitle className="fcc tac">
                {dialog?.title}
            </DialogTitle>
            <DialogContent className="fcc">
                {/* CONTENT */}
                {dialog?.children}
            </DialogContent>
            {/* show bottom close icon on mobile: top mobile native (android) menu can hide top dialog icons */}
            {isMobile &&
                <div className="fcc">
                    <DialogIcons closeIconClassName="mb45" backIconClassName="dn" />
                </div>
            }
        </Dialog>
    )
}