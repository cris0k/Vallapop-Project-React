import T from 'prop-types';
import React, { useState } from 'react';

export const DeleteButton = ({handleDelete}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen}> Delete </button>
            {open && 
            <ConfirmationDialog
            open={open} 
            title={"Delete Advert!"}
            content={"Are you sure you want to delete the advert?"}
            handleOK={handleDelete}
            handleCancel={() => {handleClose()}}/>}
        </div>
    )
}

DeleteButton.protoType = {
    title: T.string,
    content: T.string,
    handleOK: T.func,
    open: T.boolean,
    handleCancel: T.func
}
DeleteButton.defaultProps = {
    open: false,
  };

const ConfirmationDialog =({ handleCancel, handleClose, handleOK, ...props})=>{
    return (
        <dialog
            open={props.open}
            onClose={handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <p id="alert-dialog-title">
                {props.title}
            </p>
            <div>
                <p id="alert-dialog-description">
                    {props.content}
                </p>
            </div>
            <div>
                <button onClick={handleOK}>
                    OK
                </button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </dialog>
    );
}
export default ConfirmationDialog