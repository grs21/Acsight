import React from "react";
import { useSelector } from "react-redux";
import UpdateForm from "../layout/UpdateForm";

function UpdateUserModal() {
    const { updateModalState } = useSelector(state => state.home);
    return (
        updateModalState ? <div className="modal zindex-modal">
            <UpdateForm />
        </div> : ""
    );
}

export default UpdateUserModal;
