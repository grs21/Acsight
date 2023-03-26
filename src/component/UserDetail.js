import React from "react";
import { Croos } from "../assets/icons/assets";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserDetailModalSatate } from "../stores/slices/modalSlice"

function UserDetail() {
    const dispatch = useDispatch()
    const { showUserDetailState, selectedUser } = useSelector(state => state.home);
    const name = selectedUser.name;
    const email = selectedUser.email;
    const gender = selectedUser.gender;
    const status = selectedUser.status;

    const handleCroosButton = (event) => {
        dispatch(changeUserDetailModalSatate(!showUserDetailState))

    }

    return (
        <div className="card w-50">
            <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
                <h4 className="d-inline">{name}</h4>
                <div onClick={handleCroosButton}>
                    <Croos />
                </div>
            </div>
            <div className="card-body text-left" >
                <div className="d-flex">
                    <p className="card-text fw-bold">E-mail : </p>
                    <div className="ml-1">{email}</div>
                </div>
                <div className="d-flex">
                    <p className="fw-bolder card-text ">Gender :</p>
                    <div className="ml-1"> {gender}</div>
                </div>
                <div className="d-flex">
                    <p className="fw-bolder card-text ">Status :</p>
                    <div className="ml-1"> {status}</div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
