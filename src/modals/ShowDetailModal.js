import React from "react";
import { useSelector } from "react-redux";
import UserDetail from "../component/UserDetail";

function ShowDetailModal() {
    const { showUserDetailState } = useSelector(state => state.home);
    return (
        showUserDetailState ? <div className="modal zindex-modal">
            <UserDetail />
        </div> : ""
    );
}

export default ShowDetailModal;
